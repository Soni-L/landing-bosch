
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
                margin: '0 auto',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url(blue_car.png)'
            }}>
            </div>

            <p className={styles.header}>Waar je op kunt rekenen</p>
            <p className={styles.subHeader}>Voor reparatie, onderhoud en service kunt u met een gerest hart bij een Auto by Bosch autobedrijf terecht.</p>

            <div style={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            }}>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='icons/clock_icon.svg' />
                    <span style={{ margin: '0 5px' }} />
                    <span className={styles.iconText}>Bespaar tijd met snelle, digitale boeking</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='icons/money_bag.svg' />
                    <span style={{ margin: '0 5px' }} />
                    <span className={styles.iconText}>Vooraf weten wat de kosten zijn (m.u.v de algemene onderhoud)</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='icons/headset.svg' />
                    <span style={{ margin: '0 5px' }} />
                    <span className={styles.iconText}>Krijg hulp van onze erkende specialisten</span>
                </div>


                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='icons/location_pin.svg' />
                    <span style={{ margin: '0 5px' }} />
                    <span className={styles.iconText}>Met 410 locaties in Nederland, altijd een bij jou in de buurt!</span>
                </div>


                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='icons/tools.svg' />
                    <span style={{ margin: '0 5px' }} />
                    <span className={styles.iconText}>Onze aangesloten autobedrijven zijn BOVAG-gecertificeerd</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='icons/double_check.svg' />
                    <span style={{ margin: '0 5px' }} />
                    <span className={styles.iconText}>Wij bieden u de kwaliteit van Bosch producten</span>
                </div>

            </div>

            <button className={styles.button}><span className={styles.buttonText}>Plan direct je afspraak</span></button>
        </div>
    )
}
