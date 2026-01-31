import { advisoryProcess } from '../../data/services'
import styles from './AdvisoryProcess.module.css'

export const AdvisoryProcess = () => {
  return (
    <section className={styles.section} aria-labelledby="advisory-process-heading">
      <div className="container">
        <div className="section-subtitle">How We Operate</div>
        <h2 id="advisory-process-heading" className="section-title">
          A Process Built Around Your Objectives
        </h2>
      </div>

      <div className={styles.bulletContainer}>
        <ul className={styles.processList}>
          {advisoryProcess.map((step) => (
            <li key={step.id} className={styles.processItem}>
              <strong>{step.title}:</strong>{' '}
              {step.description.join('; ')}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
