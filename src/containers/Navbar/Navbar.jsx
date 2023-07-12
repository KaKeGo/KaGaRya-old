import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleToggleExpansion = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <nav className='navbar'>

            <div className='column column-1'>
                <Link to='/login'>Login</Link>
            </div>

            <div className='column column-2'>
                <h1>KaGaRya</h1>
            </div>

            <div className='column column-3'>
            <Link to='/login'>Register</Link>
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
                        <Link>Cos</Link>
                        <Link>Inne cos</Link>
                        <Link>Jeszcze inne</Link>
                    </div>
                )}
                </div>

        </nav>
    )
}

export default Navbar
