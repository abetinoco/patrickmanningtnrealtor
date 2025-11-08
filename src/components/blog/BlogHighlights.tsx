import { blogPosts } from '../../data/blog'
import styles from './BlogHighlights.module.css'

export const BlogHighlights = () => (
  <section className={styles.section} aria-labelledby="blog-highlights-heading">
    <div className="container">
      <div className="section-subtitle">Insights & Resources</div>
      <h2 id="blog-highlights-heading" className="section-title">
        Latest Intelligence for Middle Tennessee Buyers and Sellers
      </h2>
    </div>

    <div className={styles.grid}>
      {blogPosts.slice(0, 3).map((post) => (
        <article key={post.id} className={styles.card}>
          <img src={post.heroImage} alt={post.heroAlt} className={styles.image} loading="lazy" />
          <div className={styles.meta}>
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <a className={styles.link} href={`/blog/${post.slug}`}>
            Read Story <span aria-hidden>→</span>
          </a>
        </article>
      ))}
    </div>
  </section>
)
