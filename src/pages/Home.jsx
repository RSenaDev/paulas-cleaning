import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import PortfolioPreview from '../components/PortfolioPreview'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <PortfolioPreview />
      <Contact />
    </main>
  )
}
