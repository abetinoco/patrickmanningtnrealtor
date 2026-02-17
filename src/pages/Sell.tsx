import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { Link } from 'react-router-dom'
import { SellHero } from '../components/hero/SellHero'
import { AdvisoryProcess } from '../components/process/AdvisoryProcess'
import { agentProfile } from '../data/agent'
import { CameraIcon, ChartIcon, TargetIcon, BriefcaseIcon } from '../components/icons/Icons'
import homeStyles from './Home.module.css'
import styles from './Sell.module.css'

const Sell = () => (
  <div>
    <Seo
      title="Sell with Lifestyle Positioning | Patrick Manning"
      description="Strategic marketing and expert negotiation to maximize your home's value. Patrick's content-driven approach shows buyers how your home supports real life."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/sell"
    />
    <SellHero
      kicker="For Sellers"
      title="Sell with Confidence"
      subtitle="Strategic marketing and expert negotiation to maximize your home's value. Patrick's content-driven approach shows buyers how your home fits their lifestyle."
      ctaButton={{ label: "Get a Home Valuation", href: "#home-valuation" }}
      stats={[
        { value: "$65M+", label: "Homes Sold" },
        { value: "98%", label: "List to Sale" },
        { value: "14 Days", label: "Avg. on Market" },
      ]}
    />

    {/* Seller Benefits Section */}
    <section className={styles.benefitsSection}>
      <div className={styles.headerContainer}>
        <div className="section-subtitle">Why Sell With Patrick</div>
        <h2 className="section-title">A Results-Driven Approach</h2>
        <p className={styles.intro}>
          Patrick combines lifestyle-focused marketing with proven negotiation strategies to attract qualified buyers and secure the best terms.
        </p>
      </div>
      <div className={styles.benefitsScrollWrapper}>
        <div className={styles.benefitsTrack}>
          <article className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <CameraIcon width={24} height={24} />
            </div>
            <h3 className={styles.benefitTitle}>Lifestyle Photography</h3>
            <ul className={styles.benefitList}>
              <li>Show buyers how your home supports real life</li>
              <li>Beyond staged photos</li>
            </ul>
          </article>
          <article className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <ChartIcon width={24} height={24} />
            </div>
            <h3 className={styles.benefitTitle}>Strategic Pricing</h3>
            <ul className={styles.benefitList}>
              <li>Data-driven pricing analysis</li>
              <li>Attract qualified buyers</li>
              <li>Maximize your return</li>
            </ul>
          </article>
          <article className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <TargetIcon width={24} height={24} />
            </div>
            <h3 className={styles.benefitTitle}>Multi-Platform Marketing</h3>
            <ul className={styles.benefitList}>
              <li>Maximum exposure across MLS and social media</li>
              <li>Patrick's private buyer network</li>
            </ul>
          </article>
          <article className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <BriefcaseIcon width={24} height={24} />
            </div>
            <h3 className={styles.benefitTitle}>Expert Negotiation</h3>
            <ul className={styles.benefitList}>
              <li>$60M+ experience</li>
              <li>Protecting your interests through every offer</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    {/* Marketing Approach Section */}
    <section className={styles.marketingSection}>
      <div className={styles.marketingContainer}>
        <div className="section-subtitle" style={{ textAlign: 'center' }}>Marketing Strategy</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>How We Market Your Home</h2>
        <p className={styles.intro} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Every listing gets a tailored marketing plan designed to reach the right buyers.
        </p>
        <div className={styles.marketingGrid}>
          <article className={styles.marketingCard}>
            <h3 className={styles.marketingCardTitle}>Professional Photography & Video</h3>
            <ul className={styles.marketingList}>
              <li>High-quality imagery</li>
              <li>Video walkthroughs</li>
              <li>Capture your home's character</li>
            </ul>
          </article>
          <article className={styles.marketingCard}>
            <h3 className={styles.marketingCardTitle}>MLS & Syndication</h3>
            <ul className={styles.marketingList}>
              <li>Zillow, Realtor.com, Redfin syndication</li>
              <li>Hundreds of partner sites</li>
              <li>Maximum reach</li>
            </ul>
          </article>
          <article className={styles.marketingCard}>
            <h3 className={styles.marketingCardTitle}>Social Media Campaigns</h3>
            <ul className={styles.marketingList}>
              <li>Targeted Facebook and Instagram ads</li>
              <li>Reaching buyers actively searching your area</li>
            </ul>
          </article>
          <article className={styles.marketingCard}>
            <h3 className={styles.marketingCardTitle}>Private Network Outreach</h3>
            <ul className={styles.marketingList}>
              <li>Direct outreach to Patrick's network</li>
              <li>Buyers, investors, and fellow agents</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <AdvisoryProcess />

    <section id="home-valuation" className={styles.getStartedSection} aria-labelledby="get-started-heading">
      <div className={styles.getStartedInner}>
        <div className="section-subtitle">Get Started</div>
        <h2 id="get-started-heading" className="section-title">
          Tell Us About Your Home
        </h2>
        <p className={styles.getStartedCopy}>
          Complete this questionnaire and Patrick will prepare personalized recommendations for your home sale.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdIKMhCGY10fJqKytzmPD9Q2E2Zy9asrkst2gOXNd6XGt_35A/viewform?usp=pp_url"
          target="_blank"
          rel="noreferrer"
          className={styles.getStartedButton}
        >
          Complete Seller Questionnaire
        </a>
      </div>
    </section>

    <section className={homeStyles.homeCtaSection} aria-labelledby="sell-cta-heading">
      <div className={homeStyles.homeCtaInner}>
        <div className={homeStyles.homeCtaPanel}>
          <div className={homeStyles.homeCtaContent}>
            <div>
              <div className="section-subtitle">Next Step</div>
              <h2 id="sell-cta-heading" className="section-title">
                Ready to list your property?
              </h2>
              <p className={homeStyles.homeCtaCopy}>
                Schedule a complimentary consultation with Patrick to discuss your home's value, timeline, and the best strategy for your sale.
              </p>
            </div>
            <Link to="/contact" className={homeStyles.homeCtaButton}>
              Schedule Consultation
            </Link>
          </div>
          <div className={homeStyles.homeCtaProfile}>
            <div className={homeStyles.homeCtaPortrait}>
              <img src="/media/patrick.png" alt="Patrick Manning" loading="lazy" />
              <span className={homeStyles.homeCtaPortraitGlow} aria-hidden="true" />
            </div>
            <div className={homeStyles.homeCtaProfileMeta}>
              <span className={homeStyles.homeCtaProfileTag}>Real Broker, LLC</span>
              <span className={homeStyles.homeCtaProfileName}>Patrick Manning</span>
              <span className={homeStyles.homeCtaProfileRole}>Real Estate Advisor</span>
              <a className={homeStyles.homeCtaProfileLink} href={`tel:${agentProfile.phone.replace(/[^\d+]/g, '')}`}>
                Call or Text {agentProfile.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Sell
