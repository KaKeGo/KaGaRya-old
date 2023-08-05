import React from 'react'
import ReactDOM  from 'react-dom'

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';

import './Notification.css'
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';



const Notification = ({ message }) => {
    
    return ReactDOM.createPortal(
        <div className='notification'>
            { message }
            <div className='rocket__container'>
                <FontAwesomeIcon 
                    className='rocket'
                    icon={faShuttleSpace} size="lg" 
                />
            </div>
        </div>,
        document.body
      );
}

export default Notification