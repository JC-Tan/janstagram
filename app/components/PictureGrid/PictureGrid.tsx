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
}

const PictureGrid = ({ imgUrl, media }: IPictureGrid) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [post, setPost] = useState<any>(null)
  const [url, setUrl] = useState('')

  const handleOpen = (index: number, url: string) => {
    setIsModalOpen(true)
    setPost(media[index])
    setUrl(url)
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
        <Post post={post} url={url} />
      </Modal>
    </Grid>
  )
}

export default PictureGrid
