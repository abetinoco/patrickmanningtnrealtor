export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

export const formatNumber = (value: number) =>
  new Intl.NumberFormat('en-US').format(value)

export const formatStatus = (status: string) => {
  switch (status) {
    case 'active':
      return 'Active'
    case 'under-contract':
      return 'Under Contract'
    case 'sold':
      return 'Sold'
    default:
      return status
  }
}

export const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
