import { useEffect } from 'react'
import { agentProfile } from '../../data/agent'
import {
    InstagramIcon,
    FacebookIcon,
    YouTubeIcon,
    TikTokIcon,
    LinkedInIcon,
} from '../icons/Icons'
import styles from './SocialFeed.module.css'

interface SocialPlatform {
    name: string
    url: string
    icon: React.ComponentType<{ width?: number; height?: number }>
    handle: string
    color: string
}

// YouTube uploads playlist — formed by replacing 'UC' with 'UU' in the channel ID.
// This always shows the latest uploads without any CORS proxy.
const YOUTUBE_UPLOADS_PLAYLIST = 'UUrPqvzOmaXeW0W90xkOeXRA'

const platforms: SocialPlatform[] = [
    {
        name: 'YouTube',
        url: agentProfile.socialLinks.youtube,
        icon: YouTubeIcon,
        handle: '@pmanningtnrealtor',
        color: '#FF0000',
    },
    {
        name: 'Instagram',
        url: agentProfile.socialLinks.instagram,
        icon: InstagramIcon,
        handle: '@pmanningtnrealtor',
        color: '#E4405F',
    },
    {
        name: 'Facebook',
        url: agentProfile.socialLinks.facebook,
        icon: FacebookIcon,
        handle: '/pmanningtnrealtor',
        color: '#1877F2',
    },
    {
        name: 'TikTok',
        url: agentProfile.socialLinks.tiktok,
        icon: TikTokIcon,
        handle: '@pmanningtnrealtor',
        color: '#000000',
    },
    {
        name: 'LinkedIn',
        url: agentProfile.socialLinks.linkedin,
        icon: LinkedInIcon,
        handle: '/in/pmanningtnrealtor',
        color: '#0A66C2',
    },
]

export const SocialFeed = () => {

    // Load TikTok embed script
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://www.tiktok.com/embed.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className="section-subtitle">Stay Connected</span>
                    <h2 className="section-title">Follow Patrick</h2>
                    <p className={styles.intro}>
                        Get market updates, new listings, and real estate tips across all platforms.
                    </p>
                </div>

                {/* Platform Embeds Grid */}
                <div className={styles.embedsGrid}>
                    {/* YouTube Embed */}
                    <div className={styles.embedCard}>
                        <div className={styles.embedHeader}>
                            <YouTubeIcon width={20} height={20} />
                            <span>Latest Video</span>
                        </div>
                        <div className={styles.youtubeWrapper}>
                            <iframe
                                src={`https://www.youtube.com/embed/videoseries?list=${YOUTUBE_UPLOADS_PLAYLIST}&rel=0`}
                                title="Patrick Manning Latest YouTube Videos"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                        <a
                            href={agentProfile.socialLinks.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.embedLink}
                        >
                            Watch more on YouTube →
                        </a>
                    </div>

                    {/* Facebook - Using iframe for public page */}
                    <div className={styles.embedCard}>
                        <div className={styles.embedHeader}>
                            <FacebookIcon width={20} height={20} />
                            <span>Facebook</span>
                        </div>
                        <div className={styles.facebookWrapper}>
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpmanningtnrealtor&tabs=timeline&width=500&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
                                style={{ border: 'none', overflow: 'hidden', width: '100%', height: '400px', display: 'block' }}
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                loading="lazy"
                                title="Patrick Manning Facebook Page"
                            />
                        </div>
                        <a
                            href={agentProfile.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.embedLink}
                        >
                            Follow on Facebook →
                        </a>
                    </div>

                    {/* TikTok Embed */}
                    <div className={styles.embedCard}>
                        <div className={styles.embedHeader}>
                            <TikTokIcon width={20} height={20} />
                            <span>TikTok</span>
                        </div>
                        <div className={styles.tiktokWrapper}>
                            <blockquote
                                className="tiktok-embed"
                                cite={agentProfile.socialLinks.tiktok}
                                data-unique-id="pmanningtnrealtor"
                                data-embed-type="creator"
                                style={{ maxWidth: '100%', minWidth: '288px' }}
                            >
                                <section>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={agentProfile.socialLinks.tiktok}
                                    >
                                        @pmanningtnrealtor
                                    </a>
                                </section>
                            </blockquote>
                        </div>
                        <a
                            href={agentProfile.socialLinks.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.embedLink}
                        >
                            Watch on TikTok →
                        </a>
                    </div>
                </div>

                {/* Social Links Grid */}
                <div className={styles.linksSection}>
                    <h3 className={styles.linksTitle}>All Platforms</h3>
                    <div className={styles.linksGrid}>
                        {platforms.map((platform) => (
                            <a
                                key={platform.name}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkCard}
                                style={{ '--platform-color': platform.color } as React.CSSProperties}
                            >
                                <div className={styles.linkIcon}>
                                    <platform.icon width={24} height={24} />
                                </div>
                                <div className={styles.linkInfo}>
                                    <span className={styles.linkName}>{platform.name}</span>
                                    <span className={styles.linkHandle}>{platform.handle}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
