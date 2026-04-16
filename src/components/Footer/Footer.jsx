import { SITE, NAV_LINKS } from '../../utils/constants'
import styles from './Footer.module.css'

export default function Footer() {
  // Dynamic year — never goes stale
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>

          {/* Brand */}
          <div className={styles.brand}>
            <a href="#home" className={styles.brandName}>Marco Montecillo</a>
            <p className={styles.brandSub}>Full Stack Developer — Philippines</p>
          </div>

          {/* Nav links */}
          <nav className={styles.nav} aria-label="Footer navigation">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} Marco Montecillo. All rights reserved.
          </p>
          <p className={styles.built}>
            Built with React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
