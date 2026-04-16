import { useExperienceYears } from '../../hooks/useExperienceYears'
import { PROJECTS } from '../../utils/constants'
import styles from './About.module.css'

export default function About() {
  const yearsLabel = useExperienceYears()

  // Count only live projects (not coming-soon)
  const liveProjects = PROJECTS.filter(p => p.status === 'live').length

  const stats = [
    { value: `${yearsLabel} yrs`, label: 'Experience' },
    { value: `${liveProjects}+`,  label: 'Projects Shipped' },
    { value: '6+',                label: 'Systems Maintained' },
  ]

  return (
    <section className={styles.about} id="about">
      <div className="container">

        <div className="section-header reveal">
          <span className="section-label">About</span>
          <h2 className="section-title">The Person Behind the Code</h2>
        </div>

        <div className={styles.grid}>

          {/* Text */}
          <div className={`${styles.textBlock} reveal reveal-delay-1`}>
            <p className={styles.lead}>
              I'm a full-stack developer working as the sole IT developer
              for the Office of the University Registrar at Centro Escolar University —
              building and maintaining all their custom web systems from the ground up.
            </p>
            <p className={styles.body}>
              I inherited and completely overhauled a suite of internal portals —
              including the Admission System, Document Request Portal, and Exit Clearance System.
              That means I've debugged code I didn't write, rebuilt algorithms from scratch,
              and shipped features that directly affect thousands of students.
            </p>
            <p className={styles.body}>
              I'm currently deepening my skills in React, Angular, and automation tooling
              with the goal of moving to a more competitive, larger company.
              I value clean, reliable systems over clever ones — and I believe
              the best code is the kind that doesn't need explaining.
            </p>

            <div className={styles.techRow}>
              {['PHP', 'JavaScript', 'MySQL', 'HTML/CSS', 'Git', 'REST APIs'].map(t => (
                <span key={t} className={styles.techPill}>{t}</span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className={`${styles.statsBlock} reveal reveal-delay-2`}>
            {stats.map(stat => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}

            <div className={styles.highlightCard}>
              <i className="fas fa-star" />
              <p>Completely restructured the CEU Admission System algorithm — solo, from scratch.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
