import React from 'react'
import { useSelector } from 'react-redux';

import './Home.css'

const Home = () => {
  const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)
  const userData = useSelector((state) => state.authCheck.userData)

  return (
    <div className='home__container'>
      {isAuthenticated ? (
        <p>Welcome, {userData?.username || 'Anonymous'}!</p>
      ) : (
        <p>Welcome, Anonymous!</p>
      )}
    </div>
  );
};

export default Home