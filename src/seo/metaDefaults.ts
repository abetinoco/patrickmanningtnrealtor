import { agentProfile } from '../data/agent'

export const defaultMeta = {
  title: `${agentProfile.name} | ${agentProfile.designation}`,
  description: agentProfile.lifestyleMessaging.intro,
  openGraph: {
    type: 'website',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80',
  },
}
