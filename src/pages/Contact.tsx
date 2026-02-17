import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
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
      {/* Calendly Booking Widget */}
      <section id="calendly" className={styles.calendlySection}>
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

      <section className={styles.wrapper}>
        <div className={styles.grid}>
          <article className={styles.panel}>
            <h2 className="section-title">Get Started</h2>
            <p className={styles.panelIntro}>
              Complete a questionnaire so Patrick can prepare personalized recommendations for your move.
            </p>
            <div className={styles.formLinks}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfo5CToatY-U8AViEnhNETb1wlZxy6W46xOtlg8anCGY-8RxA/viewform?usp=pp_url"
                target="_blank"
                rel="noreferrer"
                className={styles.formLinkButton}
              >
                Buyer Questionnaire
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdIKMhCGY10fJqKytzmPD9Q2E2Zy9asrkst2gOXNd6XGt_35A/viewform?usp=pp_url"
                target="_blank"
                rel="noreferrer"
                className={styles.formLinkButton}
              >
                Seller Questionnaire
              </a>
            </div>
          </article>

          <article className={styles.panel}>
            <h2 className="section-title">Direct Lines</h2>
            <ul className={styles.detailList}>
              <li className={styles.detailItem}>
                <a href={`tel:${agentPhoneSanitized}`} className={styles.contactButton}>
                  Call or Text {agentProfile.phone}
                </a>
              </li>
              <li className={styles.detailItem}>
                <a href={`mailto:${agentProfile.email}`} className={styles.contactButton}>
                  Email Patrick
                </a>
              </li>
              <li className={styles.detailItem}>
                Broker Team Email:{' '}
                <a href={`mailto:${agentProfile.brokerage.teamEmail}`}>{agentProfile.brokerage.teamEmail}</a>
              </li>
              {agentProfile.brokerage.teamPhone && teamPhoneSanitized && (
                <li className={styles.detailItem}>
                  Broker Team Phone: <a href={`tel:${teamPhoneSanitized}`}>{agentProfile.brokerage.teamPhone}</a>
                </li>
              )}
              <li className={styles.detailItem}>{agentProfile.brokerage.name}</li>
              <li className={styles.detailItem}>{agentProfile.brokerage.officeTennessee}</li>
              <li className={styles.detailItem}>{agentProfile.brokerage.officeKentucky}</li>
            </ul>
          </article>
        </div>

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
