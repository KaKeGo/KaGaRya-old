import DotLoader from 'react-spinners/DotLoader'

import './Spiner.css'

export const Spiner = () => {


    return (
    <div className="spiner">    
        <DotLoader
        color="#4fb350"
        cssOverride={{}}
        loading
        size={40}
        speedMultiplier={1}
        />
      </div>
    )   
}
