import React, { useEffect }  from 'react'
import { useDispatch } from 'react-redux'

import { authStatus } from '../../../slices/Accounts/auth'
// import { getCookie } from '../../../CSRFToken'


const Auth = ({ children }) => {
    const dispatch = useDispatch()
    // const csrftoken = getCookie('csrftoken')
    // console.log(csrftoken)

    useEffect(() => {
        dispatch(authStatus())
    }, [dispatch])

    return <>{children}</>
}

export default Auth
