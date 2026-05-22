import { Link } from 'react-router-dom'
import { portfolioItems } from '../data/portfolio'
import PortfolioCard from './PortfolioCard'

export default function PortfolioPreview() {
  const preview = portfolioItems.slice(0, 3)

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">A glimpse of the results we deliver.</p>

        <div className="portfolio-grid">
          {preview.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        <div className="portfolio-center">
          <Link to="/portfolio" className="btn btn-primary">View Full Portfolio</Link>
        </div>
      </div>
    </section>
  )
}
