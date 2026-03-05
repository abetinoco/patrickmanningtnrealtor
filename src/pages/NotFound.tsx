import { Link } from 'react-router-dom'
import { Seo } from '../components/seo/Seo'

const NotFound = () => (
  <section style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
    <Seo
      title="Page Not Found | Patrick Manning"
      description="The page you're looking for doesn't exist. Browse available homes or contact Patrick Manning, Realtor."
      noindex
    />
    <div className="container">
      <h1 className="section-title">Page Not Found</h1>
      <p style={{ color: 'var(--color-text-secondary)' }}>
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link to="/" className="cta-button">
        Return Home
      </Link>
    </div>
  </section>
)

export default NotFound
