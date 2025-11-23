import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { agentProfile } from '../data/agent'
import styles from './Contact.module.css'

const Contact = () => {
  const agentPhoneSanitized = agentProfile.phone.replace(/[^\d+]/g, '')
  const teamPhoneSanitized = agentProfile.brokerage.teamPhone
    ? agentProfile.brokerage.teamPhone.replace(/[^\d+]/g, '')
    : null

  return (
    <div>
      <Seo
        title="Contact Patrick Manning | Real Estate Advisor"
        description="Connect with Patrick Manning to plan a lifestyle-first move across Middle Tennessee or Western Kentucky with clear communication and concierge-level support."
        openGraph={defaultMeta.openGraph}
        canonical="https://patrickmanningrealtor.com/contact"
      />
      <PageHeader
        kicker="Contact"
        title="Let's Talk About Your Move"
        subtitle="Call, text, or message any time to talk daily routines, commutes, schools, or next steps—Patrick tailors every plan to the way you actually live."
        backgroundImage="/media/contact.webp"
      />

      <section className={styles.wrapper}>
        <div className={styles.grid}>
        <LeadCaptureForm />

        <article className={styles.panel}>
          <h2 className="section-title">Direct Lines</h2>
          <ul className={styles.detailList}>
            <li>
              Phone: <a href={`tel:${agentPhoneSanitized}`}>{agentProfile.phone}</a>
            </li>
            <li>
              Email: <a href={`mailto:${agentProfile.email}`}>{agentProfile.email}</a>
            </li>
            <li>
              Broker Team Email:{' '}
              <a href={`mailto:${agentProfile.brokerage.teamEmail}`}>{agentProfile.brokerage.teamEmail}</a>
            </li>
            {agentProfile.brokerage.teamPhone && teamPhoneSanitized && (
              <li>
                Broker Team Phone: <a href={`tel:${teamPhoneSanitized}`}>{agentProfile.brokerage.teamPhone}</a>
              </li>
            )}
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
            1 Music Cir North, Suite 318<br />
            Nashville, TN 37203
          </address>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps?q=1%20Music%20Cir%20North%20Suite%20318%20Nashville%20TN%2037203&output=embed"
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
            222 East Witherspoon Street, 1st Floor<br />
            Louisville, KY 40202
          </address>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps?q=222%20East%20Witherspoon%20Street%20Louisville%20KY%2040202&output=embed"
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
      </section>
    </div>
  )
}

export default Contact
