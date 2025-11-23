import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { blogPosts } from '../data/blog'
import { agentProfile } from '../data/agent'
import { formatDate } from '../utils/format'
import styles from './Blog.module.css'

const Blog = () => (
  <div>
    <Seo
      title="Middle Tennessee Lifestyle Real Estate Insights | Patrick Manning"
      description="Content-driven updates that blend lifestyle-first guidance with market intel across Williamson, Maury, and Western Kentucky."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/blog"
    />
    <PageHeader
      kicker="Resources"
      title="Insights, Market Intelligence, and Relocation Guides"
      subtitle={agentProfile.lifestyleMessaging.lifestyle}
    />

    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.card}>
            <img src={post.heroImage} alt={post.heroAlt} className={styles.media} loading="lazy" />
            <div className={styles.content}>
              <div className={styles.meta}>
                <span>{post.category}</span>
                <span>{post.readTime}</span>
                <span>{formatDate(post.published)}</span>
              </div>
              <h2 className="section-title">{post.title}</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>{post.excerpt}</p>
              <a className="cta-button" href={`/blog/${post.slug}`}>
                Read Full Article
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
)

export default Blog
