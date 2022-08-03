import Head from 'next/head'
import PageNavigation from '../components/PageNavigation';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.css'
import MainSection from '../components/MainSection';
import BookingAndSteps from '../components/BookingAndSteps';
import LocationNetwork from '../components/LocationNetwork';


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
      <div style={{
        width: '70%',
        margin: '15px auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} className={styles.check} />
          <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px' }}>Geen onverwachte kosten</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} className={styles.check} />
          <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px' }}>BOVAG-gecertificeerd</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} className={styles.check} />
          <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px' }}>Gegarandeerde kwaliteit van Bosch</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCheck} className={styles.check} />
          <span style={{ fontFamily: 'BoschSansRegular', fontSize: '14px' }}>
            Met behoud van fabrieksgarantie</span>
        </div>
      </div>

      {/* Page navigation header */}
      <PageNavigation />

      {/* Main section */}
      <MainSection/>

      {/* Booking, steps and FAQ */}
      <BookingAndSteps/>

      {/* Locations Network*/}
      <LocationNetwork/>

      <Footer />
    </div>
  )
}
