import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import styles from './Home.module.css'

const SellValuation = () => (
  <div>
    <Seo
      title="Home Valuation Consultation | Patrick Manning"
      description="Request a bespoke valuation outlining market positioning, buyer demand, and concierge recommendations for your property."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/sell/valuation"
    />
    <PageHeader
      kicker="Home Valuation"
      title="Discover Your Property’s Market Position"
      subtitle="Receive a data-rich valuation and bespoke strategy session outlining how to maximize your asset in today’s market."
    />
    <section className={styles.leadSection}>
      <div className={styles.leadGrid}>
        <div className={styles.copy}>
          <div className="section-subtitle">Tailored Insights</div>
          <p>
            Each valuation includes recent comparable analysis, micro-market absorption metrics, and concierge recommendations to elevate presentation before market debut.
          </p>
        </div>
        <LeadCaptureForm layout="inline" />
      </div>
    </section>
  </div>
)

export default SellValuation
