export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Buy', path: '/buy' },
  { label: 'Sell', path: '/sell' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
