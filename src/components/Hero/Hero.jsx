import { SITE } from '../../utils/constants'
import styles from './Hero.module.css'

export default function Hero() {
  const handleCvDownload = () => {
    showNotification('CV download started! Thanks for your interest.')
  }

  return (
    <section className={styles.hero} id="home">
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>

          {/* Text side */}
          <div className={styles.text}>
            <span className={styles.badge}>Available for opportunities</span>

            <h1 className={styles.title}>
              <span className={styles.greeting}>Hi, I'm</span>
              <span className={styles.name}>Marco<br />Montecillo</span>
              <span className={styles.role}>Full Stack Developer</span>
            </h1>

            <p className={styles.description}>
              I build custom web systems that actually work — clean, reliable,
              and built to last. Based in the Philippines, open to remote work.
            </p>

            <div className={styles.buttons}>
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
              <a
                href={SITE.cvPath}
                download={SITE.cvFilename}
                className="btn btn-ghost"
                onClick={handleCvDownload}
              >
                <i className="fas fa-download" />
                CV
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className={styles.imageWrap}>
            <div className={styles.imageFrame}>
              <img
                src="/img/pic.png"
                alt="Marco Montecillo"
                className={styles.profileImg}
              />
            </div>
            <div className={styles.imageBg} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className={styles.scrollArrow} aria-label="Scroll to about">
        <i className="fas fa-chevron-down" />
      </a>
    </section>
  )
}

// Simple toast — no dependency needed
function showNotification(message) {
  const existing = document.getElementById('portfolio-toast')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.id = 'portfolio-toast'
  toast.textContent = message
  toast.style.cssText = `
    position: fixed; top: 20px; right: 20px;
    background: var(--color-accent); color: #fff;
    padding: 0.85rem 1.4rem; border-radius: 0.5rem;
    font-family: var(--font-body); font-size: 0.875rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 9999; max-width: 320px;
    animation: toastIn 0.3s ease-out;
  `

  const style = document.createElement('style')
  style.textContent = `
    @keyframes toastIn { from { opacity:0; transform: translateY(-10px); } to { opacity:1; transform: translateY(0); } }
  `
  document.head.appendChild(style)
  document.body.appendChild(toast)

  setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transition = 'opacity 0.3s ease'
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}
