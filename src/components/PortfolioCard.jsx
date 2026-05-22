import { useState } from 'react'

export default function PortfolioCard({ item }) {
  const isBeforeAfter = !!(item.beforeImage && item.afterImage)
  const [showAfter, setShowAfter] = useState(true)

  const imageSrc = isBeforeAfter
    ? (showAfter ? item.afterImage : item.beforeImage)
    : item.image

  return (
    <div className="portfolio-card">
      <div
        className="portfolio-thumb"
        style={{ background: imageSrc ? undefined : item.color }}
      >
        {imageSrc
          ? <img src={imageSrc} alt={item.title} />
          : <i className={`fas ${item.icon}`}></i>
        }

        {isBeforeAfter && (
          <span className={`ba-badge ${showAfter ? 'ba-after' : 'ba-before'}`}>
            {showAfter ? 'After' : 'Before'}
          </span>
        )}
      </div>

      {isBeforeAfter && (
        <div className="ba-toggle-row">
          <button
            className={`ba-btn ${!showAfter ? 'ba-btn-active' : ''}`}
            onClick={() => setShowAfter(false)}
          >
            Before
          </button>
          <button
            className={`ba-btn ${showAfter ? 'ba-btn-active' : ''}`}
            onClick={() => setShowAfter(true)}
          >
            After
          </button>
        </div>
      )}

      <div className="portfolio-info">
        <p className="portfolio-tag">{item.category}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  )
}
