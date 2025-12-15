import { googleReviews } from '../../data/testimonials'
import styles from './GoogleReviewsCarousel.module.css'

export const GoogleReviewsCarousel = () => {
  return (
    <section className={styles.section} aria-labelledby="google-reviews-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="google-reviews-heading" className={styles.title}>
            Client Reviews
          </h2>
          <div className={styles.rating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={styles.star} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className={styles.ratingText}>5.0 on Google</span>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {googleReviews.map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewStars}>
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className={styles.reviewStar} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.reviewAuthor}>
                  <span className={styles.authorName}>{review.author}</span>
                  <span className={styles.platform}>{review.platform}</span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {googleReviews.map((review) => (
              <div key={`dup-${review.id}`} className={styles.reviewCard} aria-hidden="true">
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewStars}>
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className={styles.reviewStar} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.reviewAuthor}>
                  <span className={styles.authorName}>{review.author}</span>
                  <span className={styles.platform}>{review.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
