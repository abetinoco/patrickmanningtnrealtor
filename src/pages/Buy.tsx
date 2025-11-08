import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { ChimeWidget } from '../components/listings/ChimeWidget'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { PageHeader } from '../components/shared/PageHeader'
import styles from './Home.module.css'
import buyStyles from './Buy.module.css'

const Buy = () => (
  <div>
    <Seo
      title="Luxury Home Buying Advisory | Patrick Manning"
      description="Experience concierge-level buyer representation with private previews, negotiation mastery, and strategic guidance across Middle Tennessee."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/buy"
    />
    <PageHeader
      kicker="For Buyers"
      title="Private Access to the Region's Most Coveted Residences"
      subtitle="Leverage Patrick's network to preview homes before they reach the public MLS, plus off-market introductions tailored to your relocation timeline."
      backgroundImage="/media/buy.jpg"
    />

    {/* Buyer Benefits Section */}
    <section className={buyStyles.benefitsSection}>
      <div className={buyStyles.container}>
        <div className="section-subtitle">Why Buy With Patrick</div>
        <h2 className="section-title">Concierge-Level Buyer Representation</h2>
        <p className={buyStyles.intro}>
          Every property search deserves strategic guidance. Patrick's buyer advisory combines market intelligence, 
          off-market access, and meticulous negotiation to secure your ideal home.
        </p>
        <div className={buyStyles.benefitsGrid}>
          <article className={buyStyles.benefitCard}>
            <div className={buyStyles.benefitIcon}>🔍</div>
            <h3 className={buyStyles.benefitTitle}>Private Market Access</h3>
            <p className={buyStyles.benefitDescription}>
              Gain early entry to pre-market listings and pocket opportunities through Patrick's extensive network 
              of builders, brokers, and luxury homeowners.
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
            Dial in price, neighborhood, and lifestyle preferences using the same MLS interface Patrick employs for his private
            client roster. Save properties, request tours, and flag homes for concierge previews in a single dashboard.
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
          Patrick specializes in luxury markets across the Greater Nashville corridor, guiding buyers 
          to neighborhoods that match their lifestyle and investment criteria.
        </p>
        <div className={buyStyles.neighborhoodGrid}>
          <article className={buyStyles.neighborhoodCard}>
            <h3 className={buyStyles.neighborhoodName}>Williamson County</h3>
            <p className={buyStyles.neighborhoodDescription}>
              Brentwood, Franklin, and Arrington offer top-rated schools, gated communities, and executive 
              estates on sprawling acreage. The epicenter of Nashville's luxury market.
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
              <span>Urban Luxury</span>
            </div>
          </article>
          <article className={buyStyles.neighborhoodCard}>
            <h3 className={buyStyles.neighborhoodName}>Southern Kentucky</h3>
            <p className={buyStyles.neighborhoodDescription}>
              Bowling Green and surrounding counties provide affordable luxury, low property taxes, 
              and easy access to Nashville—ideal for savvy buyers seeking strategic value.
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
          <div className="section-subtitle">Curated Portfolio</div>
          <h2 className="section-title">Preview Exclusive Residences and Coming Soon Inventory</h2>
          <p>
            Explore luxury listings across Middle Tennessee and the Western Kentucky lake region, updated directly from Patrick’s
            MLS feeds. Each property includes vetted insights, private showing availability, and relocation guidance.
          </p>
        </div>
        <ChimeWidget widgetUrl="https://www.patrickmanningrealtor.com/api-site/widget/74056" title="Featured Listings" />
      </div>
    </section>
    <section className={styles.leadSection}>
      <div className={styles.leadGrid}>
        <div className={styles.copy}>
          <div className="section-subtitle">Ready to Begin Your Search?</div>
          <h2 className="section-title">Schedule a Private Buyer Consultation</h2>
          <p>
            Share your wishlist, timeline, and budget with Patrick for a confidential strategy session. 
            Whether you're relocating from out of state or upgrading locally, Patrick provides the market 
            intelligence and negotiation leverage to secure your next home with confidence.
          </p>
        </div>
        <div className={styles.formContainer}>
          <LeadCaptureForm layout="inline" />
        </div>
      </div>
    </section>
  </div>
)

export default Buy
