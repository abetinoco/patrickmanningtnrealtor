import { quickLinks } from '../../data/quickLinks'
import { iconMap, ArrowRightIcon } from '../icons/Icons'
import styles from './QuickLinksGrid.module.css'

const isExternalLink = (href: string) => /^https?:\/\//.test(href)

export const QuickLinksGrid = () => (
  <section className={styles.section} aria-labelledby="quick-links-heading">
    <div className="container">
      <div className="section-subtitle">How We Can Help</div>
      <h2 id="quick-links-heading" className="section-title">
        Services to Support Every Step of Your Real Estate Journey
      </h2>
    </div>
    <div className={styles.grid}>
      {quickLinks.map((link) => {
        const external = isExternalLink(link.href)
        const IconComponent = link.icon ? iconMap[link.icon] : null
        return (
          <a
            key={link.id}
            href={link.href}
            className={styles.card}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
          >
            <div className={styles.cardHeader}>
              <div className={styles.title}>{link.title}</div>
              {IconComponent && (
                <span className={styles.icon} aria-hidden="true">
                  <IconComponent width={24} height={24} />
                </span>
              )}
            </div>
            <div className={styles.cardBody}>
              <p className={styles.description}>{link.description}</p>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.arrowLabel}>Explore</span>
              <span className={styles.arrowIcon} aria-hidden="true">
                <ArrowRightIcon width={18} height={18} />
              </span>
            </div>
          </a>
        )
      })}
    </div>
  </section>
)
