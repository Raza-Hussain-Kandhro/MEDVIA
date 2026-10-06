import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Mail, Phone, MapPin, Shield } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | MEDVIA - Medical Supplies Provider</title>
        <meta
          name="description"
          content="MEDVIA' Privacy Policy explains how we collect, use, and protect your personal information when you use our medical supply services."
        />
        <meta
          name="keywords"
          content="medical supplies privacy policy, healthcare data protection, MEDVIA privacy, patient data security, GDPR compliance medical"
        />
        <link rel="canonical" href="https://www.biovasurgicals.com/privacy-policy" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | MEDVIA" />
        <meta
          property="og:description"
          content="Learn how we protect your personal information when you use our medical supply services."
        />
        <meta property="og:image" content="https://www.biovasurgicals.com/images/privacy-og.jpg" />
        <meta property="og:url" content="https://www.biovasurgicals.com/privacy-policy" />
      </Helmet>

      <article id="main" className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="flex mb-6">
            <Shield className="text-brand w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Last Updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-muted mb-6 leading-relaxed">
            At <strong>MEDVIA</strong>, we are committed to safeguarding your privacy. This Privacy
            Policy explains how we collect, use, disclose, and protect your personal information
            when you use our website and services.
          </p>
          <div className="bg-surface-sunken border-l-4 border-brand p-4 mb-8">
            <p className="text-brand">
              <strong>Note:</strong> By accessing our website, you agree to the terms outlined in
              this Privacy Policy. If you do not agree, please refrain from using our services.
            </p>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 border-b pb-2">
              1. Information We Collect
            </h2>
            <p className="text-muted mb-6 leading-relaxed">
              We collect personal and non-personal information to improve our services and process
              your orders efficiently.
            </p>

            <article className="mb-8">
              <h3 className="text-xl font-semibold text-ink mb-4">1.1 Personal Information</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Name</strong> - For order processing and communication
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Email address</strong> - For order confirmations and support
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Phone number</strong> - For delivery coordination
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Billing and shipping address</strong> - For order fulfillment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Payment details</strong> - Processed securely by our payment partners
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-2">•</span>
                  <span>
                    <strong>Order history</strong> - For customer service and analytics
                  </span>
                </li>
              </ul>
            </article>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 border-b pb-2">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-4 text-muted">
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>
                  <strong>Order Processing:</strong> To fulfill, confirm, and ship your purchases
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>
                  <strong>Customer Support:</strong> To respond to inquiries and resolve issues
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>
                  <strong>Personalized Experience:</strong> To offer relevant products and
                  promotions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>
                  <strong>Website Optimization:</strong> To improve user experience and performance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>
                  <strong>Legal Compliance:</strong> To meet regulatory obligations
                </span>
              </li>
            </ul>
          </section>

          {/* Additional sections would follow the same pattern */}
          {/* Sections 3-8 would use the same semantic structure */}

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 border-b pb-2">
              9. Contact Us
            </h2>
            <div className="bg-surface-sunken rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Mail className="text-brand w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Email</h3>
                    <Link
                      to="mailto:biovasurgicals@gmail.com"
                      className="text-brand hover:text-brand-strong transition-colors"
                    >
                      biovasurgicals@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-brand w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Phone</h3>
                    <div className="space-y-1">
                      <Link
                        to="https://wa.me/923054440378"
                        className="block text-brand hover:text-brand-strong transition-colors"
                      >
                        +92 305 4440378
                      </Link>
                      <Link
                        to="https://wa.me/923001086684"
                        className="block text-brand hover:text-brand-strong transition-colors"
                      >
                        +92 300 1086684
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-start md:col-span-2">
                  <MapPin className="text-brand w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Address</h3>
                    <p className="text-muted">Karachi, PAKISTAN</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <footer className="mt-16 pt-6 border-t border-line text-center text-muted text-sm">
          <p>
            This policy was last updated on{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </footer>
      </article>
    </>
  )
}

export default PrivacyPolicy
