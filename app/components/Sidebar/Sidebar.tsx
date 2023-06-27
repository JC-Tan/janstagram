import Flex from '../Ui/Flex/Flex'
import { useFetcher } from '@remix-run/react'
import { useState } from 'react'
import ImageUploader from '../ImageUploader/ImageUploader'
import Input from '../Ui/Input/Input'
import { convertToJson } from '~/actions/utils/convertToJson/convertToJson'
import Modal from '../Ui/Modal/Modal'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

interface ISidebar {
  profilePicUrl?: string
  supabaseUrl: string
  supabaseKey: string
}

const Sidebar = ({ profilePicUrl, supabaseKey, supabaseUrl }: ISidebar) => {
  const [profile, setProfile] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const fetcher = useFetcher()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    if (input !== '') {
      setProfile(`/${input.toLowerCase()}`)
    }
  }

  const handleHome = () => {
    const data = convertToJson('home', '/')
    fetcher.submit(data, { method: 'post' })
  }

  const handleSearch = () => {
    setIsSearchOpen(true)
  }

  const handleProfile = () => {
    const data = convertToJson('profile', '/profile')
    fetcher.submit(data, { method: 'post' })
  }

  const handleLogout = () => {
    const data = convertToJson('logout', '/logout')
    fetcher.submit(data, { method: 'post' })
  }

  const requestSearchClose = () => {
    setIsSearchOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const data = convertToJson('otherProfile', `/profile${profile}`)
      fetcher.submit(data, { method: 'post' })
    }
  }
  return (
    <Flex
      borderRight='1px solid black'
      flexDirection='column'
      justifyContent='center'
      height='100%'
      width='275px'
      p={12}
    >
      <ButtonIcon
        buttonLabel='Home'
        url='/icons/home.png'
        value='home'
        onClick={handleHome}
      />
      <ButtonIcon
        buttonLabel='Search'
        url='/icons/search.png'
        value='search'
        onClick={handleSearch}
      />
      <ImageUploader supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />
      <ButtonIcon
        buttonLabel='Profile'
        isProfileTab
        url='/defaultPfp.jpg'
        value='profile'
        onClick={handleProfile}
      />
      <ButtonIcon
        buttonLabel='Log out'
        url='/icons/logout.svg'
        value='logout'
        onClick={handleLogout}
      />
      <Modal isOpen={isSearchOpen} onClose={requestSearchClose}>
        <Flex width='100%'>
          <Input
            width='100%'
            height='5%'
            placeholder='Search'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </Flex>
      </Modal>
    </Flex>
  )
}

export default Sidebar
