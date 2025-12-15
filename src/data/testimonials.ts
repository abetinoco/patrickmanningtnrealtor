export interface Testimonial {
  id: string
  clientName: string
  location: string
  quote: string
  result: string
}

export interface GoogleReview {
  id: string
  author: string
  date: string
  rating: number
  text: string
  platform: string
}

export const googleReviews: GoogleReview[] = [
  {
    id: 'hilary-hollingsworth',
    author: 'Hilary Hollingsworth',
    date: '10/17/22',
    rating: 5,
    platform: 'Google Review',
    text: "From a lender's point of view, Patrick has been a delight to work with on several homes! He makes himself available to my calls and texts and works diligently for his buyers. Thank you Patrick for all you do to make our closings successful!!",
  },
  {
    id: 'brandon-korthuis',
    author: 'Brandon Korthuis',
    date: '9/22/22',
    rating: 5,
    platform: 'Google Review',
    text: 'Pat is exceptional and one of the best in the business. He walked alongside my wife and I during the whole process and really made us feel like family. Super knowledgeable and works very hard to make sure that you are satisfied and taken care of throughout the whole process. Thanks Pat!!!',
  },
  {
    id: 'george-burt',
    author: 'George Burt',
    date: '9/21/22',
    rating: 5,
    platform: 'Google Review',
    text: 'Patrick was our agent through the purchase of our home with John Maher Builders in the Brixworth Seven Development. Throughout the construction process, Patrick was very helpful and supportive with answering all of our questions while showing enthusiasm and excitement along side us. We visited our house almost weekly though the process, and he was always there with a smile on his face, and an update on how things were progressing.',
  },
  {
    id: 'david-gatheridge',
    author: 'David Gatheridge',
    date: '9/20/22',
    rating: 5,
    platform: 'Google Review',
    text: "Patrick was absolutely the easiest agent I've ever worked with. He is straight with you, knows his stuff, and is willing to go to the builder if there was anything out of the ordinary that we desired. John Maher Builders are exceptional in quality and professionalism, and exceeded our expectations. I would buy/build again with JMB and Patrick, for sure! Love our new home! David G",
  },
  {
    id: 'fred-hess',
    author: 'Fred G. Hess',
    date: '9/20/22',
    rating: 5,
    platform: 'Google Review',
    text: 'Your help was Priceless Patrick, thank you for all you did for us.',
  },
  {
    id: 'william-dade',
    author: 'William Dade',
    date: '9/20/22',
    rating: 5,
    platform: 'Google Review',
    text: 'Working with Patrick on a our new home. He is amazing I would highly recommend giving him a call. You are going to love working with him.',
  },
  {
    id: 'ryan-butler',
    author: 'ryan butler',
    date: '5/3/21',
    rating: 5,
    platform: 'Google Review',
    text: 'Very professional and knows his stuff! Would recommend for sure.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'first-time-buyers',
    clientName: 'Maya & Chris',
    location: 'Spring Hill, TN',
    quote:
      'As first-time buyers using an FHA loan, we had a million questions. Patrick slowed everything down, explained the paperwork in plain English, and found a home in our price range close to work and daycare.',
    result: 'Closed with seller credits toward repairs and a flexible move-in date.',
  },
  {
    id: 'va-loan',
    clientName: 'Sgt. & Mrs. Walters',
    location: 'Clarksville, TN',
    quote:
      'Patrick knew the VA process inside and out. He coordinated inspections while we were still stationed in Kentucky and negotiated repairs so we could move in right after closing.',
    result: 'Secured a VA purchase with zero down and full seller-paid closing costs.',
  },
  {
    id: 'move-up-sellers',
    clientName: 'The Rivera Family',
    location: 'Bowling Green, KY',
    quote:
      'We needed to sell our starter home and buy something bigger for our teens. Patrick mapped out the timing, connected us with local contractors to touch up the house, and kept both closings on track.',
    result: 'Sold over list price and moved into a larger home the same week.',
  },
]
