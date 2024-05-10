import { Outlet } from 'react-router-dom';
import { UsuariosContextProvider } from './context/UsuariosContext';
import Header from "./components/header/Header.jsx";
import Footer from './components/footer/Footer';
import 'leaflet/dist/leaflet.css';
import './App.css'

function App() {

  return (
    <div className='conteiner'>
    
    <UsuariosContextProvider>
      <div className="menu">
      <Header></Header>
      </div>
      <div className="corpo">
      <Outlet> </Outlet>
      <Footer></Footer>
      </div>
    </UsuariosContextProvider>
  
  
    </div>
  )
}

export default App
