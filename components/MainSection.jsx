import styles from '../styles/MainSection.module.css'
import { useRouter } from 'next/router'

export default function MainSection() {
    const router = useRouter()


    const generateHeader = (router) => {
        const queryObject = router.query;

        if (queryObject?.location && !queryObject?.service) {
            return `Problemen met uw auto? Plan direct een afspraak bij u in ${decodeURIComponent(queryObject?.location)}!`
        }

        if (queryObject?.service?.toLowerCase() === 'apk' && !queryObject?.location) {
            return `Boek uw volgende APK bij u in de buurt in slechts een paar klikken!`
        }

        if (queryObject?.service?.toLowerCase() === 'garage' && !queryObject?.location) {
            return `Vind snel & eenvoudig een garage bij u in de buurt!`
        }

        if (queryObject?.service?.toLowerCase() === 'motor' && !queryObject?.location) {
            return `Problemen met uw auto? Plan direct een afspraak bij u in de buurt!`
        }

        if (queryObject?.service?.toLowerCase() === 'apk' && queryObject?.location) {
            return `Boek uw volgende APK bij u in ${decodeURIComponent(queryObject?.location)} in slechts een paar klikken!`
        }

        if (queryObject?.service?.toLowerCase() === 'garage' && queryObject?.location) {
            return `Vind snel & eenvoudig een garage bij u in ${decodeURIComponent(queryObject?.location)}!`
        }

        if (queryObject?.service?.toLowerCase() === 'motor' && queryObject?.location) {
            return `Problemen met uw auto? Plan direct een afspraak bij u in ${decodeURIComponent(queryObject?.location)}!`
        }

        else {
            return 'Problemen met uw auto? Plan direct een afspraak bij u in de buurt!'
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        window.location.replace(localStorage.getItem('PrivacyAgreement') ?
            `${process.env.NEXT_PUBLIC_BOSCHAUTO_NL_URL}/booking?PrivacyAgreement=true`
            : `${process.env.NEXT_PUBLIC_BOSCHAUTO_NL_URL}/booking`);
    }

    return (
        <div className={styles.container}>
            <p className={styles.headerMain}>{generateHeader(router)}</p>
            <p className={styles.subHeader}>Voor uw eigen veiligheid en het welzijn van het milieu is het belangrijk om uw auto periodiek te laten controleren. Tijdens deze keuring controleert een professionele monteur uw auto zorgvuldig. Zo is uw auto weer klaar om de weg op te gaan.</p>
            <button onClick={handleClick} className={styles.button} ><span className={styles.buttonText}>Plan direct je afspraak</span></button>

            <div id='waar-je-op-kunt-rekenen' className={styles.image}
                style={{
                    position: 'relative',
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))',
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

            <button className={styles.button} onClick={handleClick}><span className={styles.buttonText}>Plan direct je afspraak</span></button>
        </div>
    )
}
