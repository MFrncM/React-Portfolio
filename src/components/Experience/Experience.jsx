import { EXPERIENCE } from '../../utils/constants'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className="container">

        <div className="section-header reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Professional Journey</h2>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCE.map((item, i) => (
            <div
              key={item.id}
              className={`${styles.item} reveal reveal-delay-${i + 1}`}
            >
              {/* Timeline marker */}
              <div className={styles.markerCol}>
                <div className={styles.dot} />
                {i < EXPERIENCE.length - 1 && <div className={styles.line} />}
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.company}>{item.company}</p>
                  </div>
                  <span className={styles.duration}>{item.duration}</span>
                </div>

                <ul className={styles.bullets}>
                  {item.bullets.map((bullet, bi) => (
                    <li key={bi} className={styles.bullet}>
                      <span className={styles.bulletDot} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
