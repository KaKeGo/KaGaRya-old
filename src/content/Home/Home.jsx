import React from 'react'
import { useSelector } from 'react-redux';



const Home = () => {
  const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)
  const userData = useSelector((state) => state.authCheck.userData)

  return (
    <div>
      <h3>This site is under construction, not much you can find at the moment.</h3>
      {isAuthenticated ? (
        <p>Welcome, {userData?.username || 'Anonymous'}!</p>
      ) : (
        <p>Welcome, Anonymous!</p>
      )}
    </div>
  );
};

export default Home