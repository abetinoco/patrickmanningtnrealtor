import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { buildAgentSchema } from '../utils/schema'
import { HeroBanner } from '../components/hero/HeroBanner'
import { QuickLinksGrid } from '../components/quick-links/QuickLinksGrid'
import { ServiceTierSection } from '../components/services/ServiceTierSection'
import { ChimeWidget } from '../components/listings/ChimeWidget'
import { SoldListings } from '../components/listings/SoldListings'
import { AdvisoryProcess } from '../components/process/AdvisoryProcess'
import { agentProfile } from '../data/agent'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const agentSchema = buildAgentSchema()

const Home = () => (
  <div>
    <Seo
      title={`${defaultMeta.title} | Middle Tennessee Real Estate`}
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
            Explore Available Listings in Real Time
          </h2>
          <p>
            Browse active listings directly from the MLS. Filter by price, neighborhood, or property type and
            request a showing without leaving the site.
          </p>
        </div>
        <ChimeWidget widgetUrl="https://www.patrickmanningrealtor.com/api-site/widget/74056" title="Featured Listings" />
      </div>
    </section>
    <SoldListings limit={6} showViewAll={true} />
    <AdvisoryProcess />
    <section className={styles.homeCtaSection} aria-labelledby="home-cta-heading">
      <div className={styles.homeCtaInner}>
        <div className={styles.homeCtaPanel}>
          <div className={styles.homeCtaContent}>
            <div>
              <div className="section-subtitle">Next Step</div>
              <h2 id="home-cta-heading" className="section-title">
                Ready to plan your next move?
              </h2>
              <p className={styles.homeCtaCopy}>
                Share how you live day to day—routines, commute, schools, and amenities—and Patrick will curate neighborhoods in
                Williamson, Maury, and Western Kentucky that match your season of life and next move.
              </p>
            </div>
            <Link to="/buy" className={styles.homeCtaButton}>
              Get Started
            </Link>
          </div>
          <div className={styles.homeCtaProfile}>
            <div className={styles.homeCtaPortrait}>
              <img src="/media/patrick.png" alt="Patrick Manning" loading="lazy" />
              <span className={styles.homeCtaPortraitGlow} aria-hidden="true" />
            </div>
            <div className={styles.homeCtaProfileMeta}>
              <span className={styles.homeCtaProfileTag}>Real Broker, LLC</span>
              <span className={styles.homeCtaProfileName}>Patrick Manning</span>
              <span className={styles.homeCtaProfileRole}>Real Estate Advisor</span>
              <a className={styles.homeCtaProfileLink} href={`tel:${agentProfile.phone.replace(/[^\d+]/g, '')}`}>
                Call or Text {agentProfile.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Home
