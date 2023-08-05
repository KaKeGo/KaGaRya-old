import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams }from 'react-router-dom'

import { fetchUserProfile } from '../../../slices/Accounts/Profile/profileDetailSlice'

import { Spiner } from '../../../containers/Loading/Spiner'
import FadeInAnimation from '../../../Animations/FadeIn/FadeInAnimation'
import CustomButton from '../../../containers/Button/CustomButton' 

import './UserProfile.css'


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
    <FadeInAnimation>
    <div className='container'>

        <div className='title'>

            <h2 className='text'>User info</h2>
            <div className='divider'></div>
            <div className='tab-button'>
                Comming soon
            </div>

        </div>

        <div className='profile__container'>
        {userProfile.map((profile) => (
        <div key={profile.id}>
            
            <div className='profile__row'>
                <div className='profile__column-1'>
                    <div className={`user-avatar ${profile.online_status ? 'online' : 'offline'}`}>
                        <img src="https://i.pinimg.com/564x/80/17/86/80178693d1d0c7e0ec688707b02ecc0b.jpg" alt="Avatar" />
                    </div>
                </div>

                <div className='profile__column-2'>
                    <div className='profile__label'>Username:</div>
                        <p className='profile__value'>{profile.get_username}</p>

                    <div className='profile__label'>Motto:</div>
                        <p className='profile__value'>{profile.motto}</p>

                </div>

                <div className='profile__column-3'></div>
            </div>

            <div className='profile__about'>
            <div className='profile__divider'></div>
                <div className='profile__label profile__label-about'>About me:</div>
                    <div className='profile__value-container'>
                        <p className='profile__value-about'>{profile.about}</p>
                    </div>
            </div>

            <div className='profile__list'>
            <div className='profile__divider'></div>

                <div className='profile__label profile__list-title'>
                    <h3>My lists</h3>
                </div>

                <div className='profile__list-conteiner'>
                    <div className='profile__list-column'>
                        <div className='profile__list-title profile__label'>Anime</div>
                        <div className='profile__divider2'></div>
                        <div className='profile__create-list'>
                            <CustomButton 
                                value={'Create'}
                            />
                        </div>
                    </div>
                    <div className='profile__list-column'>
                        <div className='profile__list-title profile__label'>Manga</div>
                        <div className='profile__divider2'></div>
                        <div className='profile__create-list'>
                            <CustomButton 
                                value={'Create'}
                            />
                        </div>
                    </div>
                    <div className='profile__list-column'>
                        <div className='profile__list-title profile__label'>Books</div>
                        <div className='profile__divider2'></div>
                        <div className='profile__create-list'>
                            <CustomButton 
                                value={'Create'}
                            />
                        </div>
                    </div>
                    <div className='profile__list-column'>
                        <div className='profile__list-title profile__label'>Films</div>
                        <div className='profile__divider2'></div>
                        <div className='profile__create-list'>
                            <CustomButton 
                                value={'Create'}
                            />
                        </div>
                    </div>
                    <div className='profile__list-column'>
                        <div className='profile__list-title profile__label'>Series</div>
                        <div className='profile__divider2'></div>
                        <div className='profile__create-list'>
                            <CustomButton 
                                value={'Create'}
                            />
                        </div>
                    </div>
                    <div className='profile__list-column'>
                        <div className='profile__list-title profile__label'>Games</div>
                        <div className='profile__divider2'></div>
                        <div className='profile__create-list'>
                            <CustomButton 
                                value={'Create'}
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/*
            <p>Username: {profile.get_username}</p>
            <p>About: {profile.about}</p>
            <p>Motto: {profile.motto}</p>
            <p>Slug: {profile.slug}</p>

                <p>User:</p>
                <p>Id: {profile.user.id}</p>
                <p>Username: {profile.user.username}</p>
                <p>Email: {profile.user.email}</p> */}
        </div>
        ))}
        </div>

    </div>
    </FadeInAnimation>
        
    )
}

export default UserProfileView