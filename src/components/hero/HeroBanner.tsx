import { agentProfile } from '../../data/agent'
import styles from './HeroBanner.module.css'

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
          <span className={styles.kicker}>{agentProfile.tagline}</span>
          <h1 id="hero-heading" className={styles.title}>
            {hero.headline}
          </h1>
          <p className={styles.subtitle}>{hero.subheadline}</p>

          <div className={styles.actions}>
            <a className="cta-button" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className={styles.secondaryButton} href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className={styles.statsBar}>
            {valueMetrics.slice(0, 4).map((metric) => (
              <div key={metric.label}>
                <div className={styles.statValue}>{metric.value}</div>
                <div className={styles.statLabel}>{metric.label}</div>
              </div>
            ))}
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
            <a className={styles.profileContact} href={`tel:${phoneHref}`}>
              Call/Text {agentProfile.phone}
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
