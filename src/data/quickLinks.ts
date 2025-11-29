import type { IconName } from '../components/icons/Icons'

export interface QuickLink {
  id: string
  title: string
  description: string
  href: string
  icon?: IconName
}

export const quickLinks: QuickLink[] = [
  {
    id: 'browse-listings',
    title: 'Browse Listings',
    description: 'Search available homes by budget, school district, or commute time.',
    href: '/buy',
    icon: 'search',
  },
  {
    id: 'sell-value',
    title: 'Value My Property',
    description: 'Get a no-pressure home value review with simple next steps.',
    href: '/sell/valuation',
    icon: 'chart',
  },
  {
    id: 'sold-listings',
    title: 'Recently Sold Homes',
    description: 'See the mix of starter homes, mini-farms, and move-up properties we\'ve closed.',
    href: '/buy/sold',
    icon: 'home',
  },
  {
    id: 'full-service',
    title: 'Need Help Fast?',
    description: 'Friendly guidance for first-time buyers, VA loans, relocations, and more.',
    href: '/about#services',
    icon: 'handshake',
  },
]
