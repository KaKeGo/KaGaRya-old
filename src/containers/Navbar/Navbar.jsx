import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Navbar.css'

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { 
    faCaretDown, faRightToBracket, faUserPlus, faUser, faRightFromBracket
 } from '@fortawesome/free-solid-svg-icons'

 import LogoutView from '../../content/Account/Logout/Logout'


const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)

    const handleToggleExpansion = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <nav className='navbar'>

            <div className='column column-1'>
                {isAuthenticated ? (
                    <Link to='/profile'><FontAwesomeIcon icon={faUser} /> Profile</Link>
                ) : (
                    <Link to='/login'><FontAwesomeIcon icon={faRightToBracket}/> Login</Link>
                )}
                
            </div>

            <div className='column column-2'>
                <Link className='pageName' to='/'><h1>KaGaRya</h1></Link>
            </div>

            <div className='column column-3'>
                {isAuthenticated ? (
                    <Link><FontAwesomeIcon icon={faRightFromBracket} /><LogoutView> Logout</LogoutView></Link>
                ) : (
                    <Link to='/register'><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Link>
                )}
            </div>

            <div className='more-options'>
                <button onClick={handleToggleExpansion}>
                    More content  
                    <FontAwesomeIcon
                            className='down-button'
                            icon={faCaretDown} 
                            rotation={isExpanded ? 180: 0}
                        />
                </button>
                
                {isExpanded && (
                    <div className='additional-links'>
                        <Link to='/todo/plan/list'>Todo plan list</Link>
                    </div>
                )}
                </div>

        </nav>
    )
}

export default Navbar
