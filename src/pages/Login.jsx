import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UsuariosContext } from "../context/UsuariosContext";
import styles from "./login.module.css"


function Login() {

  const {login} = useContext(UsuariosContext);

  const [usuario, setUsuario] = useState({ email: "", password: ""});

  async function fazerLogin(e){
    e.preventDefault()
    await login(usuario.email,usuario.senha)
  }
  


  return(
    <div className={styles.conteiner}>
      <div className={styles.imagem}>
      
      </div>
      <div className={styles.loginForm}>
     <div className={styles.logo}>
      <img width="50" height="50" src="src\assets\reciclagemAzul.png" alt="marker--v1"></img>
        <h1>RECICLA FLORIPA</h1>
        </div>
        <form>  
          <div className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={usuario.email}
          placeholder="Digite seu email"
          onChange={(evento) =>
          setUsuario({ ...usuario, email: evento.target.value })
          } />
          

          
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          value={usuario.senha}
          placeholder="Digite a senha do usuário"
          onChange={(evento) =>
          setUsuario({ ...usuario, senha: evento.target.value })
          } />
          </div>

          <div className={styles.btn}>
    <button onClick={(e) => fazerLogin(e)}>ENTRAR</button>
    <Link to="/cadastro-novo-usuario"><button type="button"> CADASTRE-SE </button></Link>
        </div>
        </form>
    </div></div>
  )

}

export default Login;
