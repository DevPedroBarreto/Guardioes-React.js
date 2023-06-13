import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
function Menu(){
    return(
        <header className={styles.headercontainer}>
            <div>
                <h1 className={styles.titlecontent}> GUARDIOES DA GALAXIA</h1>
            </div>
            <nav>
                <ul className={styles.menucontainer}>
                    <li>
                        <Link className={styles.menucontent} exact to="/">PETER QUILL</Link>
                    </li>
                    <li>
                        <Link className={styles.menucontent} to="/Gamora">GAMORA</Link>
                    </li>
                    <li>
                        <Link className={styles.menucontent} to="/Rocket">ROCKET RACCOON</Link>
                    </li>
                    <li>
                        <Link className={styles.menucontent} to="Drax">DRAX</Link>
                    </li>
                    <li>
                        <Link className={styles.menucontent} to="Groot">GROOT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu;