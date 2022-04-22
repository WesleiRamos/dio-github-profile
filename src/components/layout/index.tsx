import Header from '../header'
import LayoutWrapper from './styles'

type LayoutProps = {
  children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children = [] }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  )
}

export default Layout
