import { quickLinks } from '../../data/quickLinks'
import styles from './QuickLinksGrid.module.css'

export const QuickLinksGrid = () => (
  <section className={styles.section} aria-labelledby="quick-links-heading">
    <div className="container">
      <div className="section-subtitle">Navigate the Experience</div>
      <h2 id="quick-links-heading" className="section-title">
        The High-Touch Services Our Clients Rely On
      </h2>
    </div>
    <div className={styles.grid}>
      {quickLinks.map((link) => (
        <a key={link.id} href={link.href} className={styles.card}>
          <div className={styles.title}>{link.title}</div>
          <p className={styles.description}>{link.description}</p>
          <span className={styles.arrow}>
            Explore
            <span aria-hidden>→</span>
          </span>
        </a>
      ))}
    </div>
  </section>
)
