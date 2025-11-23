export interface ServiceTier {
  id: string
  name: string
  description: string
  bullets: string[]
}

export const serviceTiers: ServiceTier[] = [
  {
    id: 'buyer-services',
    name: 'Buyer Representation',
    description:
      'Dedicated representation and access to listings that match your needs, budget, and timeline. From first-time buyers to seasoned investors.',
    bullets: [
      'Property tours and showings tailored to your schedule',
      'Market analysis, contract guidance, and skilled negotiation',
      'Closing support and connections to trusted local resources',
    ],
  },
  {
    id: 'seller-services',
    name: 'Seller Representation',
    description:
      'Strategic marketing and pricing to attract qualified buyers and get your home sold for the best possible price.',
    bullets: [
      'Professional photography, video tours, and compelling property descriptions',
      'Multi-platform marketing to reach the widest audience of buyers',
      'Offer review, negotiation support, and organized showing coordination',
    ],
  },
  {
    id: 'investment-services',
    name: 'Investment Properties',
    description:
      'Guidance for investors looking to build rental portfolios or find properties with strong appreciation potential.',
    bullets: [
      'Market analysis and rental income projections',
      'Connections to financing, legal, and property management resources',
      'Long-term strategy and portfolio planning support',
    ],
  },
]

export interface ProcessStep {
  id: string
  title: string
  description: string
}

export const advisoryProcess: ProcessStep[] = [
  {
    id: 'discover',
    title: 'Discovery & Planning',
    description:
      'An initial consultation to understand your goals, timeline, and budget to create a personalized plan for your real estate journey.',
  },
  {
    id: 'curate',
    title: 'Search & Tour',
    description:
      'Using local market knowledge and MLS access to find properties that fit your needs and arrange convenient showings.',
  },
  {
    id: 'negotiate',
    title: 'Offer & Negotiate',
    description:
      'Skilled negotiation, contract guidance, and coordination of inspections to protect your interests throughout the transaction.',
  },
  {
    id: 'concierge',
    title: 'Close & Support',
    description:
      'Closing coordination, moving resources, and continued guidance to ensure a smooth transition to your new home.',
  },
]
