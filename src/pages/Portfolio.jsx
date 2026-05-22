import { useState } from 'react'
import { portfolioItems } from '../data/portfolio'
import PortfolioCard from '../components/PortfolioCard'

const categories = ['All', 'Residential', 'Deep Clean', 'Commercial', 'Move In/Out', 'Post-Construction']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === active)

  return (
    <main>
      {/* Page header */}
      <div className="portfolio-page-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Real work, real results — every job done with care.</p>
        </div>
      </div>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          {/* Filter buttons */}
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="portfolio-full-grid">
            {filtered.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
