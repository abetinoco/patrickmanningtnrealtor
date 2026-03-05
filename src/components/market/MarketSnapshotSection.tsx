import { marketMetrics, marketLastUpdated } from '../../data/market'
import styles from './MarketSnapshotSection.module.css'

export const MarketSnapshotSection = () => (
  <section className={styles.section} id="market-snapshot" aria-labelledby="market-heading">
    <div className="container">
      <div className="section-subtitle">Market Snapshot</div>
      <h2 id="market-heading" className="section-title">
        Intelligence to Inform Every Move
      </h2>
      <p>
        Receive live updates on absorption rates, executive relocation trends, and the luxury new construction pipeline across
        Middle Tennessee and Western Kentucky.
      </p>
      <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>
        Data as of {marketLastUpdated}
      </p>
    </div>

    <div className={styles.metrics}>
      {marketMetrics.map((metric) => (
        <article key={metric.id} className={styles.metricCard}>
          <div className={styles.metricValue}>{metric.value}</div>
          <div className={styles.metricMeta}>{`${metric.label} · ${metric.change}`}</div>
          <p className={styles.metricDescription}>{metric.description}</p>
        </article>
      ))}
    </div>

  </section>
)
