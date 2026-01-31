import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { agentProfile } from '../data/agent'
import { Link } from 'react-router-dom'
import { ArrowUpRightIcon } from '../components/icons/Icons'
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
        <h2 className="section-title">Since 2017: Excellence in Real Estate</h2>
        <p className={styles.intro}>
          Since 2018, Patrick has built a reputation for delivering exceptional results across Middle Tennessee and
          Western Kentucky. His client-first approach and market knowledge have helped buyers, sellers, and
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
            <ul className={styles.expertiseList}>
              <li>Guides clients through every phase of new construction</li>
              <li>Design selections and builder negotiations</li>
              <li>Timeline management and quality inspections</li>
              <li>Priority access to coveted lots and floor plans</li>
            </ul>
          </article>
          <article className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>Relocation Concierge</h3>
            <ul className={styles.expertiseList}>
              <li>Successfully relocated over 125 families</li>
              <li>School district research and neighborhood tours</li>
              <li>Contractor referrals and lifestyle integration</li>
              <li>Seamless moves from concept to completion</li>
            </ul>
          </article>
          <article className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>Market Knowledge</h3>
            <ul className={styles.expertiseList}>
              <li>Portfolio includes Greater Nashville, Franklin, Brentwood</li>
              <li>Western Kentucky coverage</li>
              <li>Deep market analytics</li>
              <li>Off-market opportunities and favorable terms</li>
            </ul>
          </article>
          <article className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>Strategic Negotiation</h3>
            <ul className={styles.expertiseList}>
              <li>Foundation in analytical rigor and client advocacy</li>
              <li>Creates winning offers that protect investments</li>
              <li>Proven record across Tennessee and Kentucky</li>
            </ul>
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
