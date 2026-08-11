import { useEffect, useRef, useState } from 'react'
import './App.css'

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const PROJECTS = [
  {
    title: 'Bulldog Mapping',
    blurb:
      'Interactive web map of the Fresno State campus, built with a Scrum team — Mapbox-based navigation, AI-assisted building search, and OCR-parsed floor plans on a Supabase backend.',
    tags: ['Next.js', 'Mapbox GL', 'Supabase', 'AI/OCR'],
    year: '2026',
    href: 'https://github.com/malaviatanay/Bulldog-Mapping',
    accent: 'var(--accent-4)',
  },
  {
    title: 'SchemaGP',
    blurb:
      'End-to-end database design project: cleaned raw data, modeled a BCNF-normalized schema, and built SQL analytics queries with charted insights.',
    tags: ['SQL', 'PostgreSQL', 'Data Modeling', 'BCNF'],
    year: '2026',
    href: 'https://github.com/darpanattri/SchemaGP',
    accent: 'var(--accent)',
  },
  {
    title: 'Applied-Machine-Learning-with-scikit-learn',
    blurb:
      'CSCI 164 final project with a four-person team: supervised learning on two datasets, three algorithms each, with hyperparameter tuning and comparison to prior published work.',
    tags: ['Python', 'scikit-learn', 'Machine Learning'],
    year: 'Apr 2026',
    href: 'https://github.com/malaviatanay/Applied-Machine-Learning-with-scikit-learn',
    accent: 'var(--accent-2)',
  },
  {
    title: 'This Portfolio',
    blurb:
      'The site you’re looking at — designed and built from scratch with React and Vite, no template.',
    tags: ['React', 'Vite', 'CSS'],
    year: '2026',
    href: 'https://github.com/malaviatanay/Portfolio',
    accent: 'var(--accent-3)',
  },
]

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

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a className="nav-brand" href="#top">
        TM
      </a>
      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-blob" aria-hidden="true" />
      <p className="hero-eyebrow">Computer Science @ Fresno State</p>
      <h1 className="hero-title">
        Tanay Malavia
        <span className="hero-title-sub">builds software & data systems.</span>
      </h1>
      <p className="hero-desc">
        I design databases, wrangle data into shape, and build the machine
        learning models that make sense of it. Currently looking for
        internship opportunities where I can do all three.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#work">
          See my work
        </a>
        <a className="btn btn-ghost" href="#contact">
          Get in touch
        </a>
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
            I like problems that involve a lot of moving pieces.
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
          <h2 className="section-title">Things I've built.</h2>
        </Reveal>
        <div className="project-list">
          {PROJECTS.map((project, i) => (
            <Reveal
              as="a"
              key={project.title}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
              className="project-card"
              style={{ '--card-accent': project.accent, transitionDelay: `${i * 60}ms` }}
            >
              <div className="project-card-top">
                <span className="project-index">0{i + 1}</span>
                <span className="project-year">{project.year}</span>
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
          <h2 className="section-title">What I work with.</h2>
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
              <ul>
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
          Let's build something worth shipping.
        </h2>
        <div className="contact-links">
          <a className="contact-link" href="mailto:malaviatanay@gmail.com">
            malaviatanay@gmail.com
          </a>
          <a
            className="contact-link"
            href="https://github.com/malaviatanay"
            target="_blank"
            rel="noreferrer"
          >
            github.com/malaviatanay
          </a>
        </div>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <span>Designed & built by Tanay Malavia</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
