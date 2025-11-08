export interface ServiceTier {
  id: string
  name: string
  description: string
  bullets: string[]
}

export const serviceTiers: ServiceTier[] = [
  {
    id: 'concierge-buyers',
    name: 'Concierge Buyer Advisory',
    description:
      'Discreet representation and access to on-market, pre-market, and private network inventory tailored to your exact lifestyle criteria.',
    bullets: [
      'Private preview itineraries and chauffeur coordination',
      'Financial analysis, contract strategy, and negotiation leadership',
      'Post-closing concierge, including relocation vendor orchestration',
    ],
  },
  {
    id: 'signature-sellers',
    name: 'Signature Listing Experience',
    description:
      'White-glove listing campaign engineered to command premium offers through elevated storytelling and targeted exposure.',
    bullets: [
      'Architectural photography, film-grade videography, and editorial copy',
      'Global syndication and luxury network amplification',
      'Offer management, buyer vetting, and bespoke showing protocols',
    ],
  },
  {
    id: 'portfolio-investors',
    name: 'Portfolio & Investment Strategy',
    description:
      'Data-led acquisition and disposition strategy for portfolio growth across Middle Tennessee and Southern Kentucky corridors.',
    bullets: [
      'Hold-sell analyses informed by rental absorption and cap rates',
      'Collaboration with tax, legal, and wealth advisors',
      'Asset repositioning roadmaps and construction oversight',
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
    title: 'Discovery & Alignment',
    description:
      'A strategy session to define objectives, decision-makers, timelines, and financial parameters that shape your bespoke advisory roadmap.',
  },
  {
    id: 'curate',
    title: 'Curate & Preview',
    description:
      'Leveraging private networks, data modeling, and on-the-ground scouting to deliver tightly vetted opportunities before they hit the broader market.',
  },
  {
    id: 'negotiate',
    title: 'Negotiate & Execute',
    description:
      'Expert negotiation, contract management, and due diligence coordination that secure wins while de-risking each stage of the transaction.',
  },
  {
    id: 'concierge',
    title: 'Concierge Transition',
    description:
      'Closing logistics, relocation orchestration, and ongoing market intelligence designed to protect your investment long after the ink dries.',
  },
]
