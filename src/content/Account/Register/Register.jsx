import React, { useState } from 'react'

import CustomCheckbox from '../../../containers/CheckBox/CheckBox'

import './Register.css'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [inviteCode, setInviteCode] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }
  const handleInviteCodeChange = (e) => {
    setInviteCode(e.target.value)
  }
  const handleAgreedToTermsChange = (e) => {
    setAgreedToTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='register-container'>
      <div className='register-title'>
        <h1>Register</h1>
      </div>

      <form className='register-form' onSubmit={handleSubmit}>
        <div className='email'>
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Example@mail.com'
            autoFocus={true}
            required
          />
        </div>
        <div className='password'>
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
            required
          />
        </div>
        <div className='confirm-password'>
          <input
            type='password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder='Confirm Password'
            required
          />
        </div>
        <div className='invite-code'>
          <input
            type='text'
            value={inviteCode}
            onChange={handleInviteCodeChange}
            placeholder='Invite Code'
          />
        </div>
        <div className="checkbox-container">
        <CustomCheckbox
          checked={agreedToTerms}
          onChange={handleAgreedToTermsChange}
        />
        </div>

        <button className='register-button' type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register