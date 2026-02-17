import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { Link } from 'react-router-dom'
import { BuyHero } from '../components/hero/BuyHero'
import { MortgageCalculator } from '../components/calculator/MortgageCalculator'
import { IDXFeaturedShowcase } from '../components/idx'
import { agentProfile } from '../data/agent'
import { SearchIcon, TargetIcon, BriefcaseIcon, HomeIcon } from '../components/icons/Icons'
import styles from './Home.module.css'
import buyStyles from './Buy.module.css'

const Buy = () => (
  <div>
    <Seo
      title="Lifestyle-First Home Buying Services | Patrick Manning"
      description={agentProfile.lifestyleMessaging.lifestyle}
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/buy"
    />
    <BuyHero
      kicker="For Buyers"
      title="Find Your Perfect Home"
      subtitle="Lifestyle-first buyer representation across Middle Tennessee and Western Kentucky. Expert guidance from first tour to closing day."
      stats={[
        { value: "125+", label: "Families Helped" },
        { value: "$65M+", label: "In Transactions" },
        { value: "5★", label: "Google Rating" },
      ]}
    />

    <IDXFeaturedShowcase 
      title="Featured Listings"
      subtitle="Available Now"
      description="Browse our curated selection of available homes that match the lifestyle you're looking for."
    />

    {/* Buyer Benefits Section */}
    <section className={buyStyles.benefitsSection}>
      <div className={buyStyles.headerContainer}>
        <div className="section-subtitle">Why Buy With Patrick</div>
        <h2 className="section-title">Professional Buyer Representation</h2>
        <p className={buyStyles.intro}>
          Every property search starts with your lifestyle. Patrick listens, then curates tours and pre-market opportunities tailored to you.
        </p>
      </div>
      <div className={buyStyles.benefitsScrollWrapper}>
        <div className={buyStyles.benefitsTrack}>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>
              <SearchIcon width={24} height={24} />
            </div>
            <h3 className={buyStyles.benefitTitle}>Private Market Access</h3>
            <ul className={buyStyles.benefitList}>
              <li>Early access to pre-market listings</li>
              <li>Network of builders and brokers</li>
            </ul>
          </article>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>
              <TargetIcon width={24} height={24} />
            </div>
            <h3 className={buyStyles.benefitTitle}>Tailored Property Match</h3>
            <ul className={buyStyles.benefitList}>
              <li>Curated showings aligned with your lifestyle</li>
              <li>Investment goals considered</li>
            </ul>
          </article>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>
              <BriefcaseIcon width={24} height={24} />
            </div>
            <h3 className={buyStyles.benefitTitle}>Strategic Negotiation</h3>
            <ul className={buyStyles.benefitList}>
              <li>Data-driven tactics</li>
              <li>Favorable terms, inspections, and timelines</li>
            </ul>
          </article>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>
              <HomeIcon width={24} height={24} />
            </div>
            <h3 className={buyStyles.benefitTitle}>Relocation Concierge</h3>
            <ul className={buyStyles.benefitList}>
              <li>Full-service coordination</li>
              <li>Out-of-state moves to Tennessee</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <MortgageCalculator />

    <section className={buyStyles.getStartedSection} aria-labelledby="get-started-heading">
      <div className={buyStyles.getStartedInner}>
        <div className="section-subtitle">Get Started</div>
        <h2 id="get-started-heading" className="section-title">
          Tell Us About Your Home Search
        </h2>
        <p className={buyStyles.getStartedCopy}>
          Complete this questionnaire and Patrick will prepare personalized recommendations for your home search.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfo5CToatY-U8AViEnhNETb1wlZxy6W46xOtlg8anCGY-8RxA/viewform?usp=pp_url"
          target="_blank"
          rel="noreferrer"
          className={buyStyles.getStartedButton}
        >
          Complete Buyer Questionnaire
        </a>
      </div>
    </section>

    <section className={styles.homeCtaSection} aria-labelledby="buy-cta-heading">
      <div className={styles.homeCtaInner}>
        <div className={styles.homeCtaPanel}>
          <div className={styles.homeCtaContent}>
            <div>
              <div className="section-subtitle">Next Step</div>
              <h2 id="buy-cta-heading" className="section-title">
                Ready to plan your next move?
              </h2>
              <p className={styles.homeCtaCopy}>
                Share how you live day to day—routines, commute, schools, and amenities—and Patrick will curate neighborhoods in
                Williamson, Maury, and Western Kentucky that match your season of life and next move.
              </p>
            </div>
            <Link to="/contact" className={styles.homeCtaButton}>
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

export default Buy
