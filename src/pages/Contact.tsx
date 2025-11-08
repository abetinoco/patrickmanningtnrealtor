import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { agentProfile } from '../data/agent'
import { disclaimers } from '../data/disclaimers'
import styles from './Contact.module.css'

const Contact = () => (
  <div>
    <Seo
      title="Contact Patrick Manning | Luxury Real Estate Advisor"
      description="Connect with Patrick Manning and Real Broker, LLC for confidential real estate consultations in Middle Tennessee."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/contact"
    />
    <PageHeader
      kicker="Contact"
      title="Let’s Design Your Next Move"
      subtitle="Reach out for a confidential consultation. We are available 24/7 to coordinate tours, valuations, or relocation briefings."
      backgroundImage="/media/contact.webp"
    />

    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <LeadCaptureForm />

        <article className={styles.panel}>
          <h2 className="section-title">Direct Lines</h2>
          <ul className={styles.detailList}>
            <li>
              Phone: <a href={`tel:${agentProfile.phone.replace(/[^\d+]/g, '')}`}>{agentProfile.phone}</a>
            </li>
            <li>
              Email: <a href={`mailto:${agentProfile.email}`}>{agentProfile.email}</a>
            </li>
            <li>{agentProfile.brokerage.name}</li>
            <li>{agentProfile.brokerage.officeTennessee}</li>
            <li>{agentProfile.brokerage.officeKentucky}</li>
          </ul>
        </article>
      </div>

      <div className={styles.officeGrid}>
        <article className={styles.officeCard}>
          <h3 className={styles.officeTitle}>Tennessee Office</h3>
          <address className={styles.officeAddress}>
            7121 Regal Lane, Suite 215<br />
            Knoxville, TN 37918
          </address>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.7194842677616!2d-83.9898!3d35.9898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c17a3a3a3a3a3%3A0x3a3a3a3a3a3a3a3a!2s7121%20Regal%20Ln%20%23215%2C%20Knoxville%2C%20TN%2037918!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tennessee Office Location"
            />
          </div>
        </article>

        <article className={styles.officeCard}>
          <h3 className={styles.officeTitle}>Kentucky Office</h3>
          <address className={styles.officeAddress}>
            406 Blankenbaker Parkway, Suite C2<br />
            Louisville, KY 40243
          </address>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.7194842677616!2d-85.5898!3d38.2498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b3b3b3b3b3b%3A0x3a3a3a3a3a3a3a3a!2s406%20Blankenbaker%20Pkwy%20%23C2%2C%20Louisville%2C%20KY%2040243!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kentucky Office Location"
            />
          </div>
        </article>
      </div>

      <p style={{ marginTop: 'var(--space-xl)', color: 'var(--color-text-secondary)' }}>{disclaimers.idx}</p>
    </section>
  </div>
)

export default Contact
