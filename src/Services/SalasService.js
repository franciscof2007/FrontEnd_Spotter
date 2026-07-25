
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
        const dadosOriginais=dadosTeste.results || []


        const SalasFormatadas = dadosOriginais.map((sala)=>({
            id:sala.fenix_id,
            nome:sala.name,
            edificio:sala.building_name,
            piso:sala.floor,
            campus:sala.campus,
            capacidade:sala.normal_capacity,
            disponibilidade:sala.status,
            livre_desde:sala.available_from,
            livre_ate:sala.available_until



        }))
        return{
            //salas:resposta.data.results || []
            salas: SalasFormatadas,
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

