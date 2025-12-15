import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/shared/PageHeader'
import { AdvisoryProcess } from '../components/process/AdvisoryProcess'
import { agentProfile } from '../data/agent'
import homeStyles from './Home.module.css'

const Sell = () => (
  <div>
    <Seo
      title="Sell with Lifestyle Positioning | Patrick Manning"
      description={`${agentProfile.lifestyleMessaging.intro} Patrick's content-driven marketing packages show buyers how your home supports real life while his negotiation experience keeps every detail on track.`}
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/sell"
    />
    <PageHeader
      kicker="For Sellers"
      title="Position Your Property for the Best Outcome"
      subtitle="Lifestyle photography, content-rich campaigns, and Patrick's $60M+ negotiation background make sure buyers see how your property lives—not just how it looks."
      backgroundImage="/media/sold.jpg"
    />

    <AdvisoryProcess />

    <section className={homeStyles.homeCtaSection} aria-labelledby="sell-cta-heading">
      <div className={homeStyles.homeCtaInner}>
        <div className={homeStyles.homeCtaPanel}>
          <div className={homeStyles.homeCtaContent}>
            <div>
              <div className="section-subtitle">Next Step</div>
              <h2 id="sell-cta-heading" className="section-title">
                Ready to plan your next move?
              </h2>
              <p className={homeStyles.homeCtaCopy}>
                Share how you live day to day—routines, commute, schools, and amenities—and Patrick will curate neighborhoods in
                Williamson, Maury, and Western Kentucky that match your season of life and next move.
              </p>
            </div>
            <Link to="/contact" className={homeStyles.homeCtaButton}>
              Get Started
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
