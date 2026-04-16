import { SKILLS } from '../../utils/constants'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className="container">

        <div className="section-header reveal">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
        </div>

        <div className={styles.grid}>
          {Object.entries(SKILLS).map(([category, items], i) => (
            <div
              key={category}
              className={`${styles.category} reveal reveal-delay-${i + 1}`}
            >
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.list}>
                {items.map(skill => (
                  <div key={skill.label} className={styles.skillItem}>
                    <i className={skill.icon} />
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
