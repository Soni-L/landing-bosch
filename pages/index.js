import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <meta name="description" content="Car service booking by Bosch" />
        <meta name="keywords"
          content="auto, vervangen, accu, airco, beurt, banden, leeg, versnellingsbak, apk, branden, grote, kapot, kleine, motorblok, garage, geluid, niet, start, autolampjes, band, condensor, controleren, dashboard, kapotte, keuring, lampjes, lege, loopt, motor, nakijken, onderhoud, piepen, problemen, remmen, repareren, snel, uitlijnen, wisselen, autobedrijf, autogarage, motorproblemen" />
        <title>Auto</title>
      </Head>
      <div  className={styles.boschHeader} style={{backgroundImage: 'url(BoschHorizontalBorder.svg)'}}/>
    </div>
  )
}
