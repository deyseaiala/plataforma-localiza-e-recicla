import { Outlet } from 'react-router-dom';
import { UsuariosContextProvider } from './context/UsuariosContext';

import './App.css'

function App() {

  return (
    <>
    
    <UsuariosContextProvider>
      
      <Outlet> </Outlet>
      
    </UsuariosContextProvider>
  
  
    </>
  )
}

export default App
