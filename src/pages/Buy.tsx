import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/shared/PageHeader'
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
    <PageHeader
      kicker="For Buyers"
      title="Lifestyle-First Buyer Representation"
      subtitle={`${agentProfile.lifestyleMessaging.lifestyle} Patrick sources opportunities before they reach the public MLS and aligns commutes, schools, and amenities around how you live.`}
      backgroundImage="/media/buy.jpg"
    />

    {/* Buyer Benefits Section */}
    <section className={buyStyles.benefitsSection}>
      <div className={buyStyles.container}>
        <div className="section-subtitle">Why Buy With Patrick</div>
        <h2 className="section-title">Professional Buyer Representation</h2>
        <p className={buyStyles.intro}>
          Every property search starts with how you actually spend your day. Patrick listens for routines, school needs, commute windows,
          and neighborhood energy, then curates tours and pre-market introductions that keep only the right homes on your list.
        </p>
        <div className={buyStyles.benefitsGrid}>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>
              <SearchIcon width={28} height={28} />
            </div>
            <h3 className={buyStyles.benefitTitle}>Private Market Access</h3>
            <p className={buyStyles.benefitDescription}>
              Gain early entry to pre-market listings and pocket opportunities through Patrick's extensive network
              of builders, brokers, and homeowners.
            </p>
          </article>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>
              <TargetIcon width={28} height={28} />
            </div>
            <h3 className={buyStyles.benefitTitle}>Tailored Property Match</h3>
            <p className={buyStyles.benefitDescription}>
              Share your lifestyle criteria and investment goals—Patrick curates showing itineraries that
              eliminate noise and focus on homes aligned with your vision.
            </p>
          </article>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>
              <BriefcaseIcon width={28} height={28} />
            </div>
            <h3 className={buyStyles.benefitTitle}>Strategic Negotiation</h3>
            <p className={buyStyles.benefitDescription}>
              Leverage market data, comparable analysis, and Patrick's proven negotiation tactics to secure
              favorable terms, inspections, and closing timelines.
            </p>
          </article>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>
              <HomeIcon width={28} height={28} />
            </div>
            <h3 className={buyStyles.benefitTitle}>Relocation Concierge</h3>
            <p className={buyStyles.benefitDescription}>
              Moving from out of state? Patrick coordinates every detail—from school research to contractor
              referrals—ensuring a seamless transition to Tennessee.
            </p>
          </article>
        </div>
      </div>
    </section>

    {/* Neighborhood Spotlight */}
    <section className={buyStyles.neighborhoodSection}>
      <div className={buyStyles.container}>
        <div className="section-subtitle">Market Expertise</div>
        <h2 className="section-title">Middle Tennessee's Premier Communities</h2>
        <p className={buyStyles.intro}>
          Patrick works across the Greater Nashville corridor, curating neighborhoods that match lifestyle, commute, and long-term goals.
        </p>
        <div className={buyStyles.neighborhoodGrid}>
          <article className={buyStyles.neighborhoodCard}>
            <h3 className={buyStyles.neighborhoodName}>Williamson County</h3>
            <p className={buyStyles.neighborhoodDescription}>
              Brentwood, Franklin, and Arrington offer top-rated schools, gated communities, and beautiful
              estates on sprawling acreage. A highly sought-after area in the Nashville region.
            </p>
            <div className={buyStyles.neighborhoodStats}>
              <span>Median: $950K+</span>
              <span>•</span>
              <span>A-Rated Schools</span>
            </div>
          </article>
          <article className={buyStyles.neighborhoodCard}>
            <h3 className={buyStyles.neighborhoodName}>Maury County</h3>
            <p className={buyStyles.neighborhoodDescription}>
              Spring Hill and Columbia deliver modern new construction, master-planned communities,
              and exceptional value for growing families seeking suburban tranquility.
            </p>
            <div className={buyStyles.neighborhoodStats}>
              <span>Median: $475K+</span>
              <span>•</span>
              <span>New Construction Hub</span>
            </div>
          </article>
          <article className={buyStyles.neighborhoodCard}>
            <h3 className={buyStyles.neighborhoodName}>Greater Nashville</h3>
            <p className={buyStyles.neighborhoodDescription}>
              Belle Meade, Green Hills, and Forest Hills blend historic charm with urban convenience—
              walkable neighborhoods minutes from downtown Nashville's cultural core.
            </p>
            <div className={buyStyles.neighborhoodStats}>
              <span>Median: $1.2M+</span>
              <span>•</span>
              <span>Urban Living</span>
            </div>
          </article>
          <article className={buyStyles.neighborhoodCard}>
            <h3 className={buyStyles.neighborhoodName}>Southern Kentucky</h3>
            <p className={buyStyles.neighborhoodDescription}>
              Bowling Green and surrounding counties provide great value, low property taxes,
              and easy access to Nashville—ideal for buyers seeking affordability.
            </p>
            <div className={buyStyles.neighborhoodStats}>
              <span>Median: $385K+</span>
              <span>•</span>
              <span>Tax Advantage</span>
            </div>
          </article>
        </div>
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
