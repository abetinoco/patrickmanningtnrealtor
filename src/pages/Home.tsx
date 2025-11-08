import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { buildAgentSchema } from '../utils/schema'
import { HeroBanner } from '../components/hero/HeroBanner'
import { QuickLinksGrid } from '../components/quick-links/QuickLinksGrid'
import { ServiceTierSection } from '../components/services/ServiceTierSection'
import { ChimeWidget } from '../components/listings/ChimeWidget'
import { SoldListings } from '../components/listings/SoldListings'
import { AdvisoryProcess } from '../components/process/AdvisoryProcess'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { agentProfile } from '../data/agent'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const agentSchema = buildAgentSchema()

const Home = () => (
  <div>
    <Seo
      title={`${defaultMeta.title} | Middle Tennessee Luxury Real Estate`}
      description={defaultMeta.description}
      openGraph={defaultMeta.openGraph}
      schema={agentSchema}
      canonical="https://patrickmanningrealtor.com/"
    />
    <HeroBanner />
    <QuickLinksGrid />
    <ServiceTierSection />
    <section className={styles.widgetSection} aria-labelledby="home-listings-heading">
      <div className={styles.widgetInner}>
        <div className={styles.widgetCopy}>
          <div className="section-subtitle">Live Market Window</div>
          <h2 id="home-listings-heading" className="section-title">
            Explore Patrick’s Curated Listings in Real Time
          </h2>
          <p>
            Browse the active portfolio directly from Patrick’s MLS dashboard. Filter by price, neighborhood, or lifestyle and
            request a private preview without leaving the site.
          </p>
        </div>
        <ChimeWidget widgetUrl="https://www.patrickmanningrealtor.com/api-site/widget/74056" title="Featured Listings" />
      </div>
    </section>
    <SoldListings limit={6} showViewAll={true} />
    <section className={styles.leadSection} aria-labelledby="consultation-heading">
      <div className={styles.leadContainer}>
        <div className={styles.copy}>
          <div className="section-subtitle">High-Touch Advisory</div>
          <h2 id="consultation-heading" className="section-title">
            Align with a Trusted Advisor Dedicated to Your Next Move
          </h2>
          <p>
            {agentProfile.elevatorPitch}
          </p>
          <p>
            Call us directly at <a href={`tel:${agentProfile.phone.replace(/[^\d+]/g, '')}`}>{agentProfile.phone}</a> or
            complete the form to secure a confidential consultation.
          </p>
        </div>
        <div className={styles.formContainer}>
          <LeadCaptureForm />
        </div>
      </div>
    </section>
    <AdvisoryProcess />
    <section className={styles.homeCtaSection} aria-labelledby="home-cta-heading">
      <div className={styles.homeCtaInner}>
        <div>
          <div className="section-subtitle">Next Step</div>
          <h2 id="home-cta-heading" className="section-title">
            Ready for concierge-level property tours tailored to your goals?
          </h2>
          <p className={styles.homeCtaCopy}>
            Outline your wish list and let Patrick unlock private previews, off-market opportunities, and strategic advice for
            your relocation or investment timeline.
          </p>
        </div>
        <Link to="/buy" className={styles.homeCtaButton}>
          Ready to shop your dream home?
        </Link>
      </div>
    </section>
  </div>
)

export default Home
