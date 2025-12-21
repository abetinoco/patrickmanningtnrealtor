import { useParams, Link } from 'react-router-dom'
import { Seo } from '../../components/seo/Seo'
import { defaultMeta } from '../../seo/metaDefaults'
import { PageHeader } from '../../components/shared/PageHeader'
import { getNeighborhoodBySlug, neighborhoods } from '../../data/neighborhoods'
import { agentProfile } from '../../data/agent'
import styles from './AreaGuide.module.css'
import homeStyles from '../Home.module.css'

const AreaGuide = () => {
    const { slug } = useParams<{ slug: string }>()
    const area = slug ? getNeighborhoodBySlug(slug) : undefined

    if (!area) {
        return (
            <div className={styles.notFound}>
                <h1>Area Not Found</h1>
                <p>The area you're looking for doesn't exist.</p>
                <Link to="/areas">View All Areas</Link>
            </div>
        )
    }

    return (
        <div>
            <Seo
                title={`${area.name} Real Estate Guide | Patrick Manning`}
                description={`${area.tagline}. ${area.description.substring(0, 150)}...`}
                openGraph={defaultMeta.openGraph}
                canonical={`https://patrickmanningrealtor.com/areas/${area.slug}`}
            />

            <PageHeader
                kicker="Area Guide"
                title={area.name}
                subtitle={area.tagline}
                backgroundImage={area.image || '/media/hero-luxury-residence.jpg'}
                ctaButton={{ label: 'View Homes', href: '/buy' }}
            />

            {/* Quick Stats */}
            <section className={styles.statsSection}>
                <div className={styles.statsContainer}>
                    <div className={styles.statCard}>
                        <span className={styles.statValue}>{area.medianPrice}</span>
                        <span className={styles.statLabel}>Median Price</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statValue}>{area.schoolRating}</span>
                        <span className={styles.statLabel}>School Rating</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statValue}>{area.commuteToNashville}</span>
                        <span className={styles.statLabel}>To Nashville</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statValue}>{area.priceRange}</span>
                        <span className={styles.statLabel}>Price Range</span>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.overviewSection}>
                <div className={styles.container}>
                    <div className="section-subtitle">Overview</div>
                    <h2 className="section-title">About {area.name}</h2>
                    <p className={styles.description}>{area.description}</p>

                    <div className={styles.lifestyleTags}>
                        {area.lifestyle.map(tag => (
                            <span key={tag} className={styles.lifestyleTag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Areas */}
            <section className={styles.areasSection}>
                <div className={styles.container}>
                    <div className="section-subtitle">Neighborhoods</div>
                    <h2 className="section-title">Popular Areas in {area.name}</h2>
                    <div className={styles.areasList}>
                        {area.popularAreas.map((areaItem, index) => (
                            <div key={index} className={styles.areaItem}>
                                <span className={styles.areaNumber}>{(index + 1).toString().padStart(2, '0')}</span>
                                <span className={styles.areaText}>{areaItem}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className={styles.highlightsSection}>
                <div className={styles.container}>
                    <div className="section-subtitle">Why {area.name}?</div>
                    <h2 className="section-title">Local Highlights</h2>
                    <div className={styles.highlightsList}>
                        {area.highlights.map((highlight, index) => (
                            <div key={index} className={styles.highlightItem}>
                                <span className={styles.highlightIcon}>✓</span>
                                <span>{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Areas */}
            <section className={styles.otherAreasSection}>
                <div className={styles.container}>
                    <div className="section-subtitle">Explore More</div>
                    <h2 className="section-title">Other Areas We Serve</h2>
                    <div className={styles.otherAreasGrid}>
                        {neighborhoods.filter(n => n.slug !== area.slug).map(otherArea => (
                            <Link key={otherArea.slug} to={`/areas/${otherArea.slug}`} className={styles.otherAreaCard}>
                                <h3 className={styles.otherAreaName}>{otherArea.name}</h3>
                                <p className={styles.otherAreaTagline}>{otherArea.tagline}</p>
                                <span className={styles.otherAreaPrice}>{otherArea.medianPrice} median</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={homeStyles.homeCtaSection} aria-labelledby="area-cta-heading">
                <div className={homeStyles.homeCtaInner}>
                    <div className={homeStyles.homeCtaPanel}>
                        <div className={homeStyles.homeCtaContent}>
                            <div>
                                <div className="section-subtitle">Ready to Explore?</div>
                                <h2 id="area-cta-heading" className="section-title">
                                    Find Your Home in {area.name}
                                </h2>
                                <p className={homeStyles.homeCtaCopy}>
                                    Patrick knows {area.name} inside and out. Let's talk about the neighborhoods that fit your lifestyle, commute, and goals.
                                </p>
                            </div>
                            <Link to="/contact" className={homeStyles.homeCtaButton}>
                                Schedule a Consultation
                            </Link>
                        </div>
                        <div className={homeStyles.homeCtaProfile}>
                            <div className={homeStyles.homeCtaPortrait}>
                                <img src="/media/patrick.png" alt="Patrick Manning" loading="lazy" />
                                <span className={homeStyles.homeCtaPortraitGlow} aria-hidden="true" />
                            </div>
                            <div className={homeStyles.homeCtaProfileMeta}>
                                <span className={homeStyles.homeCtaProfileTag}>Real Broker, LLC</span>
                                <span className={homeStyles.homeCtaProfileName}>Patrick Manning</span>
                                <span className={homeStyles.homeCtaProfileRole}>Real Estate Advisor</span>
                                <a className={homeStyles.homeCtaProfileLink} href={`tel:${agentProfile.phone.replace(/[^\d+]/g, '')}`}>
                                    Call or Text {agentProfile.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AreaGuide
