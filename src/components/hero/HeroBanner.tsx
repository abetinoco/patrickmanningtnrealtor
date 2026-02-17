import { agentProfile } from '../../data/agent'
import { PropertySearchForm } from '../search/PropertySearchForm'
import styles from './HeroBanner.module.css'

const BUYER_QUESTIONNAIRE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfo5CToatY-U8AViEnhNETb1wlZxy6W46xOtlg8anCGY-8RxA/viewform?usp=pp_url'
const SELLER_QUESTIONNAIRE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdIKMhCGY10fJqKytzmPD9Q2E2Zy9asrkst2gOXNd6XGt_35A/viewform?usp=pp_url'

export const HeroBanner = () => {
  const { hero, valueMetrics } = agentProfile
  const backgroundImage = hero.backgroundImage || ''
  const phoneHref = agentProfile.phone.replace(/[^\d+]/g, '')

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Tennessee and Kentucky home setting"
          className={styles.backgroundMedia}
          loading="eager"
        />
      )}
      {!backgroundImage && (
        <div
          className={styles.backgroundMedia}
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(79,224,208,0.2), transparent 50%), linear-gradient(135deg, #050708 0%, #0f141c 100%)',
          }}
        />
      )}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.copy}>

          <h1 id="hero-heading" className={styles.title}>
            {hero.headline}
          </h1>
          <p className={styles.subtitle}>{hero.subheadline}</p>

          {/* Search bar – browse listings */}
          <div className={styles.desktopSearchBar}>
            <PropertySearchForm variant="hero" />
          </div>

          {/* Get started – Buyer & Seller questionnaires */}
          <div className={styles.questionnaireSection}>
            <p className={styles.questionnaireLabel}>Get started with Patrick</p>
            <div className={styles.questionnaireButtons}>
              <a
                href={BUYER_QUESTIONNAIRE_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.questionnaireButton}
              >
                I&apos;m Buying
              </a>
              <a
                href={SELLER_QUESTIONNAIRE_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.questionnaireButton}
              >
                I&apos;m Selling
              </a>
            </div>
          </div>

          <div className={styles.actions}>
            <a className="cta-button" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className={styles.secondaryButton} href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className={styles.statsBar}>
            <div className={styles.tickerTrack}>
              {valueMetrics.slice(0, 5).map((metric) => (
                <div key={metric.label} className={styles.statItem}>
                  <div className={styles.statValue}>{metric.value}</div>
                  <div className={styles.statLabel}>{metric.label}</div>
                </div>
              ))}
              {valueMetrics.slice(0, 5).map((metric) => (
                <div key={`dup-${metric.label}`} className={styles.statItem} aria-hidden="true">
                  <div className={styles.statValue}>{metric.value}</div>
                  <div className={styles.statLabel}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className={styles.profilePanel} aria-label="About Patrick Manning">
          <div className={styles.profileMedia}>
            <img src="/media/patrick.png" alt="Patrick Manning" loading="lazy" />
            <span className={styles.profileGlow} aria-hidden="true" />
          </div>
          <div className={styles.profileMeta}>
            <p className={styles.profileTag}>Real Broker, LLC</p>
            <div className={styles.profileName}>{agentProfile.name}</div>
            <p className={styles.profileRole}>{agentProfile.designation}</p>
            <div className={styles.profileButtons}>
              <a className={styles.profileButton} href={`tel:${phoneHref}`}>
                Call/Text {agentProfile.phone}
              </a>
              <a className={styles.profileButtonSecondary} href={`mailto:${agentProfile.email}`}>
                {agentProfile.email}
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* MOBILE HERO - Search first, then tagline below */}
      <div className={styles.mobileHero}>
        <div className={styles.mobileSearch}>
          <PropertySearchForm variant="compact" />
        </div>
        <h1
          className={styles.mobileTitle}
          style={{ color: '#ffffff', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
        >
          Find Your <span style={{ color: 'var(--accent-primary)' }}>Perfect</span> Home
        </h1>
        <p
          className={styles.mobileSubtitle}
          style={{ color: '#ffffff', textShadow: '0 1px 10px rgba(0,0,0,0.6)' }}
        >
          Realtor & Home Lifestyle Expert
        </p>
        <div className={styles.mobileQuestionnaires}>
          <a
            href={BUYER_QUESTIONNAIRE_URL}
            target="_blank"
            rel="noreferrer"
            className={styles.mobileQuestionnaireBtn}
          >
            I&apos;m Buying
          </a>
          <a
            href={SELLER_QUESTIONNAIRE_URL}
            target="_blank"
            rel="noreferrer"
            className={styles.mobileQuestionnaireBtn}
          >
            I&apos;m Selling
          </a>
        </div>
        <div className={styles.mobileActions}>
          <a
            className={styles.mobilePrimaryCta}
            href={hero.primaryCta.href}
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: '#ffffff',
              fontWeight: 700
            }}
          >
            {hero.primaryCta.label}
          </a>
          <a
            className={styles.mobileSecondaryCta}
            href={hero.secondaryCta.href}
            style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              color: '#ffffff',
              backdropFilter: 'blur(10px)',
              fontWeight: 600
            }}
          >
            {hero.secondaryCta.label}
          </a>
        </div>
        <div className={styles.mobileStats}>
          <div className={styles.mobileStatsTrack}>
            {valueMetrics.slice(0, 5).map((metric) => (
              <div key={metric.label} className={styles.mobileStatItem}>
                <span
                  className={styles.mobileStatValue}
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {metric.value}
                </span>
                <span
                  className={styles.mobileStatLabel}
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  {metric.label}
                </span>
              </div>
            ))}
            {valueMetrics.slice(0, 5).map((metric) => (
              <div key={`dup-${metric.label}`} className={styles.mobileStatItem} aria-hidden="true">
                <span
                  className={styles.mobileStatValue}
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {metric.value}
                </span>
                <span
                  className={styles.mobileStatLabel}
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
