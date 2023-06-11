import Flex from '../Ui/Flex/Flex'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { User } from '@prisma/client'
import PostsAndFollow from '../PostsAndFollow/PostsAndFollow'
import Bio from '../Bio/Bio'
import Username from '../Username/Username'
import Box from '../Ui/Box/Box'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://unpdnaliobtmmjqonfhw.supabase.co/'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucGRuYWxpb2J0bW1qcW9uZmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MTgxNTAsImV4cCI6MTk5OTM5NDE1MH0.1J5ST8NSbVKK71md_Rj16FP4Om-8onnP6DKq3lPv4XY'
const supabase = createClient(supabaseUrl, supabaseKey)
interface IProfile extends Omit<User, 'createdAt' | 'passwordHash' | 'email'> {
  followers?: any
  following?: any
  isMyProfile: boolean
  posts?: any
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
  userName,
}: IProfile) => {
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

    console.log(data)
    if (data) {
      setMedia(data)
    } else {
      console.log('error:', error)
    }
  }

  const imgUrl = supabaseUrl + 'storage/v1/object/public/images/' + userName
  console.log(imgUrl)
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
          console.log(url)
          return <img width={310} height={310} key={idx} src={url} />
        })}
      </Flex>
    </Flex>
  )
}

export default Profile
