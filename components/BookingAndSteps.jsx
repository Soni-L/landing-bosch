import styles from '../styles/BookingAndSteps.module.css'

export default function BookingAndSteps() {
  return (
    <div className={styles.container}>

      <div className={styles.certificationContainer}>
        <div style={{
          height: '538px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(handing_keys.png)'
        }}></div>


        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'start' }}>
          <p className={styles.header}>Bij ons vind je alles voor jouw auto onder één dak</p>
          <p className={styles.text}>Auto by Bosch is een netwerk van onafhankelijke garages voor een APK, algemeen onderhoud en reparaties. Onze autogarages zitten door heel nederland waar u nooit ver hoeft te reizen om bij ons terecht te kunnen. Wij bieden kwaliteit voor alle automerken en automodellen. Meer weten over onze diensten:</p>

          <ul style={{ padding: '1em' }}>
            <li><a className={styles.link} href="https://boschauto.nl/booking">APK</a></li>
            <li><a className={styles.link} href="https://boschauto.nl/booking">Algemeen onderhoud</a></li>
            <li><a className={styles.link} href="https://boschauto.nl/booking">Reparatie</a></li>
          </ul>

          <p className={styles.text}>Maak vandaag nog een afspraak bij een van onze 410 autogarages door heel Nederland.</p>
        </div>
      </div>

      <p className={styles.header}>Van afspraak tot veilig op weg</p>
      <div style={{display: 'flex', alignItems: 'start'}}>
        <img src='icons/circle_check.svg' />
        <div style={{padding: '10px'}}>
          <p className={styles.subHeader}>1. Kies het type onderhoud</p>
          <p className={styles.text}>EHoe kunnen wij jou helpen? Kies een dienst die het beste bij jouw behoeften past. Is uw voertuig toe aan een APK? Of maakt u liever een afspraak voor algemeen onderhoud?</p>
        </div>
      </div>

      <div style={{display: 'flex', alignItems: 'start'}}>
        <img src='icons/circle_check.svg' />
        <div style={{padding: '10px'}}>
          <p className={styles.subHeader}>2. Geef details van je auto op</p>
          <p className={styles.text}>Voor welk voertuig wilt u bij ons langskomen? Vertel ons meer over uw auto door uw kenteken in te voeren op onze website. Met deze informatie kunnen we u verder helpen.</p>
        </div>
      </div>

      <div style={{display: 'flex', alignItems: 'start'}}>
        <img src='icons/circle_check.svg' />
        <div style={{padding: '10px'}}>
          <p className={styles.subHeader}>3. Kies jouw lokale garage gebaseerd op jouw behoeften</p>
          <p className={styles.text}>Waar moeten we voor u een Bosch autogarage zoeken? Voer uw postcode in op de website zodat wij diensten in uw regio kunnen vinden. Selecteer de garage naar keuze.</p>
        </div>
      </div>

      <div style={{display: 'flex', alignItems: 'start'}}>
        <img src='icons/circle_check.svg' />
        <div style={{padding: '10px'}}>
          <p className={styles.subHeader}>4. Bevestig uw afspraak</p>
          <p className={styles.text}>Na een autogarage, tijd en datum gekozen te hebben voor uw afspraak hebben we alleen nog uw contactgegevens nodig. Tot snel in de garage.</p>
        </div>
      </div>
      <p className={styles.header2}>... en je kan weer veilig en vertrouwd op weg</p>

      <button className={styles.button}><span className={styles.buttonText}>Plan direct je afspraak</span></button>


      {/* FAQ Section */}
      <p className={styles.header} style={{marginTop: '100px'}}>Veelgestelde vragen</p>

      <p className={styles.textBold}>Geven jullie aangesloten garages voor de keuring een prijsindicatie?</p>
      <p className={styles.text}>Uw Auto by Bosch autogarage stemt voor een APK of reparaties altijd vooraf met u af wat de kosten zijn. Wanneer deze kosten toch hoger uitvallen dan gedacht, stellen wij u altijd op tijd op de hoogte. We kunnen niet per direct een prijsindicatie geven voor algemeen onderhoud.</p>
      <div style={{borderBottom: '1px solid #EFF1F2', width: '100%', paddingTop: '15px'}}></div>

      <p className={styles.textBold}>Zijn garages aangesloten bij Auto by Bosch BOVAG-gecertificeerd?</p>
      <p className={styles.text}>Ja, onze aangesloten garages staan voor echte kwaliteit en zijn BOVAG-gecertificeerd. De garages bezitten dus een algemeen geaccepteerd kwaliteitskeurmerk. Ons netwerk van aangesloten garages ontvangt professionele ondersteuning van BOVAG.</p>
      <div style={{borderBottom: '1px solid #EFF1F2', width: '100%', paddingTop: '15px'}}></div>

      <p className={styles.textBold}>Waarom is regelmatig onderhoud belangrijk?</p>
      <p className={styles.text}>Als u het volste vertrouwen wilt hebben in de veiligheid en de betrouwbaarheid van uw voertuig. laat dan regelmatig een algemeen onderhoud uitvoeren. Praktisch betekent dit één keer per jaar. Wanneer u uw auto intensief gebruikt en veel kilometers maakt, wordt het interval korter.</p>
      <div style={{borderBottom: '1px solid #EFF1F2', width: '100%', paddingTop: '15px'}}></div>

      <p className={styles.textBold}>Wat wordt gecontroleerd bij een APK?</p>
      <p className={styles.text}>Tijdens een APK controleert een keurmeester van Auto by Bosch uw auto nauwkeurig op essentiële onderdelen. Deze onderdelen hebben directe invloed op de veiligheid van uw voertuig en op de verkeersveiligheid. Alles wordt gecontroleerd: banden, remmen, wielophanging, schokdempers, stuurinrichting, verlichting, carrosserie en de veiligheidsgordels. Daarnaast wordt met diagnoseapparatuur een uitlaatgastest uitgevoerd om te meten of uw auto wel voldoet aan de wettelijke emissie-eisen. Verder controleert hij uw auto op eventuele vloeistoflekkage en checkt hij of de registratie van het voertuig in orde is. </p>
    </div>
  )
}
