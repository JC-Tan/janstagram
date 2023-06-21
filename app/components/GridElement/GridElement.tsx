import Image from '../Ui/Image/Image'

export interface IGridElement {
  height: string
  index: number
  url: string
  width: string
  onClick: (...args: any) => any
}

const GridElement = ({ height, index, url, width, onClick }: IGridElement) => {
  const handleClick = () => {
    onClick(index, url)
  }
  return <Image height={height} url={url} width={width} onClick={handleClick} />
}

export default GridElement
