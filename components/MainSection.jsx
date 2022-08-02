
import styles from '../styles/MainSection.module.css'

export default function MainSection() {
    return (
        <div className={styles.container}>
            <p className={styles.header}>Boek uw volgende APK bij u in de buurt in slechts een paar klikken!</p>
            <p className={styles.subHeader}>Voor uw eigen veiligheid en het welzijn van het milieu is het belangrijk om uw auto periodiek te laten controleren. Tijdens deze keuring controleert een professionele monteur uw auto zorgvuldig. Zo is uw auto weer klaar om de weg op te gaan.</p>
            <button className={styles.button}><span className={styles.buttonText}>Plan direct je afspraak</span></button>

            <div style={{
                position: 'relative',
                height: '300px', 
                width: '700px', 
                margin : '0 auto',
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat', 
                backgroundImage: 'url(blue_car.png)' }}>
            </div>
            
        </div>
    )
}
