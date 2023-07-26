import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams }from 'react-router-dom'

import { fetchUserProfile } from '../../../slices/Accounts/profileDetailSlice'

import { Spiner } from '../../../containers/Loading/Spiner'


const UserProfileView = () => {
    const { slug } = useParams()
    const userProfile = useSelector((state) => state.profile.userProfile)
    const loading = useSelector((state) => state.profile.loading)
    const error = useSelector((state) => state.profile.error)

    const dispatch = useDispatch()

    console.log(userProfile)

    useEffect(() => {
        dispatch(fetchUserProfile(slug))
    }, [dispatch, slug])

    if (loading) {
        return <Spiner />
    }
    
      if (error) {
        return <div>Error: {error}</div>
    }

    return (
    <div>
        <h2>User Profile</h2>
        {userProfile.map((profile) => (
        <div key={profile.id}>
            <p>Id: {profile.id}</p>
            <p>Avatar: {profile.avatar}</p>
            <p>Username: {profile.get_username}</p>
            <p>About: {profile.about}</p>
            <p>Motto: {profile.motto}</p>
            <p>Slug: {profile.slug}</p>

                <p>User:</p>
                <p>Id: {profile.user.id}</p>
                <p>Username: {profile.user.username}</p>
                <p>Email: {profile.user.email}</p>
        </div>
        ))}
    </div>
        
    )
}

export default UserProfileView