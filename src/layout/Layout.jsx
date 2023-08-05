import React from 'react'

import Navbar from '../containers/Navbar/Navbar'
import Auth from '../content/Account/Auth/Auth'
import Footer from '../containers/Footer/Footer'


const Layout = ({ children }) => {
  return (
    <div>
        <Auth />
          <Navbar />
          {children}
          <Footer />
    </div>
  )
}

export default Layout