import Box from "../Box/Box"

interface ILayoutProps {
  children?: React.ReactNode
}
const Layout = ({ children }: ILayoutProps) => {
  return <Box height="100%">{children}</Box>
}

export default Layout
