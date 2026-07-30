import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import CampusSelection from './components/CampusSelection';
import RoomDetails from './components/RoomDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Until the campus page exists, use the search page at the root route so the current work is visible. */}
        <Route path="/:campus" element={<SearchPage />} />
       
        <Route path="/" element={<CampusSelection />} /> 
        
        <Route path="/sala/:id" element={<RoomDetails />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
