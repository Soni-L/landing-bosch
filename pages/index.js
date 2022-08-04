import Head from 'next/head'
import PageNavigation from '../components/PageNavigation';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.css'
import MainSection from '../components/MainSection';
import BookingAndSteps from '../components/BookingAndSteps';
import LocationNetwork from '../components/LocationNetwork';
import Conclusion from '../components/Conclusion';


export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <meta name="description" content="Car service booking by Bosch" />
        <meta name="keywords"
          content="auto, vervangen, accu, airco, beurt, banden, leeg, versnellingsbak, apk, branden, grote, kapot, kleine, motorblok, garage, geluid, niet, start, autolampjes, band, condensor, controleren, dashboard, kapotte, keuring, lampjes, lege, loopt, motor, nakijken, onderhoud, piepen, problemen, remmen, repareren, snel, uitlijnen, wisselen, autobedrijf, autogarage, motorproblemen" />
        <title>Auto</title>
      </Head>
      {/* Bosch Horizontal rainbow header */}
      <div className={styles.boschHeader} style={{ backgroundImage: 'url(BoschHorizontalBorder.svg)' }} />

      {/* value advertisement header */}
      <div className={styles.valueContainer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} className={styles.check} />
          <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px', color: '#2e3033' }}>Geen onverwachte kosten</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} className={styles.check} />
          <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px', color: '#2e3033' }}>BOVAG-gecertificeerd</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} className={styles.check} />
          <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px', color: '#2e3033' }}>Gegarandeerde kwaliteit van Bosch</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} className={styles.check} />
          <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px', color: '#2e3033' }}>
            Met behoud van fabrieksgarantie</span>
        </div>
      </div>

      {/* Page navigation header */}
      <PageNavigation />

      {/* Main section */}
      <MainSection />

      {/* Booking, steps and FAQ */}
      <BookingAndSteps />

      {/* Locations Network*/}
      <LocationNetwork />

      {/* Conclusion Section*/}
      <Conclusion />

      <Footer />
    </div>
  )
}
