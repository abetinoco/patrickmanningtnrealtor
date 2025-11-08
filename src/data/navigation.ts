export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Buy',
    path: '/buy',
    children: [
      { label: 'Sold Listings', path: '/buy/sold' },
    ],
  },
  { label: 'Sell', path: '/sell' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
