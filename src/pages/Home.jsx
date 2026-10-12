import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { PROJECTS } from '../data/projects'

function ArrowIcon({ className = '' }) {
  return (
    <svg
      className={`icon-arrow ${className}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 11.5l7-7M5.5 4.5h6v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function trackSpotlight(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

const SKILLS = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
  },
  {
    label: 'Tools & Frameworks',
    items: ['React', 'Node.js', 'Git', 'PostgreSQL', 'scikit-learn'],
  },
  {
    label: 'Currently exploring',
    items: ['Machine Learning', 'Data Systems', 'Applied AI'],
  },
]

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="section-inner hero-inner">
        <p className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          Open to internship opportunities
        </p>
        <h1 className="hero-title">
          Tanay Malavia
          <span className="hero-title-sub">builds software &amp; data systems.</span>
        </h1>
        <p className="hero-desc">
          I design databases, wrangle data into shape, and build the machine
          learning models that make sense of it. Currently looking for
          internship opportunities where I can do all three.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            See my work
            <ArrowIcon />
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
        <dl className="hero-meta">
          <div>
            <dt>Studying</dt>
            <dd>Computer Science, Fresno State</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Data systems &amp; applied ML</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>Python · SQL · React</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <Reveal as="div" className="section-inner about-grid">
        <div>
          <p className="section-kicker">01 · About</p>
          <h2 className="section-title">
            I like problems with a lot of <em>moving pieces.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I'm a Computer Science student who gravitates toward the
            unglamorous middle of a project: cleaning messy data, designing a
            schema that won't fall apart, writing the query that actually
            answers the question. That groundwork is what makes the flashy
            parts — dashboards, models, predictions — trustworthy.
          </p>
          <p>
            Right now that means normalizing databases for coursework, and
            building a machine learning project with a four-person team.
            Longer term, I want to work on systems where data engineering and
            applied ML meet.
          </p>
        </div>
      </Reveal>
    </section>
  )
}

function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-inner">
        <Reveal as="div">
          <p className="section-kicker">02 · Selected work</p>
          <h2 className="section-title">Things I've <em>built.</em></h2>
        </Reveal>
        <div className="project-list">
          {PROJECTS.map((project, i) => (
            <Reveal
              as={Link}
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="project-card"
              style={{ '--card-accent': project.accent, transitionDelay: `${i * 60}ms` }}
              onMouseMove={trackSpotlight}
            >
              <span className="project-spotlight" aria-hidden="true" />
              <div className="project-card-top">
                <span className="project-index">
                  0{i + 1} <span className="project-year">/ {project.year}</span>
                </span>
                <span className="project-arrow">
                  <ArrowIcon />
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-blurb">{project.blurb}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-cta">Read the case study</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <Reveal as="div">
          <p className="section-kicker">03 · Toolkit</p>
          <h2 className="section-title">What I <em>work with.</em></h2>
        </Reveal>
        <div className="skills-grid">
          {SKILLS.map((group, i) => (
            <Reveal
              as="div"
              key={group.label}
              className="skills-group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3>{group.label}</h3>
              <ul className="chip-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <Reveal as="div" className="section-inner contact-inner">
        <p className="section-kicker">04 · Contact</p>
        <h2 className="section-title contact-title">
          Let's build something <em>worth shipping.</em>
        </h2>
        <a className="contact-email" href="mailto:malaviatanay@gmail.com">
          malaviatanay@gmail.com
          <ArrowIcon />
        </a>
        <div className="contact-links">
          <a
            className="contact-link"
            href="https://github.com/malaviatanay"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowIcon />
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/tanay-malavia-7b85b5238/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowIcon />
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
