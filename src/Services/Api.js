import axios from "axios";

const api=axios.create({
    baseURL:'https://api/',
    timeout:10000,
});

api.interceptors.response.use(
    response => response,
    (error)=>{

        let mensagem="Ocorreu um erro ao contactar com o servidor.";
        let tipo = "erro_desconhecido";
        let status = error.response?.status || null;

        if (error.code==="ECONNABORTED"){
            tipo="timeout";
            mensagem="O pedido demorou demasiado tempo. Tenta novamente.";
        }
        else if (!error.response) {
            tipo = "sem_internet";
            mensagem = "Não foi possível ligar ao servidor. Verifica a tua ligação.";
        } else if (status === 404) {
            tipo = "nao_encontrado";
            mensagem = "Sala não encontrada.";
        } else if (status >= 500) {
            tipo = "erro_servidor";
            mensagem = "Erro do servidor. Tenta novamente mais tarde.";
        }


        const erro_normalizado= {
            tipo,
            mensagem,
            status,
            dados:error.response?.data ||null,

            
        };

        return Promise.reject(erro_normalizado);
    }
);

export default api;