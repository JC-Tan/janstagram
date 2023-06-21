import styled from '@emotion/styled'
import Box from '../Ui/Box/Box'
import GridElement from '../GridElement/GridElement'

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, 310px));
`

interface IPictureGrid {
  imgUrl: string
  media: any[]
}

const PictureGrid = ({ imgUrl, media }: IPictureGrid) => {
  console.log(media)
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
              onClick={() => {}}
            />
          </Box>
        )
      })}
    </Grid>
  )
}

export default PictureGrid
