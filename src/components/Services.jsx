const services = [
  { icon: 'fa-broom',           title: 'Regular Home Cleaning',    desc: 'Weekly or bi-weekly upkeep to keep your home consistently fresh.' },
  { icon: 'fa-soap',            title: 'Deep Cleaning',            desc: 'Thorough top-to-bottom clean — every corner, every surface.' },
  { icon: 'fa-box-open',        title: 'Move In / Move Out',       desc: 'Start fresh. We leave the space spotless for new beginnings.' },
  { icon: 'fa-building',        title: 'Office & Commercial',      desc: 'Professional cleaning for workspaces that impress every day.' },
  { icon: 'fa-hammer',          title: 'Post-Construction',        desc: 'Dust, debris and residue fully removed after renovation or build.' },
  { icon: 'fa-window-restore',  title: 'Window Cleaning',          desc: 'Crystal-clear windows, inside and out, that let the light in.' },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">Our Cleaning Services</h2>
        <p className="section-subtitle">Tailored solutions for every space and every need.</p>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
