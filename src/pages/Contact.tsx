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
  const tennesseeBroker = agentProfile.brokerage.managingBrokers.find(
    (broker) => broker.region === 'Tennessee'
  )
  const tennesseeBrokerPhone = tennesseeBroker?.phone
    ? tennesseeBroker.phone.replace(/[^\d+]/g, '')
    : null
  const kentuckyBroker = agentProfile.brokerage.managingBrokers.find(
    (broker) => broker.region === 'Kentucky'
  )
  const kentuckyBrokerPhone = kentuckyBroker?.phone
    ? kentuckyBroker.phone.replace(/[^\d+]/g, '')
    : null
  const { tennesseeLicenseNumber, tennesseeOfficeCode } = agentProfile.brokerage
  const licenseStatements = agentProfile.brokerage.licenseStatement
    ? agentProfile.brokerage.licenseStatement.split('|').map((entry) => entry.trim())
    : []

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

        {/* Calendly Booking Widget */}
        <section className={styles.calendlySection}>
          <div className={styles.calendlyHeader}>
            <div className="section-subtitle">Schedule a Consultation</div>
            <h2 className="section-title">Book Time with Patrick</h2>
            <p className={styles.calendlyIntro}>
              Select a convenient time for your real estate consultation. Patrick will discuss your goals, answer questions, and help you plan your next move.
            </p>
          </div>
          <div className={styles.calendlyWidget}>
            <iframe
              src="https://calendly.com/pmanningtnrealtor/realestateconsultation?hide_gdpr_banner=1&background_color=0a0f16&text_color=f5f7fa&primary_color=4fe0d0"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a consultation with Patrick Manning"
              loading="lazy"
            />
          </div>
        </section>

        <div className={styles.officeGrid}>
          <article className={styles.officeCard}>
            <h3 className={styles.officeTitle}>Tennessee Office</h3>
            {tennesseeBroker && (
              <div className={styles.brokerMeta}>
                <div className={styles.brokerLabel}>{tennesseeBroker.title}</div>
                <div className={styles.brokerName}>{tennesseeBroker.name}</div>
                {(tennesseeLicenseNumber || tennesseeOfficeCode) && (
                  <div className={styles.brokerStats}>
                    {tennesseeLicenseNumber && <span>TN License #: {tennesseeLicenseNumber}</span>}
                    {tennesseeOfficeCode && <span>Office Code: {tennesseeOfficeCode}</span>}
                  </div>
                )}
                <div className={styles.brokerContact}>
                  {tennesseeBrokerPhone && (
                    <a href={`tel:${tennesseeBrokerPhone}`}>{tennesseeBroker.phone}</a>
                  )}
                  {tennesseeBroker.email && (
                    <a href={`mailto:${tennesseeBroker.email}`}>{tennesseeBroker.email}</a>
                  )}
                </div>
              </div>
            )}
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
            {kentuckyBroker && (
              <div className={styles.brokerMeta}>
                <div className={styles.brokerLabel}>{kentuckyBroker.title}</div>
                <div className={styles.brokerName}>{kentuckyBroker.name}</div>
                {licenseStatements.length > 0 && (
                  <div className={styles.brokerStats}>
                    {licenseStatements.map((statement) => (
                      <span key={statement}>{statement}</span>
                    ))}
                  </div>
                )}
                <div className={styles.brokerContact}>
                  {kentuckyBrokerPhone && (
                    <a href={`tel:${kentuckyBrokerPhone}`}>{kentuckyBroker.phone}</a>
                  )}
                  {kentuckyBroker.email && (
                    <a href={`mailto:${kentuckyBroker.email}`}>{kentuckyBroker.email}</a>
                  )}
                </div>
              </div>
            )}
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
