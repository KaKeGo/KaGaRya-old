import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import FadeInAnimation from '../../Animations/FadeIn/FadeInAnimation'

import './Home.css'
import CommingSoon from '../../containers/CommingSoon/CommingSoon';
import LogedinToSee from '../../containers/LogedinToSee/LogedinToSee';


const Home = () => {
  const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)
  const userData = useSelector((state) => state.authCheck.userData)

  return (
    <FadeInAnimation>
    <div className='home__container'>
      
      <div className='home__column1'>
        <div className='sub__home__column1'>
          {isAuthenticated ? <CommingSoon /> : <LogedinToSee />}
        </div>
        <div className='sub__home__column1'>
          {isAuthenticated ? <CommingSoon /> : <LogedinToSee />}
        </div>
        <div className='sub__home__column1'>
          {isAuthenticated ? <CommingSoon /> : <LogedinToSee />}
        </div>
      </div>

      <div className='home__column2'>
        <div className='sub__home__column2'>
          {isAuthenticated ? <CommingSoon /> : <LogedinToSee />}
        </div>
        <div className='sub__home__column2'>
          {isAuthenticated ? <CommingSoon /> : <LogedinToSee />}
        </div>
        <div className='sub__home__column2'>
          {isAuthenticated ? <CommingSoon /> : <LogedinToSee />}
        </div>
      </div>

    </div>
    </FadeInAnimation>
  );
};

export default Home