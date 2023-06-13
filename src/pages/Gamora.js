import styles from './Gamora.module.css'

import gamora from '../images/gamora.jpg'

function Gamora (){
    return(
        <main className={styles.mainContainer}>
            <img className={styles.image} src={gamora} alt="Imagem da Gamora"/>
            
            <div className={styles.textContainer}>
                <p>Gamora é a guerreira do grupo. Ela é habilidosa em combate e é uma estrategista inteligente. Ela também é conhecida por sua determinação em alcançar seus objetivos.
                </p>
            </div>
        </main>
    )
}

export default Gamora