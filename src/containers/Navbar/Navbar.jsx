import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>Navbar
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar