export interface BlogPost {
  id: string
  title: string
  category: 'Market Intel' | 'Relocation' | 'Investment' | 'Lifestyle'
  excerpt: string
  published: string
  author: string
  readTime: string
  heroImage: string
  heroAlt: string
  slug: string
  content: string[]
  seoDescription: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'oak-leaf-showcase',
    title: '1454 Oak Leaf Drive: Resort Living in Columbia',
    category: 'Lifestyle',
    excerpt:
      'Tour a gated Columbia retreat featuring a resort-style pool, dual offices, and seamless indoor-outdoor entertaining designed for executive living.',
    published: '2025-09-18',
    author: 'Patrick Manning',
    readTime: '4 min read',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Luxury estate with illuminated pool at twilight',
    slug: 'explore-1454-oak-leaf-drive',
    seoDescription:
      'Discover why 1454 Oak Leaf Drive offers one of Columbia’s most compelling luxury retreats with concierge amenities and private acreage.',
    content: [
      'Step inside this Columbia estate reimagined for elevated everyday living. The 4,200+ square-foot residence balances statement architecture with livable sophistication, anchored by a double-height great room that pours into a private resort backyard.',
      'Entertain effortlessly with a chef-caliber kitchen, climate-controlled wine display, and retractable glass walls that dissolve the boundaries between indoor and outdoor spaces. The resort pool, sun shelf, and covered cabana create a true destination for guests.',
      'Executive buyers gain dual home offices, a secure safe room, and whole-home automation designed for remote work with privacy. Minutes from I-65, this property preserves tranquility without sacrificing Middle Tennessee connectivity.',
    ],
  },
  {
    id: 'relocation-guide',
    title: 'Executive Relocation Playbook for Middle Tennessee',
    category: 'Relocation',
    excerpt:
      'From temporary housing to private school introductions, leverage Patrick’s concierge network to make your Tennessee relocation seamless.',
    published: '2025-07-12',
    author: 'Patrick Manning',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Family exploring a luxury home interior',
    slug: 'middle-tennessee-relocation-playbook',
    seoDescription: 'Move to Middle Tennessee with confidence using Patrick Manning’s executive relocation playbook and concierge vendor roster.',
    content: [
      'Relocation success begins before you arrive. Patrick’s team coordinates preview trips, bespoke itineraries, and private tours of executive housing, corporate campuses, and lifestyle amenities.',
      'Secure confidence in school selections, medical partnerships, and community memberships with curated introductions. Our relocation command center manages vendor schedules, inspections, and closing logistics so you can stay focused on your transition.',
      'Post-closing, clients receive our Newcomer Concierge Kit featuring vetted service providers, lifestyle recommendations, and quarterly market intelligence.',
    ],
  },
  {
    id: 'market-snapshot',
    title: 'Q3 Market Snapshot: Williamson & Maury County Luxury Trends',
    category: 'Market Intel',
    excerpt:
      'Track absorption rates, average days-on-market, and behind-the-scenes insights shaping Middle Tennessee’s luxury inventory.',
    published: '2025-10-05',
    author: 'Patrick Manning',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1529429617124-aee711a2e467?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Aerial view of Nashville skyline at sunset',
    slug: 'q3-luxury-market-snapshot',
    seoDescription:
      'Gain intelligence on Williamson and Maury County luxury real estate trends with Patrick Manning’s Q3 2025 market snapshot.',
    content: [
      'Inventory across Williamson and Maury counties tightened 11% quarter-over-quarter, with executive new construction commanding a 7% premium above 2024 pricing.',
      'Cash offers represented 38% of luxury closings, underscoring the importance of strategy, speed, and relationships to control desirable assets.',
      'Forecast: Expect measured price appreciation heading into the holidays with outsized demand for amenity-rich properties supporting hybrid work and multi-generational living.',
    ],
  },
]
