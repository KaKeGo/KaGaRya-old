import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';

import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

import './Spiner.css'

export const Spiner = () => {


    return (
      <div className="spiner">
        <FontAwesomeIcon 
          icon={faEarthEurope} 
          spin  
          className='earth__icon'
        />    
      </div>
    )   
}
