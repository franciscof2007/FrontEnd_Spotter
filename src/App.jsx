import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/ListOfRooms/SearchPage';
import CampusSelection from './components/Campus/CampusSelection';
import RoomDetails from './components/Details/RoomDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rotas existentes da tua aplicação */}
        <Route path="/:campus" element={<SearchPage />} />
        <Route path="/" element={<CampusSelection />} /> 
        <Route path="/:campus/sala/:id" element={<RoomDetails />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;