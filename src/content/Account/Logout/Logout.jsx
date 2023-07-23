import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setLoggedOut } from '../../../slices/Accounts/auth'
import { Logout } from '../../../slices/Accounts/logout'
import { Spiner } from '../../../containers/Loading/Spiner'
import { useEffect } from 'react'

const LogoutView = () => {
    const loading = useSelector((state) => state.logout.loading)
    const error = useSelector((state) => state.logout.error)

    const loggedIn = useSelector((state) => state.auth.loggedIn)
 
    const navigate = useNavigate()

    const dispatch = useDispatch()

    if (loading) {
        return <Spiner />
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    const handleLogout = async () => {
        try {
            await dispatch(Logout())
            dispatch(setLoggedOut())
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default LogoutView
