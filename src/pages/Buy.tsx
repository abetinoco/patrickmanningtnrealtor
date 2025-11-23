import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { ChimeWidget } from '../components/listings/ChimeWidget'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { PageHeader } from '../components/shared/PageHeader'
import { agentProfile } from '../data/agent'
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
      title="Private Access to the Region's Most Coveted Residences"
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
            <div className={buyStyles.benefitIcon}>🔍</div>
            <h3 className={buyStyles.benefitTitle}>Private Market Access</h3>
            <p className={buyStyles.benefitDescription}>
              Gain early entry to pre-market listings and pocket opportunities through Patrick's extensive network 
              of builders, brokers, and homeowners.
            </p>
          </article>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>🎯</div>
            <h3 className={buyStyles.benefitTitle}>Tailored Property Match</h3>
            <p className={buyStyles.benefitDescription}>
              Share your lifestyle criteria and investment goals—Patrick curates showing itineraries that 
              eliminate noise and focus on homes aligned with your vision.
            </p>
          </article>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>💼</div>
            <h3 className={buyStyles.benefitTitle}>Strategic Negotiation</h3>
            <p className={buyStyles.benefitDescription}>
              Leverage market data, comparable analysis, and Patrick's proven negotiation tactics to secure 
              favorable terms, inspections, and closing timelines.
            </p>
          </article>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>🏡</div>
            <h3 className={buyStyles.benefitTitle}>Relocation Concierge</h3>
            <p className={buyStyles.benefitDescription}>
              Moving from out of state? Patrick coordinates every detail—from school research to contractor 
              referrals—ensuring a seamless transition to Tennessee.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className={styles.widgetSection}>
      <div className={styles.widgetInner}>
        <div className={styles.widgetCopy}>
          <div className="section-subtitle">Live Market Search</div>
          <h2 className="section-title">Search the MLS with Patrick’s Filters</h2>
          <p>
            Dial in price, neighborhood, and lifestyle preferences using the same MLS interface Patrick employs for his
            client roster. Save properties, request tours, and schedule showings in a single dashboard.
          </p>
        </div>
        <ChimeWidget widgetUrl="https://www.patrickmanningrealtor.com/api-site/widget/74054" title="MLS Search" />
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

    <section className={`${styles.widgetSection} ${styles.widgetSectionAlt}`}>
      <div className={styles.widgetInner}>
        <div className={styles.widgetCopy}>
          <div className="section-subtitle">Available Properties</div>
          <h2 className="section-title">Browse Homes and Coming Soon Inventory</h2>
          <p>
            Explore listings across Middle Tennessee and the Western Kentucky lake region, updated directly from Patrick's
            MLS feeds. Each property includes detailed information, showing availability, and guidance.
          </p>
        </div>
        <ChimeWidget widgetUrl="https://www.patrickmanningrealtor.com/api-site/widget/74056" title="Featured Listings" />
      </div>
    </section>
    <section className={styles.leadSection}>
      <div className={styles.leadGrid}>
        <div className={styles.leadPanel}>
          <div className={styles.copy}>
            <div className="section-subtitle">Ready to Begin Your Search?</div>
            <h2 className="section-title">Schedule a Private Buyer Consultation</h2>
            <p>
              Share how you live, work, and recharge—Patrick will map out commute options, amenities, and school districts across Williamson,
              Maury, Greater Nashville, and Western Kentucky so every showing feels aligned.
            </p>
          </div>
          <div className={styles.formContainer}>
            <LeadCaptureForm layout="inline" />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Buy
