import styles from './Peter.module.css'

import peter from '../images/peter.jpg'



function Peter (){
    return(
        <main className={styles.mainContainer}>
           
            <img className={styles.image} src ={peter}  alt="imagem do Peter Quill"/>
            <div className={styles.textContainer}>
                <p>Peter Quill (Senhor das Estrelas) conhecido por sua personalidade impulsiva e irreverente, 
                além de seu senso de humor sarcástico. 
                Se você é do tipo que gosta de liderar e não tem medo de correr riscos, pode se identificar com Peter Quill.
                </p>
            </div>
        </main>
    )
}

export default Peter