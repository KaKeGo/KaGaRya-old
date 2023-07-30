import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CSRFToken from '../../../CSRFToken'
import { Login } from '../../../slices/Accounts/loginSlice'

import { Spiner } from '../../../containers/Loading/Spiner'
import './Login.css'
import { fetchUserAuthCheck } from '../../../slices/Accounts/authCheckSlice'


const LoginView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const loading = useSelector((state) => state.login.loading)
  const error = useSelector((state) => state.login.error)

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchUserAuthCheck())
  }, [dispatch])

  if (loading) {
    return <Spiner />
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(Login({ email, password })).then((response) => {
      if (response.payload) {
        navigate('/')
        window.location.reload()
      }
    })
    dispatch(fetchUserAuthCheck())
  }

  return (
      <div className='login-container'>

        <div>
          <div className='login-title'>
            <h1>Login</h1>
          </div>
          
          <form className='login-form' onSubmit={handleSubmit}>
            <CSRFToken />

            <div className='email'>
              <input type='email' value={email} onChange={handleEmailChange} 
                placeholder='Example@mail.com' autoFocus={true} required/>
            </div>
            <div className='password'>
              <input type='password' value={password} onChange={handlePasswordChange} 
                placeholder='Password' required/>
            </div>
            
            <button className='login-button' type='submit'>Login</button>

          </form>
        </div>

      </div>
    )
}

export default LoginView