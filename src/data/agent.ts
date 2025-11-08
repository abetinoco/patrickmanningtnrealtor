export const agentProfile = {
  name: 'Patrick Manning',
  designation: 'Luxury Real Estate Advisor',
  tagline: 'Work Hard. Be Kind. Exclusive Agent for You',
  phone: '+1 615-302-8000',
  email: 'pmanningtnrealtor@gmail.com',
  brokerage: {
    name: 'Real Broker, LLC',
    officeTennessee: '7121 Regal Lane, Suite 215, Knoxville, TN 37918',
    officeKentucky: '406 Blankenbaker Parkway, Suite C2, Louisville, KY 40243',
    managingBrokers: [
      { name: 'Tina Baker', phone: '+1 844-591-7325', email: 'kybic1@therealbrokerage.com' },
      { name: 'Andrew Pruitt', phone: '+1 502-717-1685' },
    ],
    licenseStatement: 'Licensed in Tennessee and Kentucky | TN License IDs: 341965 & 291536',
  },
  serviceAreas: [
    'Middle Tennessee',
    'Greater Nashville Area',
    'Williamson County',
    'Maury County',
    'Southern Kentucky Border Communities',
  ],
  valueMetrics: [
    { label: 'Gross Sales Volume Since 2018', value: '$60M+' },
    { label: 'Families Relocated', value: '125+' },
    { label: 'Years in Real Estate', value: '10+' },
    { label: 'Multi-Market Expertise', value: 'TN & KY Licensed' },
  ],
  socialLinks: {
    facebook: 'https://www.facebook.com/pmanningtnrealtor/',
    instagram: 'https://www.instagram.com/pmanningtnrealtor',
    linkedin: 'https://www.linkedin.com/in/pmanningtnrealtor/',
    tiktok: 'https://www.tiktok.com/@pmanningtnrealtor',
    youtube: 'https://www.youtube.com/@pmanningtnrealtor',
    realtor: 'https://www.realtor.com/realestateagents/5996385d293c320011666ad1',
  },
  hero: {
    headline: 'Curated Real Estate Strategies for Middle Tennessee Luxury Buyers & Sellers',
    subheadline:
      'A concierge-level advisory delivering trusted guidance, market intelligence, and discreet representation for discerning clients relocating to Tennessee.',
    primaryCta: { label: 'Schedule a Private Consultation', href: '/contact' },
    secondaryCta: { label: 'Explore Properties', href: '/buy' },
    backgroundVideo: '',
    backgroundImage: '/media/hero-luxury-residence.jpg',
    overlayTone: 0.55,
  },
  elevatorPitch:
    'Patrick Manning pairs Wall Street diligence with Southern hospitality to navigate high-net-worth clients through competitive Tennessee markets, from new construction builds to legacy estates.',
  differentiators: [
    'Concierge-level service that anticipates every detail of your transaction',
    'Proven negotiation record across both Tennessee and Kentucky luxury markets',
    'Relocation playbooks tailored for executives and multi-state households',
  ],
}

export type AgentProfile = typeof agentProfile
