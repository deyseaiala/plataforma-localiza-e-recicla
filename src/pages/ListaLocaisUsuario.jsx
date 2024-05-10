
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./listaLocaisUsuario.module.css";
import CardLocalColeta from "../components/card/cardLocalColeta/CardLocalColeta.jsx"




function ListaLocaisUsuario(){
    
   
    let {idUsuario} = useParams()
    //idUsuario = JSON.parse(localStorage.getItem("id"))
    

    const [local, setLocal] = useState();

    useEffect (() => {
        fetch(`http://localhost:3000/locaisColeta?idUsuario=${idUsuario}`)
        .then(response => response.json())
        .then(dados => setLocal(dados))
        .catch(erro => console.log(erro))

    }, [] )

    

    const excluir = async (id) => {
        try {
          const response = await fetch(`http://localhost:3000/locaisColeta/${id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            setLocal(local.filter(local => local.id !== id));
            alert("Local de coleta excluído com sucesso!");
          } else {
            alert("Erro ao remover local de coleta!");
          }
        }
        catch (erro) {
          console.log(erro);
        }
      }
      



    return(
        <div className={styles.conteiner}>
            <h1>Meus locais de coleta cadastrados</h1>
<div className={styles.card}>
            {!!local && local.map(meuLocal => (

        <div key={meuLocal.id}>
          <div>
      <CardLocalColeta locaisColeta={meuLocal}  /> 
      </div>
      <Link to={`/editar-lista/${idUsuario}`} > <button> Editar </button> </Link>
              
        <button onClick={() => excluir(meuLocal.id)}>Excluir</button>
        </div> ))
       
    } 


        </div></div>
    )
}

export default ListaLocaisUsuario