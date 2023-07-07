import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex'>Navbar
        <ul className='flex mx-4'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/login'>login</Link>
            </li>
            <li>
                <Link to='/register'>register</Link>
            </li>
            <li>
                <Link to='/profile/list'>Profile list</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar