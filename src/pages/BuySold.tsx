import { Seo } from '../components/seo/Seo'
import { defaultMeta } from '../seo/metaDefaults'
import { PageHeader } from '../components/shared/PageHeader'
import { SoldListings } from '../components/listings/SoldListings'

const BuySold = () => (
  <div>
    <Seo
      title="Sold Portfolio | Patrick Manning"
      description="Explore recently sold luxury residences secured through Patrick Manning's advisory."
      openGraph={defaultMeta.openGraph}
      canonical="https://patrickmanningrealtor.com/buy/sold"
    />
    <PageHeader
      kicker="Sold Portfolio"
      title="Recently Closed Transactions"
      subtitle="A snapshot of the premium homes we have represented, showcasing our negotiation strength across Middle Tennessee."
      backgroundImage="/media/sold.jpg"
    />
    <SoldListings />
  </div>
)

export default BuySold
