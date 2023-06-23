import Flex from '../Ui/Flex/Flex'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { User } from '@prisma/client'
import PostsAndFollow from '../PostsAndFollow/PostsAndFollow'
import Bio from '../Bio/Bio'
import Username from '../Username/Username'
import Box from '../Ui/Box/Box'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import PictureGrid from '../PictureGrid/PictureGrid'
import { dateSort, getImages, getImgUrl } from '~/actions/utils/utils'

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
  const [imgUrl, setImgUrl] = useState(getImgUrl(supabaseUrl, id))

  const fetchImages = useCallback(async () => {
    const data = await getImages(supabase, id, 6, 'created_at')
    setMedia(data)
  }, [])

  useEffect(() => {
    fetchImages()
  }, [fetchImages])

  useEffect(() => {
    posts?.sort((a, b) => dateSort(a.createdAt, b.createdAt))
  }, [posts])

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

export default Profile
