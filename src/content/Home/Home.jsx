import React from 'react'
import { useSelector } from 'react-redux';



const Home = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn)

  return (
    <div>
      <h3>Home</h3>
      <div>
        {loggedIn ?
          <p>Welcome,!</p>
          :
          <p>Anonymouse</p>
        }
      </div>
    </div>
  )
}

export default Home