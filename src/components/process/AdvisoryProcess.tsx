import { advisoryProcess } from '../../data/services'
import styles from './AdvisoryProcess.module.css'

export const AdvisoryProcess = () => (
  <section className={styles.section} aria-labelledby="advisory-process-heading">
    <div className="container">
      <div className="section-subtitle">How We Operate</div>
      <h2 id="advisory-process-heading" className="section-title">
        A Process Built Around Your Objectives
      </h2>
    </div>
    {/* Desktop: Timeline layout */}
    <div className={styles.timeline}>
      {advisoryProcess.map((step, index) => (
        <article key={step.id} className={styles.step} data-step={`0${index + 1}`}>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <p className={styles.stepDescription}>{step.description}</p>
        </article>
      ))}
    </div>
    {/* Mobile: Accordion layout */}
    <div className={styles.accordion}>
      {advisoryProcess.map((step, index) => (
        <details key={step.id} className={styles.accordionItem}>
          <summary className={styles.accordionHeader}>
            <span className={styles.accordionNumber}>0{index + 1}</span>
            <span className={styles.accordionTitle}>{step.title}</span>
            <span className={styles.accordionIcon} aria-hidden="true" />
          </summary>
          <div className={styles.accordionContent}>
            <p>{step.description}</p>
          </div>
        </details>
      ))}
    </div>
  </section>
)
