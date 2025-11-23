import { Link } from 'react-router-dom'
import { agentProfile } from '../data/agent'
import styles from './QuickLinks.module.css'

export const QuickLinks = () => {
  const links = [
    {
      title: 'PatrickManning.com Homepage',
      href: '/',
      description: 'Visit my full website',
      icon: '🏠',
      internal: true,
    },
    {
      title: 'Schedule a Consultation',
      href: 'https://calendly.com/pmanningtnrealtor/realestateconsultation?month=2025-11',
      description: 'Book your private strategy session',
      icon: '📅',
      external: true,
    },
    {
      title: 'Browse Properties',
      href: '/buy',
      description: 'Search Middle Tennessee luxury homes',
      icon: '🔍',
      internal: true,
    },
    {
      title: 'Value Your Home',
      href: '/sell/valuation',
      description: 'Get a comprehensive property valuation',
      icon: '💰',
      internal: true,
    },
    {
      title: 'Facebook',
      href: agentProfile.socialLinks.facebook,
      description: '@pmanningtnrealtor',
      icon: '👥',
      external: true,
    },
    {
      title: 'Instagram',
      href: agentProfile.socialLinks.instagram,
      description: '@pmanningtnrealtor',
      icon: '📸',
      external: true,
    },
    {
      title: 'TikTok',
      href: agentProfile.socialLinks.tiktok,
      description: '@pmanningtnrealtor',
      icon: '🎵',
      external: true,
    },
    {
      title: 'YouTube',
      href: agentProfile.socialLinks.youtube,
      description: '@pmanningtnrealtor',
      icon: '📹',
      external: true,
    },
    {
      title: 'LinkedIn',
      href: agentProfile.socialLinks.linkedin,
      description: 'Connect professionally',
      icon: '💼',
      external: true,
    },
    {
      title: 'Realtor.com Profile',
      href: agentProfile.socialLinks.realtor,
      description: 'View my agent profile',
      icon: '🏡',
      external: true,
    },
    {
      title: 'Call Me',
      href: `tel:${agentProfile.phone.replace(/[^\d+]/g, '')}`,
      description: agentProfile.phone,
      icon: '📞',
      external: true,
    },
    {
      title: 'Email Me',
      href: `mailto:${agentProfile.email}`,
      description: agentProfile.email,
      icon: '✉️',
      external: true,
    },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img src="/media/patrick.png" alt="Patrick Manning" loading="lazy" />
          </div>
          <h1 className={styles.name}>{agentProfile.name}</h1>
          <p className={styles.tagline}>{agentProfile.designation}</p>
          <p className={styles.subtitle}>{agentProfile.tagline}</p>
        </div>

        <div className={styles.linksGrid}>
          {links.map((link) => (
            link.internal ? (
              <Link
                key={link.title}
                to={link.href}
                className={styles.linkCard}
              >
                <div className={styles.linkIcon}>{link.icon}</div>
                <div className={styles.linkContent}>
                  <div className={styles.linkTitle}>{link.title}</div>
                  <div className={styles.linkDescription}>{link.description}</div>
                </div>
              </Link>
            ) : (
              <a
                key={link.title}
                href={link.href}
                className={styles.linkCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.linkIcon}>{link.icon}</div>
                <div className={styles.linkContent}>
                  <div className={styles.linkTitle}>{link.title}</div>
                  <div className={styles.linkDescription}>{link.description}</div>
                </div>
              </a>
            )
          ))}
        </div>

        <div className={styles.footer}>
          <p>© {new Date().getFullYear()} Patrick Manning | Real Broker, LLC</p>
          <p className={styles.license}>{agentProfile.brokerage.licenseStatement}</p>
        </div>
      </div>
    </div>
  )
}
