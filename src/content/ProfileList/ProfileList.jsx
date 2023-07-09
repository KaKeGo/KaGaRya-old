import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProfiles } from '../../slices/Accounts/profileList'



const ProfileList = () => {
  const profiles = useSelector((state) => state.profileList.profiles)
  const loading = useSelector((state) => state.profileList.loading)
  const error = useSelector((state) => state.profileList.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProfiles())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>Profile list</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <b>{profile.user.username}</b>
            <img className='h-48 w-48' src={profile.avatar} alt={profile.user.username}/>
            <p>{profile.about}</p>
            <p>{profile.motto}</p>
            <p>{profile.gender.name}</p>
            <p>{profile.online_status ? 'Online' : 'Offline'}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileList