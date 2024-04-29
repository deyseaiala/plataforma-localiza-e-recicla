import { createContext, useState } from "react";


export const UsuariosContext = createContext();

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState([]);

    async function login(email,senha){

        try {
           const response = await fetch("http://localhost:3000/usuariosCadastrados");
           const dados = await response.json();

          let usuarioEncontrado = false;

          dados.map(usuario => {
            if(usuario.email == email){
              usuarioEncontrado = true
              if(usuario.senha == senha){
                localStorage.setItem("usuarioLogado", true)
                window.location.href = "/"
                return
              }
    
              alert("Senha incorreta!")
              return
            }
    
          })
    
          if(!usuarioEncontrado){
            alert("Insira um email válido!")
          }
    
        } catch {
    
        }
      }


    return (
        <UsuariosContext.Provider value={{usuarios, setUsuarios, login}}>
            {children}
        </UsuariosContext.Provider>
    )

}