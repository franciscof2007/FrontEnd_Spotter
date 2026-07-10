import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPesquisa from './Componentes/PaginaPesquisa';
import EscolhaCampus from './Componentes/EscolhaCampus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Como ainda não criámos a página do Campus, vamos colocar a tua página de pesquisa logo na raiz "/" para poderes ver o teu trabalho */}
        <Route path="/salas" element={<PaginaPesquisa />} />
        
       
        <Route path="/campus" element={<EscolhaCampus />} /> 
        {/* <Route path="/sala/:id" element={<DetalhesSala />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
