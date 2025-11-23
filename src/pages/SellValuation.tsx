import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { agentProfile } from '../data/agent'
import styles from './Home.module.css'

const SellValuation = () => (
  <div>
    <Seo
      title="Home Valuation Consultation | Patrick Manning"
      description="Request a lifestyle-first valuation that blends data, buyer demand, and storytelling so your property attracts the right families."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/sell/valuation"
    />
    <PageHeader
      kicker="Home Valuation"
      title="Discover Your Property's Market Position"
      subtitle={`${agentProfile.lifestyleMessaging.lifestyle} We'll pair data with a lifestyle narrative so buyers see how your home fits their real life.`}
    />
    <section className={styles.leadSection}>
      <div className={styles.leadGrid}>
        <div className={styles.leadPanel}>
          <div className={styles.copy}>
            <div className="section-subtitle">Tailored Insights</div>
            <p>
              Each valuation includes recent comparable analysis, market metrics, and recommendations to prepare your home for listing.
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

export default SellValuation
