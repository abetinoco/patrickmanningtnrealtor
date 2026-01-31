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
    description: '',
    bullets: [
      'Dedicated representation tailored to your needs, budget, and timeline',
      'Market analysis, contract guidance, and skilled negotiation',
      'Closing support and connections to trusted local resources',
    ],
  },
  {
    id: 'seller-services',
    name: 'Seller Representation',
    description: '',
    bullets: [
      'Strategic marketing and pricing to attract qualified buyers',
      'Professional photography, video tours, and multi-platform marketing',
      'Offer review, negotiation support, and closing coordination',
    ],
  },
  {
    id: 'investment-services',
    name: 'Investment Properties',
    description: '',
    bullets: [
      'Guidance for rental portfolios and appreciation properties',
      'Market analysis and rental income projections',
      'Connections to financing, legal, and property management resources',
    ],
  },
]

export interface ProcessStep {
  id: string
  title: string
  description: string[]
}

export const advisoryProcess: ProcessStep[] = [
  {
    id: 'discover',
    title: 'Discovery & Planning',
    description: [
      'Initial consultation to understand your goals, timeline, and budget',
      'Create a personalized plan for your real estate journey',
    ],
  },
  {
    id: 'curate',
    title: 'Search & Tour',
    description: [
      'Using local market knowledge and MLS access to find properties that fit your needs',
      'Arrange convenient showings',
    ],
  },
  {
    id: 'negotiate',
    title: 'Offer & Negotiate',
    description: [
      'Skilled negotiation',
      'Contract guidance',
      'Coordination of inspections to protect your interests',
    ],
  },
  {
    id: 'concierge',
    title: 'Close & Support',
    description: [
      'Closing coordination',
      'Moving resources',
      'Continued guidance to ensure a smooth transition to your new home',
    ],
  },
]
