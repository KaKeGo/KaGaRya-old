import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';



const Home = () => {
  const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)
  const userData = useSelector((state) => state.authCheck.userData)

  return (
    <div>
      <h3>Home</h3>
      {isAuthenticated ? (
        <p>Welcome, {userData?.username || 'Anonymous'}!</p>
      ) : (
        <p>Welcome, Anonymous!</p>
      )}
    </div>
  );
};

export default Home