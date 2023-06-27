import Sidebar from '../Sidebar/Sidebar'
import Flex from '../Ui/Flex/Flex'
import { getImgUrl } from '~/actions/utils/utils'
import FeedElement from '../FeedElement/FeedElement'

interface IHomepage {
  feedRes: any[]
  id: string
  supabaseKey: string
  supabaseUrl: string
}
const Homepage = ({ feedRes, id, supabaseKey, supabaseUrl }: IHomepage) => {
  return (
    <Flex flexDirection='row' height='100%'>
      <Sidebar supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />
      <Flex
        alignItems='center'
        flexDirection='column'
        width='100%'
        overflowY='auto'
      >
        {feedRes.map((e, idx) => {
          const imgUrl = getImgUrl(supabaseUrl, e.media[0].url)
          return (
            <FeedElement feedElement={e} key={idx} iUrl={imgUrl} idx={idx} />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Homepage
