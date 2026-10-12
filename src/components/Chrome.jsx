import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <Link className="nav-brand" to="/" aria-label="Tanay Malavia, home">
        <span className="nav-mark">TM</span>
        <span className="nav-name">Tanay Malavia</span>
      </Link>
      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className={`nav-toggle ${open ? 'nav-toggle-open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Tanay Malavia</span>
      <button
        type="button"
        className="footer-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top ↑
      </button>
    </footer>
  )
}
