export interface Testimonial {
  id: string
  clientName: string
  location: string
  quote: string
  result: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'relocation-executive',
    clientName: 'R. Anderson',
    location: 'Franklin, TN',
    quote:
      'Patrick navigated every step of our multi-state relocation with precision. From private previews to negotiations, his concierge approach saved us time and ensured we landed the right estate without compromise.',
    result: 'Secured off-market property under appraisal with expedited closing.',
  },
  {
    id: 'new-construction',
    clientName: 'The Mitchell Family',
    location: 'Thompsons Station, TN',
    quote:
      'We were overwhelmed building from the ground up until Patrick stepped in. His construction knowledge, vendor access, and weekly progress briefings made the process enjoyable and transparent.',
    result: 'Delivered custom new-build with curated design selections and builder credits.',
  },
  {
    id: 'luxury-sale',
    clientName: 'S. Ramirez',
    location: 'Brentwood, TN',
    quote:
      'Patrick’s marketing playbook sold our luxury home in six days with multiple offers. The videography, staging, and international syndication elevated our property above competing listings.',
    result: 'Closed 7% over asking with preferred terms and leaseback flexibility.',
  },
]
