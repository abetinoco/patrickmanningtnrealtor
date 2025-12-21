import { Link } from 'react-router-dom'
import { agentProfile } from '../data/agent'
import { type IconName, iconMap } from '../components/icons/Icons'
import styles from './QuickLinks.module.css'

export const QuickLinks = () => {
  const links: Array<{
    title: string
    href: string
    description: string
    icon: IconName
    internal?: boolean
    external?: boolean
  }> = [
      {
        title: 'PatrickManning.com Homepage',
        href: '/',
        description: 'Visit my full website',
        icon: 'home',
        internal: true,
      },
      {
        title: 'Schedule a Consultation',
        href: 'https://calendly.com/pmanningtnrealtor/realestateconsultation?month=2025-11',
        description: 'Book your private strategy session',
        icon: 'calendar',
        external: true,
      },
      {
        title: 'Browse Properties',
        href: '/buy',
        description: 'Search Middle Tennessee luxury homes',
        icon: 'search',
        internal: true,
      },
      {
        title: 'Value Your Home',
        href: '/sell#home-valuation',
        description: 'Get a comprehensive property valuation',
        icon: 'dollar',
        internal: true,
      },
      {
        title: 'Facebook',
        href: agentProfile.socialLinks.facebook,
        description: '@pmanningtnrealtor',
        icon: 'facebook',
        external: true,
      },
      {
        title: 'Instagram',
        href: agentProfile.socialLinks.instagram,
        description: '@pmanningtnrealtor',
        icon: 'instagram',
        external: true,
      },
      {
        title: 'TikTok',
        href: agentProfile.socialLinks.tiktok,
        description: '@pmanningtnrealtor',
        icon: 'tiktok',
        external: true,
      },
      {
        title: 'YouTube',
        href: agentProfile.socialLinks.youtube,
        description: '@pmanningtnrealtor',
        icon: 'youtube',
        external: true,
      },
      {
        title: 'LinkedIn',
        href: agentProfile.socialLinks.linkedin,
        description: 'Connect professionally',
        icon: 'linkedin',
        external: true,
      },
      {
        title: 'Call Me',
        href: `tel:${agentProfile.phone.replace(/[^\d+]/g, '')}`,
        description: agentProfile.phone,
        icon: 'phone',
        external: true,
      },
      {
        title: 'Email Me',
        href: `mailto:${agentProfile.email}`,
        description: agentProfile.email,
        icon: 'mail',
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
          {links.map((link) => {
            const IconComponent = iconMap[link.icon]
            return link.internal ? (
              <Link
                key={link.title}
                to={link.href}
                className={styles.linkCard}
              >
                <div className={styles.linkIcon}>
                  <IconComponent width={24} height={24} />
                </div>
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
                <div className={styles.linkIcon}>
                  <IconComponent width={24} height={24} />
                </div>
                <div className={styles.linkContent}>
                  <div className={styles.linkTitle}>{link.title}</div>
                  <div className={styles.linkDescription}>{link.description}</div>
                </div>
              </a>
            )
          })}
        </div>

        <div className={styles.footer}>
          <p>© {new Date().getFullYear()} Patrick Manning | Real Broker, LLC</p>
          <p className={styles.license}>{agentProfile.brokerage.licenseStatement}</p>
        </div>
      </div>
    </div>
  )
}
