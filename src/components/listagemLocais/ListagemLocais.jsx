import { useEffect, useState } from "react";
import CardLocalColeta from "../card/cardLocalColeta/CardLocalColeta";
import styles from "./listagemLocais.module.css"

function ListagemLocais(){
    
    const [locais, setLocais] = useState()

    useEffect(() => {
        fetch("http://localhost:3000/locaisColeta")
        .then(response => response.json())
        .then(dados => setLocais(dados))
        .catch(erro => console.log(erro))
    }, [])

    return (
        <div className={styles.listagem}>
            
            {!!locais && locais.map((local,index) => (
      <CardLocalColeta locaisColeta={local} key={index} /> ))}
        </div>
    )

}

export default ListagemLocais;