import styles from './GoogleReviews.module.css'

interface Review {
  date: string
  author: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    date: '10/17/22',
    author: 'Hilary Hollingsworth',
    rating: 5,
    text: "From a lender's point of view, Patrick has been a delight to work with on several homes! He makes himself available to my calls and texts and works diligently for his buyers. Thank you Patrick for all you do to make our closings successful!!"
  },
  {
    date: '9/22/22',
    author: 'Brandon Korthuis',
    rating: 5,
    text: "Pat is exceptional and one of the best in the business. He walked alongside my wife and I during the whole process and really made us feel like family. Super knowledgeable and works very hard to make sure that you are satisfied and taken care of throughout the whole process. Thanks Pat!!!"
  },
  {
    date: '9/21/22',
    author: 'George Burt',
    rating: 5,
    text: "Patrick was our agent through the purchase of our home with John Maher Builders in the Brixworth Seven Development. Throughout the construction process, Patrick was very helpful and supportive with answering all of our questions while showing enthusiasm and excitement along side us. We visited our house almost weekly though the process, and he was always there with a smile on his face, and an update on how things were progressing."
  },
  {
    date: '9/20/22',
    author: 'David Gatheridge',
    rating: 5,
    text: "Patrick was absolutely the easiest agent I've ever worked with. He is straight with you, knows his stuff, and is willing to go to the builder if there was anything out of the ordinary that we desired. John Maher Builders are exceptional in quality and professionalism, and exceeded our expectations. I would buy/build again with JMB and Patrick, for sure! Love our new home! David G"
  },
  {
    date: '9/20/22',
    author: 'Fred G. Hess',
    rating: 5,
    text: "Your help was Priceless Patrick, thank you for all you did for us."
  },
  {
    date: '9/20/22',
    author: 'William Dade',
    rating: 5,
    text: "Working with Patrick on a our new home. He is amazing I would highly recommend giving him a call. You are going to love working with him."
  },
  {
    date: '5/3/21',
    author: 'ryan butler',
    rating: 5,
    text: "Very professional and knows his stuff! Would recommend for sure."
  }
]

export const GoogleReviews = () => {
  return (
    <section className={styles.reviewsSection} aria-labelledby="google-reviews-heading">
      <div className={styles.reviewsContainer}>
        <div className={styles.reviewsHeader}>
          <h2 id="google-reviews-heading" className={styles.reviewsTitle}>
            What Clients Say
          </h2>
        </div>
        <div className={styles.reviewsCarousel}>
          <div className={styles.reviewsTrack}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={styles.star}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.reviewFooter}>
                  <div className={styles.reviewAuthor}>{review.author}</div>
                  <div className={styles.reviewDate}>{review.date}</div>
                </div>

              </div>
            ))}
            {/* Duplicate for infinite scroll effect */}
            {reviews.map((review, index) => (
              <div key={`dup-${index}`} className={styles.reviewCard} aria-hidden="true">
                <div className={styles.reviewStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={styles.star}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.reviewFooter}>
                  <div className={styles.reviewAuthor}>{review.author}</div>
                  <div className={styles.reviewDate}>{review.date}</div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
