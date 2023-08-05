import React from 'react'
import { useSelector } from 'react-redux';

import FadeInAnimation from '../../Animations/FadeIn/FadeInAnimation'

import './Home.css'
import { Spiner } from '../../containers/Loading/Spiner';


const Home = () => {
  const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)
  const userData = useSelector((state) => state.authCheck.userData)

  return (
    <FadeInAnimation>
    <div className='home__container'>
      {isAuthenticated ? (
        <p>Welcome, {userData?.username || 'Anonymous'}!</p>
      ) : (
        <p>Welcome, Anonymous!</p>
      )}
      <div>
      </div>
    </div>
    </FadeInAnimation>
  );
};

export default Home