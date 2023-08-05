import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Navbar.css'
import logo from '../../Assets/Logo/KaGaRya.png'

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { 
    faCaretDown, faRightToBracket, faUserPlus, faUser, faRightFromBracket
 } from '@fortawesome/free-solid-svg-icons'

import LogoutView from '../../content/Account/Logout/Logout'


const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)
    const slug = useSelector((state) => state.authCheck.userData?.slug)

    const handleToggleExpansion = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <nav className='navbar'>

            <div className='column column-1'>
            
                {isAuthenticated ? (
                    <Link to={`/profile/${slug}`}><FontAwesomeIcon icon={faUser} /> Profile</Link>
                ) : (
                    <Link to='/login'><FontAwesomeIcon icon={faRightToBracket}/> Login</Link>
                )}
                
            </div>

            <div className='column column-2'>
                <Link className='pageName' to='/'>
                    <img src={logo}/>
                </Link>
            </div>

            <div className='column column-3'>
                {isAuthenticated ? (
                    <Link><FontAwesomeIcon icon={faRightFromBracket} /><LogoutView> Logout</LogoutView></Link>
                ) : (
                    <Link to='/register'><FontAwesomeIcon icon={faUserPlus} /> SignUp</Link>
                )}
            </div>

            <div className='more-options'>
                {/* <button onClick={handleToggleExpansion}>
                    More content  
                    <FontAwesomeIcon
                            className='down-button'
                            icon={faCaretDown} 
                            rotation={isExpanded ? 180: 0}
                        />
                </button> */}
                {/* {isExpanded && (
                <div className='additional-links'>
                    {isAuthenticated ? (
                        <Link to='/todo/plan/list'>Todo plan list</Link>
                    ) : (
                        <span className='text-xs font-normal'>login to see more...</span>
                    )}
                </div>
                )} */}
            </div>
           
        </nav>
    )
}

export default Navbar
