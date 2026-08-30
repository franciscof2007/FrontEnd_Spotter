import axios from "axios";

const api=axios.create({
    baseURL: 'https://spotter-api-ly4z.onrender.com/api/',
    timeout:60000,
});

if (import.meta.env.MODE === 'development') {
    api.interceptors.request.use((config) => {
        const pageParams = new URLSearchParams(window.location.search);
        const mockScenario = pageParams.get('mock_scenario');

        if (mockScenario) {
            config.params = {
                ...config.params,
                mock_scenario: mockScenario,
            };
        }

        return config;
    });
}


api.interceptors.response.use(
    response => response,
    (error)=>{

        let message="Ocorreu um erro ao contactar com o servidor.";
        let type = "unknown_error";
        let status = error.response?.status || null;

        if (error.code==="ECONNABORTED"){
            type="timeout";
            message="O pedido demorou demasiado tempo. Tenta novamente.";
        }
        else if (!error.response) {
            type = "offline";
            message = "Não foi possível ligar ao servidor. Verifica a tua ligação.";
        } else if (status === 404) {
            type = "not_found";
            message = "Sala não encontrada.";
        } else if (status >= 500) {
            type = "server_error";
            message = "Erro do servidor. Tenta novamente mais tarde.";
        }else if(status === 400){
            type = "invalid_body";
            message = "Erro no body";
        }else if(status===429){
            type= "rate_limit";
            message= "Limite global de 10 reports/hora excedidos.";
        }


        const normalizedError= {
            type,
            message,
            status,
            data:error.response?.data ||null,

            
        };

        return Promise.reject(normalizedError);
    }
);

export default api;
