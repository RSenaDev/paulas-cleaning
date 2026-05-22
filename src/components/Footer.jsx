import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-logo">
            <img src="/logo.jpeg" alt="Paula's Cleaning" />
            <p>Professional cleaning services for homes and offices.<br />Your satisfaction is our guarantee.</p>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#services">Services</a></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/#contact">Get a Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/#services">Regular Cleaning</a></li>
              <li><a href="/#services">Deep Cleaning</a></li>
              <li><a href="/#services">Move In / Out</a></li>
              <li><a href="/#services">Commercial</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Paula's Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
