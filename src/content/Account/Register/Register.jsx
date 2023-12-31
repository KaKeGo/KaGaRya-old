import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Register } from '../../../slices/Accounts/registerSlice'

import './Register.css'
import CSRFToken from '../../../CSRFToken'
import FadeInAnimation from '../../../Animations/FadeIn/FadeInAnimation'

const  defaultInvitedCode = 'beton'


const RegisterView = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [inviteCodeInput, setInviteCodeInput] = useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setPasswordMismatch(true)
      return
    } else {
      setPasswordMismatch(false)
    }

    if (inviteCodeInput === defaultInvitedCode) {
      dispatch(Register({ 
        username, email, password, confirm_password: confirmPassword
      }))
      navigate('/login');
    } else {
      setInviteCodeInput(false)
    }
  }

  return (
    <FadeInAnimation>
    <div className='register-container'>
      <div className='register-title'>
        <h1>Register</h1>
      </div>

      <form className='register-form' onSubmit={handleSubmit}>
        <CSRFToken />

        <div className='email'>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            autoFocus={true}
            required
          />
        </div>
        <div className='email'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Example@mail.com'
            required
          />
        </div>
        <div className='password'>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </div>
        <div className='confirm-password'>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            required
          />
        </div>
        <div className='invite-code'>
          <input
            type='text'
            onChange={(e) => setInviteCodeInput(e.target.value)}
            placeholder='Invite Code'
            required
          />
        </div>
        {/* <div className="checkbox-container">
        <CustomCheckbox
          checked={agreedToTerms}
          onChange={handleAgreedToTermsChange}
        />
        </div> */}

        {!inviteCodeInput && <p>Invalid code</p>}
        {passwordMismatch && <p>Password do not match</p>}
        <button className='register-button' type='submit'>Register</button>
      </form>
    </div>
    </FadeInAnimation>
  )
}

export default RegisterView