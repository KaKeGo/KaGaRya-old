import React from 'react'

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { 
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

import './CustomButton.css'

const Button = ({ value, onCLick }) => {
  return (
    <div className='btn__container'>
        <button className='btn' onClick={onCLick}>
            <span>{value} </span>
            <span><FontAwesomeIcon icon={faPlus} /></span>
        </button>
    </div>
  )
}

export default Button