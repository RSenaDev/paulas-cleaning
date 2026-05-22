import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="nav-logo" onClick={close}>
          <img src="/logo.jpeg" alt="Paula's Cleaning" />
        </Link>

        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/#services" onClick={close}>Services</a></li>
          <li><Link to="/portfolio" onClick={close}>Portfolio</Link></li>
          <li><a href="/#contact" onClick={close}>Contact</a></li>
          <li>
            <a href="/#contact" className="btn btn-primary" onClick={close}>
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
