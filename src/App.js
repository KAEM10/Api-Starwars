import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa componentes de react-router-dom para manejar enrutamiento en la aplicación
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos de Bootstrap

import PeopleList from './components/peopleList'; // Importa componente PeopleList
import ViewCharacteristics from './components/viewCharacteristics'; // Importa componente ViewCharacteristics

function App() {
  return (
    <Router> {/* Inicia el enrutador de la aplicación */}
      <div className="container p-4"> {/* Contenedor principal de la aplicación */}
        <Routes> {/* Define las rutas de la aplicación */}
          <Route path="/" element={<PeopleList />} />
          <Route path="/characteristics/:id" element={<ViewCharacteristics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
