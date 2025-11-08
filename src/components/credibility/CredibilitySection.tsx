import { agentProfile } from '../../data/agent'
import { recognitions } from '../../data/recognition'
import styles from './CredibilitySection.module.css'

export const CredibilitySection = () => (
  <section className={styles.section} aria-labelledby="credibility-heading">
    <div className={styles.grid}>
      <div>
        <div className="section-subtitle">Trusted by Executives</div>
        <h2 id="credibility-heading" className="section-title">
          Results that Command Confidence
        </h2>
      </div>
      <div className={styles.metrics}>
        {agentProfile.valueMetrics.map((metric) => (
          <article key={metric.label}>
            <div className={styles.metricValue}>{metric.value}</div>
            <div className={styles.metricLabel}>{metric.label}</div>
          </article>
        ))}
      </div>
      <div className={styles.badges}>
        {recognitions.map((badge) => (
          <article key={badge.id} className={styles.badgeCard}>
            <div className={styles.badgeLabel}>{badge.label}</div>
            <p className={styles.badgeDescription}>{badge.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)
