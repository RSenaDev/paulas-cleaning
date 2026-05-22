const reasons = [
  { icon: 'fa-star',          title: '100% Satisfaction',    desc: "Not happy? We'll come back and fix it — free of charge." },
  { icon: 'fa-leaf',          title: 'Eco-Friendly Products', desc: 'Safe for your family, pets and the environment.' },
  { icon: 'fa-shield-halved', title: 'Reliable & Insured',   desc: 'Punctual, professional, and fully covered.' },
  { icon: 'fa-clock',         title: 'Flexible Scheduling',  desc: 'We work around your schedule, including weekends.' },
]

export default function WhyUs() {
  return (
    <section className="section section-bg">
      <div className="container">
        <h2 className="section-title">Why Choose Paula's?</h2>
        <p className="section-subtitle">We're new — but our results speak for themselves.</p>

        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <i className={`fas ${r.icon}`}></i>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
