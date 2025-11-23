import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { testimonials } from '../data/testimonials'
import { agentProfile } from '../data/agent'
import styles from './Contact.module.css'

const Reviews = () => (
  <div>
    <Seo
      title="Client Reviews | Patrick Manning"
      description="Hear from buyers, sellers, and relocating families who experienced Patrick's lifestyle-first, content-driven approach."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/reviews"
    />
    <PageHeader
      kicker="Reviews"
      title="Client Testimonials"
      subtitle={`${agentProfile.lifestyleMessaging.intro} Hear how families and executives felt supported through relocations, new builds, and lifestyle-focused moves.`}
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
