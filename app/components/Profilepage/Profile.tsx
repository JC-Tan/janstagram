import Flex from '../Ui/Flex/Flex'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { User } from '@prisma/client'
import PostsAndFollow from '../PostsAndFollow/PostsAndFollow'
import Bio from '../Bio/Bio'
import Username from '../Username/Username'
import Box from '../Ui/Box/Box'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import PictureGrid from '../PictureGrid/PictureGrid'

interface IProfile extends Omit<User, 'createdAt' | 'passwordHash' | 'email'> {
  followers?: any
  following?: any
  isMyProfile: boolean
  posts?: any[]
  supabaseUrl: string
  supabaseKey: string
}

const Profile = ({
  bio,
  firstName,
  followers,
  following,
  id,
  isMyProfile,
  lastName,
  posts,
  supabaseUrl,
  supabaseKey,
  userName,
}: IProfile) => {
  const supabase = createClient(supabaseUrl, supabaseKey)
  const [media, setMedia] = useState<any>([])

  useEffect(() => {
    getImages()
  }, [])

  useEffect(() => {
    posts?.sort((a, b) => dateSort(a.createdAt, b.createdAt))
  }, [posts])

  async function getImages() {
    const { data, error } = await supabase.storage
      .from('images')
      .list(userName + '/', {
        limit: 10,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })

    if (data) {
      setMedia(data.sort((a, b) => dateSort(a.created_at, b.created_at)))
    } else {
    }
  }

  const imgUrl = supabaseUrl + 'storage/v1/object/public/images/' + userName

  return (
    <Flex flexDirection='column'>
      <Flex height='150px' alignItems='center' mb={44}>
        <ProfilePicture />
        <Flex alignItems='stretch' flex='2 1 30px' flexDirection='column'>
          <Username
            id={id}
            username={userName}
            isMyProfile={isMyProfile}
            followers={followers}
          />
          <Box mb={20} />
          <PostsAndFollow
            followers={followers}
            following={following}
            posts={posts}
          />
          <Bio
            bio='TEST TEST TEST TEST'
            firstname={firstName}
            lastname={lastName}
          />
        </Flex>
      </Flex>
      <PictureGrid
        imgUrl={imgUrl}
        media={media}
        posts={posts}
        username={userName}
      />
    </Flex>
  )
}

const dateSort = (a: string, b: string) => {
  return Date.parse(b) - Date.parse(a)
}

export default Profile
