import React from 'react'

import Navbar from '../containers/Navbar/Navbar'
import Auth from '../content/Account/Auth/Auth'


const Layout = ({ children }) => {
  return (
    <div>
        <Auth />
          <Navbar />
          {children}
    </div>
  )
}

export default Layout