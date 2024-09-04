import styles from "./footer.module.css"

function Footer() {


    return (
      <div className={styles.conteiner}>

       <p>Feito por Deyse Aiala</p>
       

       <nav>
       <a href='https://github.com/deyseaiala' ><img width="30" height="30" src="src\assets\icons8-github-30.png" alt="github"></img> </a>
       </nav>
      </div>
    )
  }

export default Footer;