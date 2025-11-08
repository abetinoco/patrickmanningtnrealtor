import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { serviceTiers } from '../data/services'
import { PageHeader } from '../components/shared/PageHeader'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { AdvisoryProcess } from '../components/process/AdvisoryProcess'
import homeStyles from './Home.module.css'
import styles from './Sell.module.css'

const Sell = () => (
  <div>
    <Seo
      title="Sell Your Luxury Home | Patrick Manning"
      description="Partner with Patrick Manning for a white-glove listing experience featuring cinematic marketing, buyer vetting, and negotiation precision."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/sell"
    />
    <PageHeader
      kicker="For Sellers"
      title="Position Your Property for Record-Setting Outcomes"
      subtitle="Patrick's signature listing experience deploys cinematic storytelling, global reach, and rigorous buyer vetting to deliver premium results."
      backgroundImage="/media/sold.jpg"
    />

    <section className="container" style={{ padding: 'var(--space-4xl) 0' }}>
      <div className="section-subtitle">White-Glove Campaign</div>
      <h2 className="section-title">What You Can Expect</h2>
      <div style={{ display: 'grid', gap: 'var(--space-xl)' }}>
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
        <div className={homeStyles.copy}>
          <div className="section-subtitle">Sell with Confidence</div>
          <h2 className="section-title">Request Your Signature Listing Consultation</h2>
          <p>
            From pricing strategy through post-closing concierge, we orchestrate the entire sale with discretion and precision so you can focus on your next chapter.
          </p>
        </div>
        <div className={homeStyles.formContainer}>
          <LeadCaptureForm layout="inline" />
        </div>
      </div>
    </section>
  </div>
)

export default Sell
