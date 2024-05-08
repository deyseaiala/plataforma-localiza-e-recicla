import styles from "./cardInfo.module.css"

function CardInfo(){


    return(
        <div className={styles.conteiner}>
            <span>Segundo a Comcap, os Ecopontos espalhados por Florianópolis, possibilitam o desvio do aterro sanitário de mais de 11 mil toneladas de resíduos por ano, impactando diretamente na redução de custos com a destinação destes materiais. Os equipamentos atendem mais de 14 mil usuários por mês, por toda a cidade. </span>
            <img width="30" height="30" src="src\assets\info.png" alt="info"/>

        
        </div>
    )
}

export default CardInfo;