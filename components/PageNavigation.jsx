import styles from '../styles/PageNavigation.module.css'
import Link from 'next/link'

export default function PageNavigation() {
    return (
        <div className={styles.container}>
            <div
                style={{
                    flex: 1,
                    margin: 0,
                    padding: 0,
                    height: '45px',
                    width: '100px',
                    backgroundImage: 'url(Auto_Bosch_Logo_colored.svg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                }} >
            </div>

            <Link href='#'><a className={styles.link}>Waar je op kunt rekenen</a></Link>
            <Link href='#'><a className={styles.link}>Wat wij doen</a></Link>
            <Link href='#'><a className={styles.link}>Hoe het werkt</a></Link>
            <Link href='#'><a className={styles.link}>Veelgestelde vragen</a></Link>
            <Link href='#'><a className={styles.link}>Auto by Bosch</a></Link>
        </div>
    )
}
