import styles from './Rocket.module.css'
import Rockt from '../images/Rockt.jpg'
function Rocket (){
    return(
        <main className={styles.mainContainer}>
            <img className={styles.image} src={Rockt} alt="Imagem do Rocket"/>
            <div className={styles.textContainer}>
                <p>Rocket Raccoon tem uma personalidade forte, é excelente estrategista de combates e sua lealdade aos Guardiões da Galáxia está acima de qualquer suspeita. Podemos esperar ação desenfreada, muitas risadas e um belo desenvolvimento na relação de amizade entre Rocket, Groot e Peter Quill.</p>
            </div>
        </main>
    )
}

export default Rocket;