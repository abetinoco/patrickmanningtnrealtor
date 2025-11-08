import { agentProfile } from '../../data/agent'
import styles from './HeroBanner.module.css'

export const HeroBanner = () => {
  const { hero, valueMetrics } = agentProfile
  const backgroundImage = hero.backgroundImage || ''

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Luxury residence exterior"
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
              'radial-gradient(circle at top right, rgba(217, 217, 214, 0.18), transparent 60%)',
          }}
        />
      )}
      <div
        className={styles.overlay}
        style={{ backgroundColor: `rgba(17, 17, 17, ${hero.overlayTone ?? 0.6})` }}
      />

      <div className={styles.content}>
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
    </section>
  )
}
