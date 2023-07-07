import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../content/Home/Home'
import NotFound from '../content/NotFound/NotFound'



const Patch = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default Patch