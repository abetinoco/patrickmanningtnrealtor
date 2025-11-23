import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { agentProfile } from '../data/agent'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

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

        <article className={styles.panel}>
          <h2 className="section-title">Connect with Patrick</h2>
          <ul className={styles.list}>
            <li>
              Phone: <a href={`tel:${agentProfile.phone.replace(/[^\d+]/g, '')}`}>{agentProfile.phone}</a>
            </li>
            <li>
              Email: <a href={`mailto:${agentProfile.email}`}>{agentProfile.email}</a>
            </li>
            {Object.entries(agentProfile.socialLinks).map(([platform, url]) => (
              <li key={platform}>
                <a href={url} target="_blank" rel="noreferrer">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
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
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>

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

    {/* Social Media & Content Section */}
    <section className={styles.socialSection}>
      <div className={styles.container}>
        <div className="section-subtitle">Follow Along</div>
        <h2 className="section-title">Stay Connected with Patrick</h2>
        <p className={styles.intro}>
          Get the latest market insights, property tours, and real estate tips by following Patrick across social media.
        </p>
        
        <div className={styles.socialGrid}>
          {/* Instagram */}
          <div className={styles.embedCard}>
            <h3 className={styles.embedTitle}>
              <svg className={styles.platformIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </h3>
            <div className={styles.instagramEmbed}>
              <a 
                href={agentProfile.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className={styles.instagramPreview}
              >
                <div className={styles.instagramIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className={styles.instagramText}>
                  <div className={styles.instagramHandle}>@pmanningtnrealtor</div>
                  <div className={styles.instagramCta}>View latest posts →</div>
                </div>
              </a>
            </div>
          </div>

          {/* TikTok */}
          <div className={styles.embedCard}>
            <h3 className={styles.embedTitle}>
              <svg className={styles.platformIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Follow on TikTok
            </h3>
            <div className={styles.instagramEmbed}>
              <a 
                href={agentProfile.socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                className={styles.instagramPreview}
              >
                <div className={styles.instagramIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <div className={styles.instagramText}>
                  <div className={styles.instagramHandle}>@pmanningtnrealtor</div>
                  <div className={styles.instagramCta}>Watch videos →</div>
                </div>
              </a>
            </div>
          </div>

          {/* Facebook */}
          <div className={styles.embedCard}>
            <h3 className={styles.embedTitle}>
              <svg className={styles.platformIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Like on Facebook
            </h3>
            <div className={styles.instagramEmbed}>
              <a 
                href={agentProfile.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className={styles.instagramPreview}
              >
                <div className={styles.instagramIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className={styles.instagramText}>
                  <div className={styles.instagramHandle}>Patrick Manning TN Realtor</div>
                  <div className={styles.instagramCta}>View updates →</div>
                </div>
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className={styles.embedCard}>
            <h3 className={styles.embedTitle}>
              <svg className={styles.platformIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </h3>
            <div className={styles.instagramEmbed}>
            <a 
              href={agentProfile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.instagramPreview}
            >
              <div className={styles.instagramIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className={styles.instagramText}>
                <div className={styles.instagramHandle}>LinkedIn</div>
                <div className={styles.instagramCta}>Connect professionally →</div>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.ctaSection} aria-labelledby="about-cta-heading">
      <div className={styles.ctaInner}>
        <div>
          <h2 id="about-cta-heading" className={styles.ctaTitle}>
            Work with a dedicated agent for your real estate goals
          </h2>
          <p className={styles.ctaText}>
            From searching for your perfect home to negotiation and closing, Patrick provides professional support for
            buyers, sellers, and families across Tennessee and Kentucky. Let&apos;s discuss your real estate needs today.
          </p>
        </div>
        <Link to="/contact" className={styles.ctaButton}>
          Get Started Today
        </Link>
      </div>
    </section>
  </div>
)

export default About
