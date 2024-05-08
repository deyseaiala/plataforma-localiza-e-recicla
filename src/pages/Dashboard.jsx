import CardUsuarios from "../components/card/cardUsuarios/CardUsuarios";
import ListagemLocais from "../components/listagemLocais/ListagemLocais";
import MapaGeral from "../components/mapas/MapaGeral";
import CardInfo from "../components/card/cardInfo/CardInfo";
import CardLocais from "../components/card/cardLocais/CardLocais";

function Dashboard() {



    return ( 
    
    <div>
      <h1>Localiza e Recicla</h1>

      <CardUsuarios></CardUsuarios>
      <CardLocais></CardLocais>
      <CardInfo></CardInfo>
      <MapaGeral ></MapaGeral>
      <ListagemLocais></ListagemLocais>
  
  </div>
  );
  }

  
  export default Dashboard;