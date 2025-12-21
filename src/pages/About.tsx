import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { agentProfile } from '../data/agent'
import { Link } from 'react-router-dom'
import {
  ArrowUpRightIcon,
  PhoneIcon,
  MailIcon,
} from '../components/icons/Icons'
import { GoogleReviews } from '../components/testimonials/GoogleReviews'
import { SocialFeed } from '../components/social/SocialFeed'
import styles from './About.module.css'
import homeStyles from './Home.module.css'

const About = () => (
  <div>
    <Seo
      title="About Patrick Manning | Real Broker, LLC"
      description="Patrick Manning is a Realtor and Home Lifestyle Expert pairing $60M+ in results with a lifestyle-first lens across Middle Tennessee and Western Kentucky."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/about"
    />
    <PageHeader
      kicker="About"
      title="Meet Patrick Manning"
      subtitle={agentProfile.lifestyleMessaging.intro}
      profileImage="/media/patrick.png"
    />

    {/* Quick Contact Cards */}
    <section className={styles.quickContactSection}>
      <div className={styles.socialContainer}>
        <div className={styles.heroContactGrid}>
          <a href={`tel:${agentProfile.phone.replace(/[^\d+]/g, '')}`} className={styles.heroCard}>
            <div className={styles.heroIcon}>
              <PhoneIcon width={20} height={20} />
            </div>
            <div className={styles.heroContent}>
              <div className={styles.heroLabel}>Phone</div>
              <div className={styles.heroValue}>{agentProfile.phone}</div>
            </div>
          </a>

          <a href={`mailto:${agentProfile.email}`} className={styles.heroCard}>
            <div className={styles.heroIcon}>
              <MailIcon width={20} height={20} />
            </div>
            <div className={styles.heroContent}>
              <div className={styles.heroLabel}>Email</div>
              <div className={styles.heroValue}>{agentProfile.email}</div>
            </div>
          </a>
        </div>
      </div>
    </section>

    {/* Social Media Embeds */}
    <SocialFeed />

    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <article className={styles.panel}>
          <h2 className="section-title">Credentials & Philosophy</h2>
          <p>{agentProfile.elevatorPitch}</p>
          <ul className={styles.list}>
            {agentProfile.differentiators.map((diff) => (
              <li key={diff}>{diff}</li>
            ))}
          </ul>
        </article>

        <article className={styles.panel}>
          <h2 className="section-title">Service Footprint</h2>
          <ul className={styles.list}>
            {agentProfile.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p>
            {agentProfile.brokerage.name}
            <br />
            {agentProfile.brokerage.licenseStatement}
          </p>
        </article>

      </div>
    </section>

    <section className={styles.advocacySection} aria-labelledby="advocacy-heading">
      <div className={styles.advocacyInner}>
        <div className={styles.advocacyImage}>
          <img
            src="/media/change.jpg"
            alt="Patrick Manning supporting his Change.org petition"
            loading="lazy"
          />
        </div>
        <div className={styles.advocacyContent}>
          <p className={styles.advocacyTag}>Community Advocacy</p>
          <h2 id="advocacy-heading">Give users control over social media algorithms</h2>
          <p>
            Patrick extends his client-first mindset into the digital world by championing a Change.org petition
            that calls for transparency and user choice inside the feeds we all rely on to make decisions. He believes
            homeowners, entrepreneurs, and families should be able to tune algorithms the same way they tailor their
            real estate plans.
          </p>
          <ul className={styles.advocacyList}>
            <li>Pushes for clear controls so communities decide what content reaches them.</li>
            <li>Supports accountability from major platforms and policymakers on ranking systems.</li>
            <li>Aligns with Patrick's mission to help clients make informed, confident moves.</li>
          </ul>
          <a
            href="https://www.change.org/p/give-users-control-over-social-media-algorithms?recruiter=1391582840&recruited_by_id=a9a973f0-a402-11f0-a3c4-c5a3dc6ae203&utm_source=share_petition&utm_campaign=share_petition&utm_medium=copylink&utm_content=cl_sharecopy_490822308_en-US%3A7"
            target="_blank"
            rel="noreferrer"
            className={styles.advocacyButton}
          >
            Sign the Change.org Petition
            <ArrowUpRightIcon width={18} height={18} aria-hidden="true" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />
          </a>
        </div>
      </div>
    </section>

    {/* Google Reviews Carousel */}
    <GoogleReviews />

    {/* Career Milestones Section */}
    <section className={styles.milestonesSection}>
      <div className={styles.container}>
        <div className="section-subtitle">Track Record</div>
        <h2 className="section-title">A Decade of Excellence in Real Estate</h2>
        <p className={styles.intro}>
          Since 2018, Patrick has built a reputation for delivering exceptional results across Middle Tennessee and
          Southern Kentucky. His client-first approach and market knowledge have helped buyers, sellers, and
          relocating families achieve their real estate goals.
        </p>
        <div className={styles.metricsGrid}>
          {agentProfile.valueMetrics.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Background & Expertise Section */}
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        <div className="section-subtitle">Background & Expertise</div>
        <h2 className="section-title">A Unique Perspective Shaped by Three Regions</h2>
        <p className={styles.intro}>
          Patrick's real estate philosophy is informed by 26 years in New York and 22 years in Chicagoland
          before establishing roots in Middle Tennessee. This multi-market perspective allows him to serve
          clients from all backgrounds with professionalism and local expertise.
        </p>
        <div className={styles.expertiseGrid}>
          <article className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>New Construction Specialist</h3>
            <p className={styles.expertiseDescription}>
              Patrick guides clients through every phase of new construction—from design selections and builder
              negotiations to timeline management and quality inspections. His deep relationships with top builders
              in Williamson and Maury Counties ensure priority access to coveted lots and floor plans.
            </p>
          </article>
          <article className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>Relocation Concierge</h3>
            <p className={styles.expertiseDescription}>
              Having successfully relocated over 125 families, Patrick provides comprehensive transition support—
              from school district research and neighborhood tours to contractor referrals and lifestyle integration.
              His team-oriented approach ensures seamless moves from concept to completion.
            </p>
          </article>
          <article className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>Market Knowledge</h3>
            <p className={styles.expertiseDescription}>
              Patrick's portfolio includes homes across Greater Nashville,
              Franklin, Brentwood, and Southern Kentucky. He combines deep market analytics with professional
              representation to secure off-market opportunities and favorable transaction terms.
            </p>
          </article>
          <article className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>Strategic Negotiation</h3>
            <p className={styles.expertiseDescription}>
              With a foundation in analytical rigor and client advocacy, Patrick creates winning offers
              that protect investments while maintaining competitive advantage. His proven negotiation record
              spans both Tennessee and Kentucky markets.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className={homeStyles.homeCtaSection} aria-labelledby="about-cta-heading">
      <div className={homeStyles.homeCtaInner}>
        <div className={homeStyles.homeCtaPanel}>
          <div className={homeStyles.homeCtaContent}>
            <div>
              <div className="section-subtitle">Next Step</div>
              <h2 id="about-cta-heading" className="section-title">
                Ready to plan your next move?
              </h2>
              <p className={homeStyles.homeCtaCopy}>
                Share how you live day to day—routines, commute, schools, and amenities—and Patrick will curate neighborhoods in
                Williamson, Maury, and Western Kentucky that match your season of life and next move.
              </p>
            </div>
            <Link to="/contact" className={homeStyles.homeCtaButton}>
              Get Started
            </Link>
          </div>
          <div className={homeStyles.homeCtaProfile}>
            <div className={homeStyles.homeCtaPortrait}>
              <img src="/media/patrick.png" alt="Patrick Manning" loading="lazy" />
              <span className={homeStyles.homeCtaPortraitGlow} aria-hidden="true" />
            </div>
            <div className={homeStyles.homeCtaProfileMeta}>
              <span className={homeStyles.homeCtaProfileTag}>{agentProfile.brokerage.name}</span>
              <span className={homeStyles.homeCtaProfileName}>{agentProfile.name}</span>
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

export default About
