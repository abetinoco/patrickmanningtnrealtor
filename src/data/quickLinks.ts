export interface QuickLink {
  id: string
  title: string
  description: string
  href: string
}

export const quickLinks: QuickLink[] = [
  {
    id: 'browse-listings',
    title: 'Browse Listings',
    description: 'Search hand-selected homes that define Middle Tennessee luxury living.',
    href: '/buy',
  },
  {
    id: 'sell-value',
    title: 'Value My Property',
    description: 'Receive a valuation strategy session tailored to your property and timing.',
    href: '/sell/valuation',
  },
  {
    id: 'sold-listings',
    title: 'Recently Sold Homes',
    description: 'Browse Patrick\'s closed transactions across Middle Tennessee\'s premier markets.',
    href: '/buy/sold',
  },
  {
    id: 'concierge-services',
    title: 'Concierge Services',
    description: 'Experience the white-glove advisory that keeps your goals front and center.',
    href: '/about#services',
  },
]
