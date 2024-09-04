import styles from "./cardLocalColeta.module.css"

function CardLocalColeta({locaisColeta}){

   

    return (
        <div className={styles.conteiner}>
            <img width="48" height="48" src="src\assets\reciclagem.png" alt="marker--v1"></img>
            <h3>{locaisColeta.nomeLocal}</h3>
            <p>{locaisColeta.descricao}</p>
            <div>
            <p>Endereço: {locaisColeta.logradouro}, {locaisColeta.numero} {locaisColeta.complemento}</p>
            <p> Bairro: {locaisColeta.bairro}</p>
            <p>Cidade: {locaisColeta.cidade} - {locaisColeta.estado}</p> {locaisColeta.cep}
            </div>
            <p>Tipos de resíduos aceitos: </p>
            <ul className="checkbox">
                {locaisColeta.vidro? <li>Vidro</li> : ""}
                {locaisColeta.metal? <li>Metal</li> : ""}
                {locaisColeta.papel? <li>Papel</li> : ""}
                {locaisColeta.plastico? <li>Plástico</li> : ""}
                {locaisColeta.organico? <li>Orgânico</li> : ""}
                {locaisColeta.baterias? <li>Baterias</li> : ""}
                {locaisColeta.outros? <li>Outros</li> : ""}
            </ul>
            
            

        </div>
    )

}

export default CardLocalColeta;
