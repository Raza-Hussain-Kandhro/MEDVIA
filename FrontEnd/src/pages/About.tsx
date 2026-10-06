import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Container, PageHeader, Section, buttonClass } from '../components/ui'

const vision = ['Offering the best market prices without compromising quality', 'Modernizing the industry through digital solutions', 'Bringing innovation to enhance medical supply chains']
const mission = [
  { t: 'Delivering excellence', d: 'Providing certified, high-quality medical supplies' },
  { t: 'Ensuring accessibility', d: 'Simple, fast online procurement' },
  { t: 'Driving innovation', d: 'Revolutionizing the biomedical industry' },
]
export default function About() {
  return (
    <main id="main">
      <Helmet><title>About MEDVIA | Medical Supplies Provider</title><meta name="description" content="MEDVIA combines engineering precision with healthcare expertise to supply medical and biomedical products." /></Helmet>
      <PageHeader title="About MEDVIA" lead="Engineering precision meets healthcare excellence in medical supply solutions." />
      <Container className="space-y-4 py-10 md:py-14">
        <p>In a rapidly evolving healthcare landscape, finding a dependable supplier for medical and biomedical products can be a challenge. At MEDVIA, we combine engineering precision with healthcare expertise to deliver products that meet the highest industry standards.</p>
        <p>Founded in 2024 by three passionate biomedical engineers, MEDVIA was built on a vision to redefine the medical and biomedical supply industry. With expertise in the field, we recognized the challenges healthcare professionals face in sourcing reliable, high-quality supplies at competitive prices.</p>
        <p>That is why we took on the mission to bridge this gap, offering affordable, premium-grade products while ensuring an effortless digital purchasing experience.</p>
      </Container>
      <Section className="border-y border-line bg-surface-sunken">
        <div className="grid gap-10 md:grid-cols-2">
          <div><h2>Our vision</h2><ul className="mt-4 list-disc space-y-2 pl-5">{vision.map((v) => <li key={v}>{v}</li>)}</ul></div>
          <div><h2>Our mission</h2><dl className="mt-4 space-y-3">{mission.map((m) => <div key={m.t}><dt className="font-semibold">{m.t}</dt><dd className="text-muted">{m.d}</dd></div>)}</dl></div>
        </div>
      </Section>
      <Container className="space-y-4 py-10 md:py-14">
        <h2>The future of medical supply</h2>
        <p>We believe the future of medical supplies is smart, digital and efficient. Our goal is to blend technology with traditional sales, offering a seamless shopping experience while continuing to introduce cutting-edge solutions that shape the industry.</p>
        <h2 className="pt-6">Join us on this journey</h2>
        <p>At MEDVIA, every order represents a step toward better healthcare delivery. Whether you are a surgeon, lab technician or hospital administrator, we are here to simplify your supply chain.</p>
        <div className="pt-2"><Link to="/products" className={buttonClass('primary')}>Explore our catalog</Link></div>
      </Container>
    </main>
  )
}
