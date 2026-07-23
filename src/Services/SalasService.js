
import api from "./Api";
import dadosTeste from "../../teste.json";



export async function ObterSalas(campus, pagina=1) {
    //try{
      //  const resposta= await api.get(`/rooms`,{
      //      params:{
        //        campus,
          //      page:pagina,

            //},
        //});
        return{
            //salas:resposta.data.results || []
            salas: dadosTeste.results || [],
            pagina: dadosTeste.page,
            total: dadosTeste.count,
            PaginaAnterior: dadosTeste.last_page,
            ProximaPagina: dadosTeste.next_page,

        };
        

   // }catch (erro)
    //{
      //  console.error("Erro ao obter a lista de salas", erro);
        //throw erro;
    //}

}

export async function ObterSala(id) {
    try{
        const resposta= await api.get(`/salas`,{
            params:{id},
        });
        return resposta.data;

    }catch (erro)
    {
        console.error("Erro ao obter o detalhe da sala", erro);
        throw erro;
    }

}

