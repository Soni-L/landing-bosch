import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright} style={{ flex: 1 }}>© 2022 Robert Bosch GmbH. Alle rechten voorbehouden.</div>
      <Link href='https://boschauto.nl/legal-note'><a className={styles.link}>Wettelijke opmerkingen</a></Link>
      <Link href='https://boschauto.nl/data-privacy'><a className={styles.link}>Gegevens privacy</a></Link>
      <Link href='https://boschauto.nl/imprint'><a className={styles.link}>Afdruk</a></Link>
      <Link href='https://boschauto.nl/terms-of-service'><a className={styles.link}>Servicevoorwaarden</a></Link>
    </div>
  )
}
