import { agentProfile } from '../data/agent'

export const defaultMeta = {
  title: `${agentProfile.name} | ${agentProfile.designation}`,
  description: agentProfile.lifestyleMessaging.intro,
  openGraph: {
    type: 'website',
    // Screenshot /og-preview at 1200×630 in DevTools, save to /public/media/og-image.jpg
    image: 'https://patrickmanningrealtor.com/media/og-image.jpg',
  },
}
