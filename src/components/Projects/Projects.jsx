import { PROJECTS } from '../../utils/constants'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">

        <div className="section-header reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Work</h2>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i + 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const isComingSoon = project.status === 'coming-soon'

  return (
    <div className={`${styles.card} ${isComingSoon ? styles.comingSoon : ''} reveal reveal-delay-${delay}`}>

      {/* Image or placeholder */}
      <div className={styles.imageWrap}>
        {isComingSoon ? (
          <div className={styles.comingSoonPlaceholder}>
            <i className="fas fa-code" />
            <span>Coming Soon</span>
          </div>
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.overlay}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayLink}
                  aria-label="View live project"
                >
                  <i className="fas fa-external-link-alt" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayLink}
                  aria-label="View source code"
                >
                  <i className="fab fa-github" />
                </a>
              )}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          {isComingSoon && (
            <span className={styles.badge}>In Progress</span>
          )}
        </div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.techList}>
          {project.tech.map(t => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>
      </div>

    </div>
  )
}
