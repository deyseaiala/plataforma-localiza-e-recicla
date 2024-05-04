

function CardLocalColeta({locaisColeta}){

    if(locaisColeta.vidro = true){
        (<ul className="checkbox">
            <li>Vidro</li>
        </ul>)
    }
    if(locaisColeta.metal = true){
        (<ul className="checkbox">
            <li>Metal</li>
        </ul>)
    }
    if(locaisColeta.papel = true){
        (<ul className="checkbox">
            <li>Papel</li>
        </ul>)
    }
    if(locaisColeta.plastico = true){
        (<ul className="checkbox">
            <li>Plástico</li>
        </ul>)
    }
    if(locaisColeta.organico = true){
        (<ul className="checkbox">
            <li>Orgânico</li>
        </ul>)
    }
    if(locaisColeta.baterias = true){
        (<ul className="checkbox">
            <li>Baterias</li>
        </ul>)
    }
    if(locaisColeta.outros = true){
        (<ul className="checkbox">
            <li>Outros</li>
        </ul>)
    }


    return (
        <div>
            <h3>{locaisColeta.nomeLocal}</h3>
            <p>{locaisColeta.descricao}</p>
            <p>Endereço: {locaisColeta.logradouro}, {locaisColeta.numero} {locaisColeta.complemento}</p>
            <p> Bairro: {locaisColeta.bairro}</p>
            <p>Cidade: {locaisColeta.cidade} - {locaisColeta.estado}</p> {locaisColeta.cep}
            <p>Tipos de resíduos aceitos: </p>
            <ul className="checkbox"></ul>
            <p>Latitude: {locaisColeta.latitude}  Longitude: {locaisColeta.longetude}</p>
            

        </div>
    )

}

export default CardLocalColeta;
