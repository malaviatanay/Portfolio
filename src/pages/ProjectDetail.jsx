import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import { PROJECTS, getProject } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <section className="section project-notfound">
        <div className="section-inner">
          <p className="section-kicker">Not found</p>
          <h1 className="section-title">That project doesn't exist.</h1>
          <Link className="btn btn-primary" to="/#work" style={{ marginTop: '2rem' }}>
            Back to work
          </Link>
        </div>
      </section>
    )
  }

  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <article className="project-page" style={{ '--card-accent': project.accent }}>
      <section className="project-hero">
        <div className="project-hero-blob" aria-hidden="true" />
        <div className="section-inner">
          <Link className="project-back" to="/#work">
            ← All work
          </Link>
          <p className="project-hero-meta">
            {project.role} · {project.year}
          </p>
          <h1 className="project-hero-title">{project.title}</h1>
          <p className="project-hero-tagline">{project.tagline}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="hero-actions project-hero-actions">
            {project.links.live && (
              <a
                className="btn btn-primary"
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
              >
                View live
              </a>
            )}
            {project.links.repo && (
              <a
                className="btn btn-ghost"
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
              >
                View repo
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section project-stats-section">
        <div className="section-inner">
          <Reveal as="div" className="project-stats-row">
            {project.stats.map((stat) => (
              <div key={stat.label} className="project-stat">
                <div className="project-stat-value">{stat.value}</div>
                <div className="project-stat-label">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section-inner project-narrow">
          <Reveal as="div">
            <p className="section-kicker">The problem</p>
            <p className="project-overview">{project.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Reveal as="div">
            <p className="section-kicker">How it came together</p>
            <h2 className="section-title">The approach.</h2>
          </Reveal>
          <div className="timeline">
            {project.approach.map((step, i) => (
              <Reveal
                as="div"
                key={step.title}
                className="timeline-step"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="timeline-marker">
                  <span>{i + 1}</span>
                </div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner project-narrow">
          <Reveal as="div">
            <p className="section-kicker">Result</p>
            <p className="project-outcome">{project.outcome}</p>
          </Reveal>
        </div>
      </section>

      <section className="section project-stack-section">
        <div className="section-inner">
          <Reveal as="div">
            <p className="section-kicker">Built with</p>
            <div className="project-tags project-stack-tags">
              {project.stack.map((tech) => (
                <span key={tech} className="project-tag">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section project-next-section">
        <Link className="project-next" to={`/projects/${next.slug}`}>
          <span className="section-kicker">Next up</span>
          <span className="project-next-title">{next.title} →</span>
        </Link>
      </section>
    </article>
  )
}
