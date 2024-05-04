import {Link} from 'react-router-dom';

function Header() {


    return (
      <div>
       <nav >
        <div>
        <a>Localiza e Recicla</a>
        </div>
        <div>
        <Link to="/" >Home</Link>
        <Link to="/lista-locais-coleta" >Pontos de coleta</Link>
        <Link to="/cadastro-locais-coleta" >Cadastro de pontos</Link>
        </div>
       </nav>
      </div>
    )
  }
  
export default Header;