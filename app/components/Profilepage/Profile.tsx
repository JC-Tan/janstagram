import Flex from '../Ui/Flex/Flex'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { User } from '@prisma/client'
import PostsAndFollow from '../PostsAndFollow/PostsAndFollow'
import Bio from '../Bio/Bio'
import Username from '../Username/Username'
import Box from '../Ui/Box/Box'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

interface IProfile extends Omit<User, 'createdAt' | 'passwordHash' | 'email'> {
  followers?: any
  following?: any
  isMyProfile: boolean
  posts?: any
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

  async function getImages() {
    const { data, error } = await supabase.storage
      .from('images')
      .list(userName + '/', {
        limit: 10,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })

    if (data) {
      setMedia(data)
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
      <Flex flexDirection='row'>
        {media.map((e: any, idx: number) => {
          const url = imgUrl + '/' + e.name
          return <img width={310} height={310} key={idx} src={url} />
        })}
      </Flex>
    </Flex>
  )
}

export default Profile
