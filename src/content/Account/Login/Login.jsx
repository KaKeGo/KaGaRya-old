import React, { useState } from 'react'

import './Login.css'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
              <input type='p{assword' value={password} onChange={handlePasswordChange} 
                placeholder='Password' required/>
            </div>
            
            <button className='login-button' type='submit'>Login</button>

          </form>
        </div>

      </div>
    )
}

export default Login