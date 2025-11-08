import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { testimonials } from '../data/testimonials'
import styles from './Contact.module.css'

const Reviews = () => (
  <div>
    <Seo
      title="Client Reviews | Patrick Manning"
      description="Read testimonials from luxury buyers, sellers, and relocating families who partnered with Patrick Manning."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/reviews"
    />
    <PageHeader
      kicker="Reviews"
      title="Client Testimonials"
      subtitle="A sampling of stories from the 125+ families and executives we have guided through acquisitions, sales, and relocations."
    />

    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className={styles.panel}>
            <h3 className="section-title">{testimonial.clientName}</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>{testimonial.location}</p>
            <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}>“{testimonial.quote}”</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>{testimonial.result}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
)

export default Reviews
