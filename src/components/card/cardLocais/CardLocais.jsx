import { useContext, useEffect } from "react";
import { UsuariosContext } from "../../../context/UsuariosContext";
import styles from "./cardLocais.module.css";

function CardLocais(){
    const {getLocais} = useContext(UsuariosContext)
    const {totalLocais} = useContext(UsuariosContext)

    useEffect(() => {
        getLocais()
    }, [])


    return(
        <div className={styles.conteiner}>

            <div className={styles.total}>
                <span >Pontos de coleta</span>
                <img width="30" height="30" src="src\assets\location.png" alt="marker--v1"/>
            </div>
                <span className={styles.valor} >{totalLocais}</span>
               

        </div>
    )

}

export default CardLocais;