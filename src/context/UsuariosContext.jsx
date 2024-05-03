import { createContext, useState } from "react";


export const UsuariosContext = createContext();

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState([]);
    const [locais, setLocais] = useState([]);

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

      function getUsuarios(){
        fetch("http://localhost:3000/usuariosCadastrados")
        .then(response => response.json())
        .then(dados => setUsuarios(dados))
        .catch(erro => console.log(erro))
      }
    
      function enviarParaApi(dados) {
        fetch("http://localhost:3000/usuariosCadastrados", {
          method: "POST",
          body: JSON.stringify(dados),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          alert("Usuário cadastrado com sucesso!")
          getUsuarios();
        })
        .catch(() => alert("Erro ao cadastrar usuário!"))
      }

      function getLocais(){
        fetch("http://localhost:3000/locaisColeta")
        .then(response => response.json())
        .then(dados => setLocais(dados))
        .catch(erro => console.log(erro))
      }

      function enviarLocalApi(dados) {
        fetch("http://localhost:3000/locaisColeta", {
          method: "POST",
          body: JSON.stringify(dados),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          alert("Novo ponto de coleta cadastrado com sucesso!")
          getLocais();
        })
        .catch(() => alert("Erro ao cadastrar ponto de coleta!"))
      }




     
      

    return (
        <UsuariosContext.Provider value={{usuarios, setUsuarios, login, enviarParaApi, getUsuarios, locais, setLocais, getLocais, enviarLocalApi}}>
            {children}
        </UsuariosContext.Provider>
    )

}