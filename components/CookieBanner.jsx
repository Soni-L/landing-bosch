import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/CookieBanner.module.css'

export default function CookieBanner({ onExit, onAgree }) {
    return (
        <div className={styles.container}>
            <div className={styles.horizontalLayout}>
                <p className={styles.text} style={{ flex: '1' }}>Wij en derden gebruiken cookies op onze website. We gebruiken cookies voor statistische, voorkeur en marketing doeleinden. Google Analytics cookies zijn geanonimiseerd.  Door op ‘Akkoord’ te klikken accepteer je het gebruik van alle cookies zoals beschreven in onze <span><a className={styles.link} href='https://boschauto.nl/data-privacy'>privacy gegevens</a></span></p>
                <button onClick={onAgree} className={styles.button}><span className={styles.buttonText}>Akkoord</span></button>
                <FontAwesomeIcon icon={faXmark} className={styles.exitButton} onClick={onExit} />
            </div>
        </div>
    )
}
