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
      <Link className="nav-brand" to="/">
        TM
      </Link>
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

export function Footer() {
  return (
    <footer className="footer">
      <span>Designed & built by Tanay Malavia</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  )
}
