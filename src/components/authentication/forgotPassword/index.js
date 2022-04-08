import React, { useState } from 'react'

import Loader from '../../../animation/loader'

const ForgotPassword = ({ isOpen, toggleModal, isLoading, forgotPassword }) => {
  const [email, onChangeEmail] = useState('')
  const [isEmailFocus, setIsEmailFocus] = useState(false)

  const formSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: email
    }
    forgotPassword(data)
  }

  return (
    <div className={`forgot-pass ${isOpen ? 'forgot-pass-active' : ''}`}>
      <div className='sign-in__box-shadow' onClick={() => toggleModal('')} />
      <div className='sign-in__block forgot-password'>
        <div className='sign-in__first-row'>
          <h3>I forgot my password!</h3>
          <div className='sign-in__close-position'>
            <a onClick={() => toggleModal('')} />
          </div>
        </div>
        <div className='forgot-pass__info'>
          <p>No problem! We'll send you an email so you can quickly change your password and go back to apartment surfing.</p>
        </div>
        <form className='main-form__regist' onSubmit={formSubmit}>
          <div className={`field-wrap ${email ? 'has-val' : ''} ${isEmailFocus ? 'is-focused' : ''}`}>
            <input
              className='form-control main-form__valid'
              placeholder=' '
              id='email2'
              name='pass'
              required
              type='email'
              value={email}
              onFocus={() => setIsEmailFocus(true)}
              onBlur={() => setIsEmailFocus(false)}
              onChange={(e) => onChangeEmail(e.currentTarget.value)}
            />
            <label className='control-label main-form__valid-label' htmlFor='email'>Email</label>
          </div>
          <button className='button--blue' type='submit'>
            {
              isLoading ? <Loader animation='BlueButtonLoader' height={32} /> : 'Reset password'
            }
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
