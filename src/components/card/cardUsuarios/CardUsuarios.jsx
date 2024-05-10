import { useContext, useEffect } from "react";
import { UsuariosContext } from "../../../context/UsuariosContext";
import styles from "./cardUsuarios.module.css"

function CardUsuarios(){
    const {getUsuarios} = useContext(UsuariosContext)
    const {total} = useContext(UsuariosContext)

    useEffect(() => {
        getUsuarios()
    }, [])


    return(
        <div className={styles.conteiner}>

        <div className={styles.total}>
            <span >Usuários ativos</span>
            <img width="30" height="30" src="src\assets\user.png"/>

        </div>
            <span className={styles.valor} >{total}</span>
        

        </div>    
    )

}

export default CardUsuarios;