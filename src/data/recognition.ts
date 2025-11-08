export interface Recognition {
  id: string
  label: string
  description: string
}

export const recognitions: Recognition[] = [
  {
    id: 'top1',
    label: 'Top 1% Real Broker Agents (2024)',
    description: 'Recognized for production volume and client satisfaction across multi-state transactions.',
  },
  {
    id: 'relocation-certified',
    label: 'Certified Relocation Specialist',
    description: 'Trusted advisor for executive relocations with end-to-end concierge support.',
  },
  {
    id: 'luxury-home-marketing',
    label: 'Luxury Home Marketing Expertise',
    description: 'Custom film-level marketing and private network syndication that accelerate premium outcomes.',
  },
]
