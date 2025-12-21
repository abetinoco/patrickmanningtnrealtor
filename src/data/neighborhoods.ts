export interface Neighborhood {
    slug: string
    name: string
    tagline: string
    description: string
    medianPrice: string
    priceRange: string
    schoolRating: string
    commuteToNashville: string
    lifestyle: string[]
    popularAreas: string[]
    highlights: string[]
    image: string
}

export const neighborhoods: Neighborhood[] = [
    {
        slug: 'williamson-county',
        name: 'Williamson County',
        tagline: 'Premier Living South of Nashville',
        description: `Williamson County is Tennessee's most affluent county and consistently ranks among the top places to live in America. Home to Franklin, Brentwood, and Arrington, it offers exceptional schools, stunning estates, and a vibrant downtown scene with boutique shopping and renowned restaurants.`,
        medianPrice: '$950K+',
        priceRange: '$450K - $10M+',
        schoolRating: 'A-Rated',
        commuteToNashville: '25-40 min',
        lifestyle: ['Top Schools', 'Upscale Shopping', 'Historic Downtown', 'Golf Communities'],
        popularAreas: [
            'Franklin - Historic charm meets modern luxury',
            'Brentwood - Established estates and top schools',
            'Arrington - Sprawling acreage and vineyard country',
            'Thompson\'s Station - New construction and family neighborhoods',
            'Nolensville - Growing community with excellent value'
        ],
        highlights: [
            '#1 ranked county in Tennessee for quality of life',
            'Nationally recognized school districts',
            'Historic downtown Franklin - Main Street America',
            '15+ golf courses including The Golf Club of Tennessee',
            'Arrington Vineyards and agritourism destinations'
        ],
        image: '/media/williamson.jpg'
    },
    {
        slug: 'maury-county',
        name: 'Maury County',
        tagline: 'Tennessee\'s Fastest Growing Region',
        description: `Maury County offers the perfect blend of value and lifestyle, with Spring Hill and Columbia leading the growth. Known for new master-planned communities, excellent schools, and easy access to Nashville, it's ideal for families seeking space, modern homes, and a tight-knit community feel.`,
        medianPrice: '$475K+',
        priceRange: '$300K - $1.5M+',
        schoolRating: 'B+ Average',
        commuteToNashville: '35-50 min',
        lifestyle: ['New Construction', 'Master-Planned', 'Family-Friendly', 'Outdoor Living'],
        popularAreas: [
            'Spring Hill - Tennessee\'s fastest-growing city',
            'Columbia - Historic downtown and new development',
            'Thompson\'s Station - Premium neighborhoods',
            'Bethesda - Rural charm with modern homes'
        ],
        highlights: [
            'Tennessee\'s fastest-growing county',
            'Exceptional value compared to Williamson County',
            'Major employers: GM, Amazon distribution',
            'Saturn Parkway for quick Nashville access',
            'Historic Columbia town square and local restaurants'
        ],
        image: '/media/maury.jpg'
    },
    {
        slug: 'nashville',
        name: 'Greater Nashville',
        tagline: 'Music City\'s Iconic Neighborhoods',
        description: `Nashville's urban and near-urban neighborhoods offer walkability, culture, and historic charm just minutes from downtown. From the stately homes of Belle Meade to the tree-lined streets of Green Hills, these areas deliver the best of city living with a Southern flair.`,
        medianPrice: '$1.2M+',
        priceRange: '$500K - $15M+',
        schoolRating: 'A-Rated (Private/Select Public)',
        commuteToNashville: '5-20 min',
        lifestyle: ['Urban Living', 'Walkable', 'Historic Charm', 'Cultural Access'],
        popularAreas: [
            'Belle Meade - Nashville\'s most prestigious address',
            'Green Hills - Shopping, dining, and top schools',
            'Forest Hills - Wooded estates with privacy',
            'Sylvan Park - Walkable urban village',
            'The Nations - Revitalized and trendy'
        ],
        highlights: [
            'Minutes from downtown Nashville',
            'Belle Meade Country Club and Percy Warner Park',
            'Green Hills Mall and The Mall at Green Hills',
            'Top private schools: MBA, Harpeth Hall, Lipscomb',
            'Vibrant dining and entertainment scene'
        ],
        image: '/media/nashville.jpg'
    },
    {
        slug: 'southern-kentucky',
        name: 'Southern Kentucky',
        tagline: 'Value & Lifestyle at the Border',
        description: `Southern Kentucky offers exceptional value with lower property taxes, growing communities, and easy access to Nashville. Bowling Green anchors the region with Western Kentucky University, a thriving economy, and beautiful countryside perfect for those seeking affordability without sacrificing convenience.`,
        medianPrice: '$385K+',
        priceRange: '$200K - $800K+',
        schoolRating: 'B+ Average',
        commuteToNashville: '60-75 min',
        lifestyle: ['Tax Advantage', 'Affordability', 'University Town', 'Rural Living'],
        popularAreas: [
            'Bowling Green - University town with amenities',
            'Franklin, KY - Small town charm near the border',
            'Warren County - Rural estates and new development',
            'Simpson County - Quiet country living'
        ],
        highlights: [
            'No state income tax in Tennessee (work from home advantage)',
            'Significantly lower property taxes than TN',
            'Western Kentucky University cultural amenities',
            'Corvette Museum and motorsports',
            'I-65 corridor for Nashville commuting'
        ],
        image: '/media/kentucky.jpg'
    }
]

export const getNeighborhoodBySlug = (slug: string): Neighborhood | undefined => {
    return neighborhoods.find(n => n.slug === slug)
}
