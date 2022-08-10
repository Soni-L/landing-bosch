import styles from '../styles/PageNavigation.module.css'

export default function PageNavigation() {
    const handleClick = (e, id) => {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }
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

            <a href='' onClick={(e) => handleClick(e, '#waar-je-op-kunt-rekenen')} className={styles.link}>Waar je op kunt rekenen</a>
            <a href='' onClick={(e) => handleClick(e, '#wat-wij-doen')} className={styles.link}>Wat wij doen</a>
            <a href='' onClick={(e) => handleClick(e, '#hoe-het-werkt')} className={styles.link}>Hoe het werkt</a>
            <a href='' onClick={(e) => handleClick(e, '#veelgestelde-vragen')} className={styles.link}>Veelgestelde vragen</a>
            <a href='' onClick={(e) => handleClick(e, '#auto-by-bosch')} className={styles.link}>Auto by Bosch</a>
        </div>
    )
}
