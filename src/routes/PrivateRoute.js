import React from 'react'
import { Routes, Route } from 'react-router-dom'

const PrivateRoute = () => {
  const isAuthenticated = true

  return (
    <Routes>
      <Route />
    </Routes>
  )
}

export default PrivateRoute