import { IDXWidget } from './IDXWidget'
import { IDX_CONFIG } from '../../data/idxConfig'
import styles from './IDXSearchWidget.module.css'

interface IDXSearchWidgetProps {
  title?: string
  subtitle?: string
  description?: string
  showHeader?: boolean
  variant?: 'default' | 'hero' | 'compact'
}

/**
 * Property Search widget for MLS listings.
 * Configured in IDX Broker control panel.
 */
export const IDXSearchWidget = ({
  title = 'Search Properties',
  subtitle = 'Find Your Home',
  description = 'Search the MLS for homes across Middle Tennessee and Western Kentucky.',
  showHeader = true,
  variant = 'default',
}: IDXSearchWidgetProps) => {
  const widgetId = IDX_CONFIG.widgets.basicSearch.id

  const sectionClass = variant === 'hero' 
    ? styles.heroSection 
    : variant === 'compact' 
      ? styles.compactSection 
      : styles.section

  return (
    <section className={sectionClass} aria-labelledby="property-search-heading">
      <div className={styles.container}>
        {showHeader && (
          <div className={styles.header}>
            <div className="section-subtitle">{subtitle}</div>
            <h2 id="property-search-heading" className="section-title">
              {title}
            </h2>
            <p className={styles.description}>{description}</p>
          </div>
        )}
        <div className={`${styles.widgetWrapper} ${styles[variant]}`}>
          <IDXWidget
            widgetId={widgetId}
          />
        </div>
      </div>
    </section>
  )
}
