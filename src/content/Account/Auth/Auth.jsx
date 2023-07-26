import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAuthCheck } from '../../../slices/Accounts/authCheckSlice'



const Auth = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchUserAuthCheck())
    }, [dispatch])

    useEffect(() => {

    }, [dispatch])

    return <></>
}

export default Auth
