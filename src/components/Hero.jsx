import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <img src="/logo.jpeg" alt="Paula's Cleaning" className="hero-logo" />
        <h1>Professional Cleaning<br /><span>You Can Trust</span></h1>
        <p>
          Expert cleaning services for homes and offices.
          We guarantee your satisfaction — every visit, every time.
        </p>
        <div className="hero-buttons">
          <a href="/#contact" className="btn btn-primary">Get a Free Quote</a>
          <Link to="/portfolio" className="btn btn-outline">See Our Work</Link>
        </div>
      </div>
    </section>
  )
}
