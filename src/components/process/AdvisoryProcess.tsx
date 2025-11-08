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
    <div className={styles.timeline}>
      {advisoryProcess.map((step, index) => (
        <article key={step.id} className={styles.step} data-step={`0${index + 1}`}>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <p className={styles.stepDescription}>{step.description}</p>
        </article>
      ))}
    </div>
  </section>
)
