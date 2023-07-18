import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Login } from '../../../slices/Accounts/account'

import { Spiner } from '../../../containers/Loading/Spiner'
import './Login.css'


const LoginView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const loading = useSelector((state) => state.login.loading)
  const error = useSelector((state) => state.login.error)
  const loggedIn = useSelector((state) => state.login.loggedIn)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  if (loading) {
    return <Spiner />
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  if (loggedIn) {
    return <div>Welcome</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(Login({ email, password }))
  }

  return (
      <div className='login-container'>

        <div>
          <div className='login-title'>
            <h1>Login</h1>
          </div>
          
          <form className='login-form' onSubmit={handleSubmit}>

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