import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { MarketSnapshotSection } from '../components/market/MarketSnapshotSection'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { agentProfile } from '../data/agent'
import styles from './Home.module.css'

const MarketSnapshot = () => (
  <div>
    <Seo
      title="Market Snapshot | Patrick Manning"
      description="Track Middle Tennessee and Western Kentucky metrics with commentary that ties stats to lifestyle, commute, and community decisions."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/market-snapshot"
    />
    <PageHeader
      kicker="Market Snapshot"
      title="Stay Informed on the Middle Tennessee Market"
      subtitle={`${agentProfile.lifestyleMessaging.lifestyle} Each update ties stats back to commute times, schools, and community vibe so decisions stay grounded.`}
    />
    <MarketSnapshotSection />
    <section className={styles.leadSection}>
      <div className={styles.leadGrid}>
        <div className={styles.leadPanel}>
          <div className={styles.copy}>
            <div className="section-subtitle">Get the Briefing</div>
            <h2 className="section-title">Request the Next Market Update</h2>
            <p>Receive market commentary, neighborhood insights, and alerts when new inventory matches your criteria.</p>
          </div>
          <div className={styles.formContainer}>
            <LeadCaptureForm layout="inline" />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default MarketSnapshot
