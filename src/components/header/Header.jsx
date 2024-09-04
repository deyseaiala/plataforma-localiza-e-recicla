import {Link} from 'react-router-dom';
import styles from "./header.module.css"
import { useNavigate } from 'react-router-dom';


function Header() {
  
  let idUsuario = JSON.parse(localStorage.getItem("id"))
  const navigate  = useNavigate()

  function logout(){
    localStorage.clear()
    navigate("/login");
  }

    return (
      <div className={styles.conteiner}>
       <nav >
        <div className={styles.logo}>
        <img width="30" height="30" src="src\assets\reciclagemBranco.png" alt="recycle-sign"></img>
        <a>RECICLA FLORIPA</a>
        </div>
        <div className={styles.link}>
        <a><Link to="/" >Home</Link></a>
        <a><Link to="/cadastro-locais-coleta" >Cadastre Local</Link></a>
        <a><Link to={`/lista-locais-usuario/${idUsuario}`} >Meus Locais</Link></a></div>
        <div className={styles.button}>
        <button onClick={() => logout()}>SAIR</button>
        </div>
        
       </nav>
      </div>
    )
  }
  
export default Header;