import React from 'react'
import { Link } from 'react-router-dom'
import { agentProfile } from '../../data/agent'
import { navigation } from '../../data/navigation'
import { disclaimers } from '../../data/disclaimers'
import styles from './FooterSocialDisclosure.module.css'

const sanitizePhone = (value: string) => value.replace(/[^\d+]/g, '')

// Social media icons
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C7.28 0 6.94 0.01 5.88 0.06C4.82 0.11 4.08 0.28 3.45 0.53C2.79 0.78 2.23 1.12 1.68 1.68C1.12 2.23 0.78 2.79 0.53 3.45C0.28 4.08 0.11 4.82 0.06 5.88C0.01 6.94 0 7.28 0 10C0 12.72 0.01 13.06 0.06 14.12C0.11 15.18 0.28 15.92 0.53 16.55C0.78 17.21 1.12 17.77 1.68 18.32C2.23 18.88 2.79 19.22 3.45 19.47C4.08 19.72 4.82 19.89 5.88 19.94C6.94 19.99 7.28 20 10 20C12.72 20 13.06 19.99 14.12 19.94C15.18 19.89 15.92 19.72 16.55 19.47C17.21 19.22 17.77 18.88 18.32 18.32C18.88 17.77 19.22 17.21 19.47 16.55C19.72 15.92 19.89 15.18 19.94 14.12C19.99 13.06 20 12.72 20 10C20 7.28 19.99 6.94 19.94 5.88C19.89 4.82 19.72 4.08 19.47 3.45C19.22 2.79 18.88 2.23 18.32 1.68C17.77 1.12 17.21 0.78 16.55 0.53C15.92 0.28 15.18 0.11 14.12 0.06C13.06 0.01 12.72 0 10 0ZM10 1.8C12.67 1.8 12.99 1.81 14.04 1.86C15.01 1.9 15.54 2.07 15.89 2.2C16.35 2.38 16.68 2.6 17.03 2.97C17.4 3.32 17.62 3.65 17.8 4.11C17.93 4.46 18.1 4.99 18.14 5.96C18.19 7.01 18.2 7.33 18.2 10C18.2 12.67 18.19 12.99 18.14 14.04C18.1 15.01 17.93 15.54 17.8 15.89C17.62 16.35 17.4 16.68 17.03 17.03C16.68 17.4 16.35 17.62 15.89 17.8C15.54 17.93 15.01 18.1 14.04 18.14C12.99 18.19 12.67 18.2 10 18.2C7.33 18.2 7.01 18.19 5.96 18.14C4.99 18.1 4.46 17.93 4.11 17.8C3.65 17.62 3.32 17.4 2.97 17.03C2.6 16.68 2.38 16.35 2.2 15.89C2.07 15.54 1.9 15.01 1.86 14.04C1.81 12.99 1.8 12.67 1.8 10C1.8 7.33 1.81 7.01 1.86 5.96C1.9 4.99 2.07 4.46 2.2 4.11C2.38 3.65 2.6 3.32 2.97 2.97C3.32 2.6 3.65 2.38 4.11 2.2C4.46 2.07 4.99 1.9 5.96 1.86C7.01 1.81 7.33 1.8 10 1.8Z"/>
    <path d="M10 13.33C8.16 13.33 6.67 11.84 6.67 10C6.67 8.16 8.16 6.67 10 6.67C11.84 6.67 13.33 8.16 13.33 10C13.33 11.84 11.84 13.33 10 13.33ZM10 4.87C7.17 4.87 4.87 7.17 4.87 10C4.87 12.83 7.17 15.13 10 15.13C12.83 15.13 15.13 12.83 15.13 10C15.13 7.17 12.83 4.87 10 4.87Z"/>
    <circle cx="15.34" cy="4.66" r="1.17"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.52 0H1.47C0.66 0 0 0.65 0 1.45V18.54C0 19.35 0.66 20 1.47 20H18.52C19.33 20 20 19.35 20 18.54V1.45C20 0.65 19.33 0 18.52 0ZM6.06 17.07H3.08V7.57H6.06V17.07ZM4.57 6.29C3.62 6.29 2.85 5.51 2.85 4.57C2.85 3.63 3.62 2.85 4.57 2.85C5.51 2.85 6.29 3.63 6.29 4.57C6.29 5.51 5.51 6.29 4.57 6.29ZM17.14 17.07H14.16V12.43C14.16 11.3 14.14 9.84 12.58 9.84C10.99 9.84 10.75 11.08 10.75 12.35V17.07H7.77V7.57H10.63V8.9H10.67C11.06 8.16 12.03 7.37 13.47 7.37C16.49 7.37 17.14 9.34 17.14 11.92V17.07Z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 0H11V13.5C11 14.88 9.88 16 8.5 16C7.12 16 6 14.88 6 13.5C6 12.17 7.06 11.09 8.37 11.01V7.47C5.09 7.56 2.5 10.21 2.5 13.5C2.5 16.81 5.19 19.5 8.5 19.5C11.81 19.5 14.5 16.81 14.5 13.5V6.48C15.89 7.47 17.59 8 19.5 8V4.5C16.65 4.5 14.5 2.35 14.5 0Z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 5.2C19.37 4.38 18.74 3.75 17.92 3.53C16.42 3.13 10 3.13 10 3.13C10 3.13 3.58 3.13 2.08 3.53C1.26 3.75 0.63 4.38 0.41 5.2C0 6.7 0 10 0 10C0 10 0 13.3 0.41 14.8C0.63 15.62 1.26 16.25 2.08 16.47C3.58 16.87 10 16.87 10 16.87C10 16.87 16.42 16.87 17.92 16.47C18.74 16.25 19.37 15.62 19.59 14.8C20 13.3 20 10 20 10C20 10 20 6.7 19.59 5.2ZM8 12.87V7.13L13.2 10L8 12.87Z"/>
  </svg>
)

const RealtorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0L0 6V8H2V18H8V13H12V18H18V8H20V6L10 0ZM12 11H8V8H12V11Z"/>
  </svg>
)

// Navigation icons
const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6L8 2L14 6V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 14V9H10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BuyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L3 2L4 10L11 10L12 6L4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="5" cy="13" r="1" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="10" cy="13" r="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const SellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L14 3L8 9L6 7L2 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 2H14V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AboutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="5" r="0.5" fill="currentColor"/>
  </svg>
)

const ContactIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 6L8 9L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4L8 8.5L14 4M2 12H14V4H2V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 11.5C14 11.5 13 12.5 12.5 13C11.7 13.8 10.3 13.8 9.5 13C7.5 11.5 4.5 8.5 3 6.5C2.2 5.7 2.2 4.3 3 3.5C3.5 3 4.5 2 4.5 2L6.5 4.5L5.5 5.5C5.5 5.5 6 6.5 7.5 8C9 9.5 10 10 10 10L11 9L13.5 11.5L14 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14C8 14 13 10 13 6C13 3.23858 10.7614 1 8 1C5.23858 1 3 3.23858 3 6C3 10 8 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const FooterSocialDisclosure = () => {
  const primaryLinks = navigation.slice(0, 4)
  const secondaryLinks = navigation.slice(4)
  const dmcaPhone = disclaimers.dmca?.phone ? sanitizePhone(disclaimers.dmca.phone) : null

  const navIcons: Record<string, React.ReactElement> = {
    'Home': <HomeIcon />,
    'Buy': <BuyIcon />,
    'Sell': <SellIcon />,
    'About': <AboutIcon />,
    'Contact': <ContactIcon />,
  }

  const socialIcons: Record<string, React.ReactElement> = {
    'facebook': <FacebookIcon />,
    'instagram': <InstagramIcon />,
    'linkedin': <LinkedInIcon />,
    'tiktok': <TikTokIcon />,
    'youtube': <YouTubeIcon />,
    'realtor': <RealtorIcon />,
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brandBlock}>
          <div>
            <div className={styles.brandName}>Patrick Manning</div>
            <div>{agentProfile.brokerage.name}</div>
            <div>{agentProfile.brokerage.licenseStatement}</div>
            <div>{agentProfile.phone}</div>
          </div>
          <div className={styles.socialLinks}>
            {Object.entries(agentProfile.socialLinks).map(([key, value]) => (
              <a
                key={key}
                href={value}
                className={styles.socialLink}
                aria-label={key}
                target="_blank"
                rel="noreferrer"
              >
                {socialIcons[key]}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.linkColumn}>
          <div className={styles.linkHeading}>Navigate</div>
          {primaryLinks.map((item) => (
            <Link key={item.label} to={item.path} className={styles.linkWithIcon}>
              {navIcons[item.label]}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className={styles.linkColumn}>
          <div className={styles.linkHeading}>Services</div>
          {secondaryLinks.map((item) => (
            <Link key={item.label} to={item.path} className={styles.linkWithIcon}>
              {navIcons[item.label]}
              <span>{item.label}</span>
            </Link>
          ))}
          <a href="mailto:pmanningtnrealtor@gmail.com" className={styles.linkWithIcon}>
            <EmailIcon />
            <span>Email Patrick</span>
          </a>
          <a href={`tel:${sanitizePhone(agentProfile.phone)}`} className={styles.linkWithIcon}>
            <PhoneIcon />
            <span>Call {agentProfile.phone}</span>
          </a>
        </div>

        <div className={styles.linkColumn}>
          <div className={styles.linkHeading}>Brokerage Offices</div>
          <div className={styles.officeItem}>
            <LocationIcon />
            <p>
              {agentProfile.brokerage.officeTennessee}
            </p>
          </div>
          <div className={styles.officeItem}>
            <LocationIcon />
            <p>
              {agentProfile.brokerage.officeKentucky}
            </p>
          </div>
        </div>

        <div className={styles.compliancePanel}>
          <div className={styles.complianceCard}>
            <div className={styles.complianceHeader}>
              <span className={styles.complianceTag}>MLS / IDX Compliance</span>
              <div className={styles.providerChips}>
                {disclaimers.providers?.map((provider) => {
                  if (provider.href) {
                    return (
                      <a
                        key={provider.label}
                        href={provider.href}
                        className={styles.providerChip}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {provider.label}
                      </a>
                    )
                  }

                  return (
                    <span key={provider.label} className={`${styles.providerChip} ${styles.providerChipStatic}`}>
                      {provider.label}
                    </span>
                  )
                })}
              </div>
            </div>
            <p>{disclaimers.dataSource}</p>
            <p>{disclaimers.idx}</p>
            <p>{disclaimers.verification}</p>
          </div>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Brokerage & Licenses</span>
              <p className={styles.metaValue}>{agentProfile.brokerage.name}</p>
              <p className={styles.metaValue}>{agentProfile.brokerage.licenseStatement}</p>
              <ul className={styles.brokerContacts}>
                {agentProfile.brokerage.managingBrokers.map((broker) => (
                  <li key={broker.name} className={styles.brokerContact}>
                    <span className={styles.brokerContactName}>
                      {broker.name}
                      {broker.title && <span className={styles.brokerContactTitle}> · {broker.title}</span>}
                    </span>
                    <div className={styles.brokerContactLinks}>
                      {broker.phone && (
                        <a href={`tel:${sanitizePhone(broker.phone)}`} aria-label={`Call ${broker.name}`}>
                          {broker.phone}
                        </a>
                      )}
                      {broker.email && (
                        <a href={`mailto:${broker.email}`} aria-label={`Email ${broker.name}`}>
                          {broker.email}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{disclaimers.dmca.heading}</span>
              <p className={styles.metaValue}>{disclaimers.dmca.summary}</p>
              <div className={styles.metaContacts}>
                <a href={`mailto:${disclaimers.dmca.email}`} aria-label="Email broker team">
                  {disclaimers.dmca.email}
                </a>
                {dmcaPhone && (
                  <a href={`tel:${dmcaPhone}`} aria-label="Call broker team">
                    {disclaimers.dmca.phone}
                  </a>
                )}
              </div>
              {agentProfile.brokerage.teamEmail && agentProfile.brokerage.teamPhone && (
                <div className={styles.metaContactsStack}>
                  <span className={styles.metaLabel}>Broker Team</span>
                  <div className={styles.metaContacts}>
                    <a href={`mailto:${agentProfile.brokerage.teamEmail}`}>
                      {agentProfile.brokerage.teamEmail}
                    </a>
                    <a href={`tel:${sanitizePhone(agentProfile.brokerage.teamPhone)}`}>
                      {agentProfile.brokerage.teamPhone}
                    </a>
                  </div>
                </div>
              )}
              <p className={styles.metaSubtle}>{disclaimers.dmca.mailing}</p>
            </div>
          </div>

          <div className={styles.disclosureStack}>
            <p className={styles.disclosureText}>{disclaimers.equalHousing}</p>
            <p className={styles.disclosureText}>{disclaimers.privacy}</p>
          </div>

          {disclaimers.legalLinks && disclaimers.legalLinks.length > 0 && (
            <div className={styles.legalLinks}>
              {disclaimers.legalLinks.map((link) => {
                if (link.href) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={styles.legalLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  )
                }

                return (
                  <span key={link.label} className={`${styles.legalLink} ${styles.legalLinkStatic}`}>
                    {link.label}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Patrick Manning. Real Broker, LLC. All rights reserved.
      </div>
    </footer>
  )
}
