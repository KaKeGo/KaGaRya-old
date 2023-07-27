import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Logout } from '../../../slices/Accounts/logoutSlice'
import { Spiner } from '../../../containers/Loading/Spiner'

const LogoutView = () => {
    const loading = useSelector((state) => state.logout.loading)
    const error = useSelector((state) => state.logout.error)
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
            dispatch(Logout())
            navigate('/')
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
