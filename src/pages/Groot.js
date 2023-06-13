import styles from  './Groot.module.css'

import groot from '../images/groot-1.jpg'

function Groot (){
    return(
        <div>
            <main className={styles.mainContainer}>
                <img className={styles.image} src={groot} alt="imagem do Groot"/>
            <div className={styles.textContainer}>
                <p>Groot, que possui característica de uma árvore humanoide, ganhou o carinho das pessoas com seu jeito meigo, sua personalidade amigável e comportamento muito ingênuo. Mas, o que poucos sabem é que no início da sua história, que começou em quadrinhos no ano de 1960, ele não era tão silencioso.</p>
            </div>
            </main>
        </div>
    )
}

export default Groot;