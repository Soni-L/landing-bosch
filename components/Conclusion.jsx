import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Conclusion.module.css'

export default function Conclusion() {

    const handleClick = (e) => {
        e.preventDefault()
        window.location.replace(localStorage.getItem('PrivacyAgreement') ?
            `${process.env.NEXT_PUBLIC_BOSCHAUTO_NL_URL}/booking?PrivacyAgreement=true`
            : `${process.env.NEXT_PUBLIC_BOSCHAUTO_NL_URL}/booking`);
    }

    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.container}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                    <p className={styles.header}>Een vakkundige garage, zo gevonden</p>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                        <FontAwesomeIcon icon={faCheck} className={styles.check} />
                        <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px', color: 'white' }}>U kunt voor alles omtrent uw auto bij ons terecht</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                        <FontAwesomeIcon icon={faCheck} className={styles.check} />
                        <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px', color: 'white' }}>Wij bieden u kwaliteit service</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                        <FontAwesomeIcon icon={faCheck} className={styles.check} />
                        <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px', color: 'white' }}>Er is altijd een Auto by Bosch autobedrijf bij u in de buurt</span>
                    </div>

                    <button onClick={handleClick} className={styles.button}><span className={styles.buttonText}>Kies een dienst die bij u past</span></button>
                </div>
                <div className={styles.image} style={{ backgroundImage: 'url(happy_driver.webp)' }} />

            </div>
        </div>
    )
}
