import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { SoldListings } from '../components/listings/SoldListings'
import { agentProfile } from '../data/agent'

const BuySold = () => (
  <div>
    <Seo
      title="Sold Portfolio | Patrick Manning"
      description="Explore recently sold homes Patrick matched to clients' routines, commutes, and lifestyle goals across Tennessee and Western Kentucky."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/buy/sold"
    />
    <PageHeader
      kicker="Sold Portfolio"
      title="Recently Closed Transactions"
      subtitle={`${agentProfile.lifestyleMessaging.intro} Here are a few of the homes matched to clients' routines, commutes, and community goals.`}
      backgroundImage="/media/sold.jpg"
    />
    <SoldListings />
  </div>
)

export default BuySold
