import { testimonials } from '../../data/testimonials'
import styles from './TestimonialCarousel.module.css'

export const TestimonialCarousel = () => (
  <section className={styles.section} aria-labelledby="testimonial-heading">
    <div className="container">
      <div className="section-subtitle">Client Perspective</div>
      <h2 id="testimonial-heading" className="section-title">
        Stories from Families and Executives We Have Guided
      </h2>
    </div>

    <div className={styles.carousel}>
      <div className={styles.track}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className={styles.card}>
            <blockquote className={styles.quote}>“{testimonial.quote}”</blockquote>
            <div className={styles.client}>
              {testimonial.clientName} · {testimonial.location}
            </div>
            <div className={styles.result}>{testimonial.result}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
)
