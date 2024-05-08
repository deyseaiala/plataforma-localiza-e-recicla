import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {
  
  let idUsuario = JSON.parse(localStorage.getItem("id"))
  const { navigate } = useNavigate()

  function logout(){
    localStorage.clear()
    navigate("/login");
  }

    return (
      <div>
       <nav >
        <div>
        <a>Localiza e Recicla</a>
        </div>
        <div>
        <Link to="/" >Home</Link>
        <Link to="/lista-locais-geral" >Locais de coleta geral</Link>
        <Link to="/cadastro-locais-coleta" >Cadastre um local de coleta</Link>
        <Link to={`/lista-locais-usuario/${idUsuario}`} >Meus locais</Link>
        <button onClick={() => logout()}>SAIR</button>
        
        </div>
       </nav>
      </div>
    )
  }
  
export default Header;