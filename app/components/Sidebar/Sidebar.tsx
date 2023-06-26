import Flex from '../Ui/Flex/Flex'
import Button from '../Ui/Button/Button'
import { useFetcher } from '@remix-run/react'
import { useState } from 'react'
import ImageUploader from '../ImageUploader/ImageUploader'
import Input from '../Ui/Input/Input'
import { convertToJson } from '~/actions/utils/convertToJson/convertToJson'
import Modal from '../Ui/Modal/Modal'

interface ISidebar {
  supabaseUrl: string
  supabaseKey: string
}

const Sidebar = ({ supabaseKey, supabaseUrl }: ISidebar) => {
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
      <Button name='_action' value='home' onClick={handleHome}>
        Home
      </Button>
      <Button name='_action' value='search' onClick={handleSearch}>
        Search
      </Button>
      <ImageUploader supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />
      <Button name='_action' value='profile' onClick={handleProfile}>
        Profile
      </Button>
      <Button name='_action' value='logout' onClick={handleLogout}>
        Log out
      </Button>
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
