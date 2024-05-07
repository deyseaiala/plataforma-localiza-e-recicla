import { useContext, useEffect } from "react";
import { UsuariosContext } from "../../../context/UsuariosContext";

function CardUsuarios(){
    const {getUsuarios} = useContext(UsuariosContext)
    const {total} = useContext(UsuariosContext)

    useEffect(() => {
        getUsuarios()
    }, [])


    return(
        <div>

            <h1>Usuários ativos: {total}</h1>
           

        </div>
    )

}

export default CardUsuarios;