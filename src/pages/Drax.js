import styles from './Drax.module.css'

import drax from '../images/drax.jpg'

function Drax (){
    return(
        <div>
            <main className={styles.mainContainer}>
                <img className={styles.image} src={drax} alt="Imagem do Drax"/>
                <div className={styles.textContainer}>
                <p>Drax tem uma personalidade bem única, originalmente, ele era Sarcástico, frio e amargurado pelo passado, sendo grosso e rude com todos.</p>
            </div>
            </main>
            
        </div>
    )
}

export default Drax;