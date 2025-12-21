import { agentProfile } from '../data/agent'

export const defaultMeta = {
  title: `${agentProfile.name} | ${agentProfile.designation}`,
  description: agentProfile.lifestyleMessaging.intro,
  openGraph: {
    type: 'website',
    image: 'https://patrickmanningrealtor.com/media/patrick.png',
  },
}
