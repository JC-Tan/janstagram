import Box from '../Box/Box'

interface ILayoutProps {
  id: string
  children?: React.ReactNode
}
const Layout = ({ id, children }: ILayoutProps) => {
  return (
    <Box id={id} height='100%'>
      {children}
    </Box>
  )
}

export default Layout
