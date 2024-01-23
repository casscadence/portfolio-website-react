import { Outlet } from 'react-router-dom'
import Topbar from '../Topbar/'
import './index.scss'

const Layout = ({scrollPercent}) => {
  return (
    <div className="App">
      <Topbar scrollPercent={scrollPercent} />
      <div className="page">
        <Outlet /> 
      </div>
    </div>
  )
}

export default Layout