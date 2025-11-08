import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { MarketSnapshotSection } from '../components/market/MarketSnapshotSection'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import styles from './Home.module.css'

const MarketSnapshot = () => (
  <div>
    <Seo
      title="Market Snapshot | Patrick Manning"
      description="Track the latest Middle Tennessee luxury real estate metrics, executive relocation trends, and curated market guides."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/market-snapshot"
    />
    <PageHeader
      kicker="Market Snapshot"
      title="Stay Ahead of the Middle Tennessee Luxury Curve"
      subtitle="Access quarterly market intelligence, community spotlights, and executive relocation analytics tailored to your objectives."
    />
    <MarketSnapshotSection />
    <section className={styles.leadSection}>
      <div className={styles.leadGrid}>
        <div className={styles.copy}>
          <div className="section-subtitle">Get the Briefing</div>
          <h2 className="section-title">Request the Next Market Update</h2>
          <p>
            Receive curated market commentary, micro-neighborhood opportunities, and white-glove alerts when inventory aligns with your requirements.
          </p>
        </div>
        <LeadCaptureForm layout="inline" />
      </div>
    </section>
  </div>
)

export default MarketSnapshot
