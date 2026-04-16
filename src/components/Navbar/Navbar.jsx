import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../../utils/constants'
import styles from './Navbar.module.css'

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>

        {/* Brand */}
        <a href="#home" className={styles.brand} onClick={closeMenu}>
          <span className={styles.brandDot} />
          <span className={styles.brandText}>Marco Montecillo</span>
        </a>

        {/* Desktop nav links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
          </button>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.overlayVisible : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile menu drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileLink} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
