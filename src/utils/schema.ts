import { agentProfile } from '../data/agent'

export const buildAgentSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: agentProfile.name,
  description:
    'Luxury real estate advisor specializing in Middle Tennessee relocations, executive homes, and concierge-level selling strategies.',
  telephone: agentProfile.phone,
  email: agentProfile.email,
  areaServed: agentProfile.serviceAreas,
  url: 'https://patrickmanningrealtor.com',
  sameAs: Object.values(agentProfile.socialLinks),
  memberOf: {
    '@type': 'Organization',
    name: agentProfile.brokerage.name,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '125',
  },
})
