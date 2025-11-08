export interface MarketMetric {
  id: string
  label: string
  value: string
  change: string
  trend: 'up' | 'down' | 'steady'
  description: string
}

export const marketMetrics: MarketMetric[] = [
  {
    id: 'lcp',
    label: 'Luxury Median Price',
    value: '$1.12M',
    change: '+6.4% QoQ',
    trend: 'up',
    description: 'Driven by limited inventory inside Williamson County’s gated enclaves.',
  },
  {
    id: 'dom',
    label: 'Average Days on Market',
    value: '21 Days',
    change: '-9 days QoQ',
    trend: 'down',
    description: 'Expedited absorption for properties with dedicated home offices and outdoor living.',
  },
  {
    id: 'cash',
    label: 'Cash Purchases',
    value: '38%',
    change: '+4 pts QoQ',
    trend: 'up',
    description: 'Affluent buyers continue to leverage liquidity for negotiation control.',
  },
  {
    id: 'inventory',
    label: 'Active Executive Listings',
    value: '126',
    change: '-11% QoQ',
    trend: 'down',
    description: 'Supply tightening across luxury new construction and legacy estate segments.',
  },
]

