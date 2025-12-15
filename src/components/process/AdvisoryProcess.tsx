import { useRef, useState, useEffect } from 'react'
import { advisoryProcess } from '../../data/services'
import styles from './AdvisoryProcess.module.css'

export const AdvisoryProcess = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
    trackRef.current.style.cursor = 'grabbing'
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      if (trackRef.current) {
        trackRef.current.style.cursor = 'grab'
      }
    }
  }

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return
    const x = e.touches[0].pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  // Add scroll hint animation
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Subtle scroll hint on load
    const timeout = setTimeout(() => {
      track.scrollTo({ left: 60, behavior: 'smooth' })
      setTimeout(() => {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      }, 400)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className={styles.section} aria-labelledby="advisory-process-heading">
      <div className="container">
        <div className="section-subtitle">How We Operate</div>
        <h2 id="advisory-process-heading" className="section-title">
          A Process Built Around Your Objectives
        </h2>
      </div>

      <div
        className={styles.timelineWrapper}
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className={styles.timelineTrack}>
          {/* Timeline connector line */}
          <div className={styles.timelineLine} aria-hidden="true" />

          {advisoryProcess.map((step, index) => (
            <article key={step.id} className={styles.step}>
              {/* Step node on timeline */}
              <div className={styles.stepNode}>
                <span className={styles.stepNumber}>0{index + 1}</span>
              </div>

              {/* Step content card */}
              <div className={styles.stepCard}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
