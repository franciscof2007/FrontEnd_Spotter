import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/ListOfRooms/SearchPage';
import CampusSelection from './components/Campus/CampusSelection';
import RoomDetails from './components/Details/RoomDetails';
// 1. Importa o novo componente
import FiltersAvailability from './components/Filters/FiltersAvailability'; // ajusta o caminho do ficheiro se necessário

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route de teste temporária */}
        <Route path="/teste" element={<FiltersAvailability />} />

        {/* Rotas existentes da tua aplicação */}
        <Route path="/:campus" element={<SearchPage />} />
        <Route path="/" element={<CampusSelection />} /> 
        <Route path="/sala/:id" element={<RoomDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;