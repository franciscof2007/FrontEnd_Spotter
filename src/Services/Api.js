import axios from "axios";

const api=axios.create({
    baseURL: 'https://spotter-api-ly4z.onrender.com/api/',
    timeout:60000,
});

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
