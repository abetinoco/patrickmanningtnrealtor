import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { serviceTiers } from '../data/services'
import { PageHeader } from '../components/shared/PageHeader'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { AdvisoryProcess } from '../components/process/AdvisoryProcess'
import { agentProfile } from '../data/agent'
import homeStyles from './Home.module.css'
import styles from './Sell.module.css'

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

    <section className="container" style={{ padding: 'var(--space-4xl) 0' }}>
      <div className="section-subtitle">Marketing Approach</div>
      <h2 className="section-title">What You Can Expect</h2>
      <div style={{ display: 'grid', gap: 'var(--space-xl)', justifyItems: 'center' }}>
        {serviceTiers
          .filter((tier) => tier.id === 'signature-sellers')
          .map((tier) => (
            <article key={tier.id} className={styles.serviceCard}>
              <h3>{tier.name}</h3>
              <p>{tier.description}</p>
              <ul>
                {tier.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </section>

    <AdvisoryProcess />

    <section className={homeStyles.leadSection}>
      <div className={homeStyles.leadGrid}>
        <div className={homeStyles.leadPanel}>
          <div className={homeStyles.copy}>
            <div className="section-subtitle">Sell with Confidence</div>
            <h2 className="section-title">Request Your Listing Consultation</h2>
            <p>
              Patrick frames your property through a lifestyle lens, handles pricing, content, and negotiations, and keeps you focused on
              your next chapter with clear communication the whole way through.
            </p>
          </div>
          <div className={homeStyles.formContainer}>
            <LeadCaptureForm layout="inline" />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Sell
