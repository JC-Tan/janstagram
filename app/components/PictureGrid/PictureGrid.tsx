import styled from '@emotion/styled'
import Box from '../Ui/Box/Box'
import GridElement from '../GridElement/GridElement'
import { useState } from 'react'
import Modal from '../Ui/Modal/Modal'
import Post from '../Post/Post'

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, 310px));
`

interface IPictureGrid {
  imgUrl: string
  media: any[]
  posts: any[]
  username: string
}

const PictureGrid = ({ imgUrl, media, posts, username }: IPictureGrid) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [url, setUrl] = useState('')
  const [post, setPost] = useState({
    caption: '',
    createdAt: '',
  })

  const handleOpen = (index: number, url: string) => {
    setIsModalOpen(true)
    setUrl(url)
    setPost({
      caption: posts[index]?.caption,
      createdAt: posts[index]?.createdAt,
    })
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <Grid>
      {media.map((e: any, idx: number) => {
        const url = imgUrl + '/' + e.name
        return (
          <Box key={idx} mr={1} mb={1}>
            <GridElement
              datatest-id={`pic-${idx}`}
              width='310px'
              height='310px'
              index={idx}
              url={url}
              onClick={handleOpen}
            />
          </Box>
        )
      })}
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <Post
          imgUrl={url}
          post={post}
          profImgUrl='/pikachu.png'
          username={username}
        />
      </Modal>
    </Grid>
  )
}

export default PictureGrid
