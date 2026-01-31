export const agentProfile = {
  name: 'Patrick Manning',
  designation: 'Realtor & Home Lifestyle Expert',
  tagline: 'Realtor & Home Lifestyle Expert',
  phone: '+1 615-302-8000',
  email: 'pmanningtnrealtor@gmail.com',
  brokerage: {
    name: 'Real Broker, LLC',
    officeTennessee: '1 Music Cir North, Suite 318, Nashville, TN 37203',
    officeKentucky: '222 East Witherspoon Street, 1st Floor, Louisville, KY 40202',
    tennesseeLicenseNumber: '266923',
    tennesseeOfficeCode: 'RBRO01',
    managingBrokers: [
      {
        name: 'Carrie Anne Walters',
        title: 'Managing Broker – Tennessee',
        phone: '+1 844-591-7325',
        email: 'tn.nashvillebroker@therealbrokerage.com',
        region: 'Tennessee',
      },
      {
        name: 'Andrew Pruitt',
        title: 'Designated Broker – Kentucky',
        phone: '+1 502-500-9000',
        email: 'kybroker@therealbrokerage.com',
        region: 'Kentucky',
      },
    ],
    teamEmail: 'kybroker@therealbrokerage.com',
    teamPhone: '+1 502-500-9000',
    licenseStatement: 'Licensed in Tennessee and Kentucky | TN License IDs: 341965 & 291536',
  },
  serviceAreas: [
    'Middle Tennessee',
    'Greater Nashville Area',
    'Williamson County',
    'Maury County',
    'Western Kentucky Border Communities',
  ],
  valueMetrics: [
    { label: 'Gross Sales Volume Since 2018', value: '$60M+' },
    { label: 'Families Relocated', value: '125+' },
    { label: 'Deals Closed', value: '60+' },
    { label: 'Years in Real Estate', value: '10+' },
    { label: 'Multi-Market Expertise', value: 'TN & KY Licensed' },
  ],
  socialLinks: {
    facebook: 'https://www.facebook.com/pmanningtnrealtor/',
    instagram: 'https://www.instagram.com/pmanningtnrealtor',
    linkedin: 'https://www.linkedin.com/in/pmanningtnrealtor/',
    tiktok: 'https://www.tiktok.com/@pmanningtnrealtor',
    youtube: 'https://www.youtube.com/@pmanningtnrealtor',
  },
  hero: {
    headline: 'Realtor & Home Lifestyle Expert',
    subheadline:
      'Patrick Manning is a Realtor and Home Lifestyle Expert with Real Broker, matching clients to homes that reflect their daily routines, commutes, and community vibe while drawing on $60M+ in sales and 125 successful moves since 2018.',
    primaryCta: { label: 'Book a Quick Call', href: '/contact' },
    secondaryCta: { label: 'See Available Homes', href: '/buy' },
    backgroundVideo: '',
    backgroundImage: '/media/hero-luxury-residence.jpg',
    overlayTone: 0.55,
  },
  lifestyleMessaging: {
    intro:
      'Patrick Manning is a Realtor and Home Lifestyle Expert with Real Broker, helping clients in Middle Tennessee and Western Kentucky find homes that fit the way they actually live. He has closed over $60 million in sales since 2018 and guided more than 125 families through moves, new builds, and fresh starts.',
    lifestyle:
      'Patrick blends market expertise with a lifestyle-first lens—focusing on daily routines, community vibe, commute, schools, and amenities so your next home lines up with real life, not just a wish list. With deep experience in Williamson, Maury, and Western Kentucky communities, he connects clients to neighborhoods that match their season of life and long-term goals.',
    relocation:
      'After 26 years in New York and 22 in Chicagoland, Patrick understands relocation, change, and what it takes to feel “at home” quickly. His negotiation skills, clear communication, and modern, content-driven approach make every move straightforward, informed, and genuinely personalized.',
  },
  elevatorPitch:
    'Patrick blends market expertise with a lifestyle-first lens—matching you with neighborhoods across Williamson, Maury, and Western Kentucky that fit your daily rhythm, commute, and goals.',
  differentiators: [
    'Lifestyle-first guidance that prioritizes commute, schools, routines, and amenities',
    'Proven negotiation record with $60M+ closed since 2018 and 125 relocations',
    'Personal experience relocating across major markets, so every step feels clear and supported',
  ],
}

export type AgentProfile = typeof agentProfile
