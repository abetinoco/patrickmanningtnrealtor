export interface Testimonial {
  id: string
  clientName: string
  location: string
  quote: string
  result: string
}

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
