import CardUsuarios from "../components/card/cardUsuarios/CardUsuarios";
import ListagemLocais from "../components/listagemLocais/ListagemLocais";
import MapaGeral from "../components/mapas/MapaGeral";
import CardInfo from "../components/card/cardInfo/CardInfo";
import CardLocais from "../components/card/cardLocais/CardLocais";
import styles from "./dashboard.module.css"

function Dashboard() {



    return ( 
    
    <div className={styles.conteiner}>
      <h2>DASHBOARD</h2>
      <div className={styles.cards}>
        <CardUsuarios></CardUsuarios>
        <CardInfo></CardInfo>
        <CardLocais></CardLocais>
      </div>

      <div className={styles.mapa}>
        <MapaGeral ></MapaGeral>
      </div>
      <div>
        <ListagemLocais></ListagemLocais>
      </div>
  </div>
  );
  }

  
  export default Dashboard;