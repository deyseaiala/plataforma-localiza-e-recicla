import { Outlet } from 'react-router-dom';
import { UsuariosContextProvider } from './context/UsuariosContext';
import Header from "./components/header/Header.jsx";
import Footer from './components/footer/Footer';
import 'leaflet/dist/leaflet.css';
import './App.css'

function App() {

  return (
    <>
    
    <UsuariosContextProvider>
      <Header></Header>
      <Outlet> </Outlet>
      <Footer></Footer>
    </UsuariosContextProvider>
  
  
    </>
  )
}

export default App
