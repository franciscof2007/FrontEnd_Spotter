import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderDetalhes from "./HeaderDetalhes";
import LocalizacaoSala from "./LocalizacaoSala"
import { ObterSalas } from "../Services/SalasService";

function DetalhesSala() {
    const {id} = useParams();
    const [salaInfo, setSalaInfo] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      const dados = await ObterSalas("Alameda");
      // Procura na lista a sala com o ID correto
      const encontrada = dados.salas.find((s) => String(s.id) === String(id));
      setSalaInfo(encontrada);
    }
    carregarDados();
  }, [id]);

  if (!salaInfo) return <p className="text-center mt-10">A carregar...</p>;
  
return (
  
  
<div>
  <div>
    <HeaderDetalhes/>
  </div>

  <div>
     <LocalizacaoSala
        edificio={salaInfo.edificio}
        piso={salaInfo.piso}
        sala={salaInfo.nome}
        capacidade={salaInfo.capacidade}
      />
  </div>

</div>
  );
}

export default DetalhesSala;