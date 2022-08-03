import styles from '../styles/LocationNetwork.module.css'

export default function LocationNetwork() {
    return (
        <div className={styles.container}>
            <div className={styles.mapSection}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                    <p className={styles.header} style={{ margin: 0 }}>Auto by Bosch</p>
                    <p className={styles.text}>Bij Auto by Bosch doen we alles voor uw auto. Wij bieden deskundig advies met vakkundig onderhoud en reparatiewerk. Wij zijn een netwerk van onafhankelijke garages voor <a href='https://boschauto.nl/' className={styles.link}>APK</a>, <a href='https://boschauto.nl/' className={styles.link}>algemeen onderhoud</a> en <a href='https://boschauto.nl/' className={styles.link}>reparatie</a>.</p>
                    <p className={styles.text} style={{ margin: 0 }}>Wij bieden betaalbare kwaliteit waarop u kunt vertrouwen. Met meer dan 410 garages door heel Nederland verzekeren wij u altijd van service bij u in de regio.</p>
                </div>
                <div style={{ height: '400px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: 'url(bosch_map.png)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div>
                    <p className={styles.header2}>410 garages</p>
                    <p className={styles.text}>In Nederland hebben wij meer dan 410 Auto by Bosch autogarages. Er is er dus altijd wel eentje bij u in de regio te vinden. Bekijk op onze website met uw postcode welke garage het dichts bij zit.</p>
                </div>
                <div>
                    <p className={styles.header2}>Onderhoud en reparatie</p>
                    <p className={styles.text}>Bij Auto by Bosch hebben we alles onder één dak. Wij bieden deskundig onderhoud en reparatiewerk. U kunt bij ons terecht voor een APK, algemeen onderhoud en reparaties.</p>
                </div>
                <div>
                    <p className={styles.header2}>Kwaliteit</p>
                    <p className={styles.text}>Auto by Bosch is lid van het BOVAG, dit bewijst dat ons netwerk van aangesloten garages voor echte kwaliteit staat. Al onze garages zijn BOVAG-gecertificeerd en dus in het bezit van een algemeen geaccepteerd kwaliteitskeurmerk.</p>
                </div>
            </div>
        </div>
    )
}
