
import { useContext, useState } from "react";
import { UsuariosContext } from "../context/UsuariosContext";


function Login() {

  const {login} = useContext(UsuariosContext)

  const [usuario, setUsuario] = useState({ email: "", password: ""})

    async function fazerLogin(){
      await login(usuario.email,usuario.senha)
    }
  


  return(
    <div>
        <h1>Login</h1>
        <form>  
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
          


    <button onClick={() => fazerLogin()}>Entrar</button>
        
        </form>
    </div>
  )

}

export default Login;
