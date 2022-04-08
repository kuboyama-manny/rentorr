import React, { useCallback, useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import Loader from '../../../animation/loader'
import { homeGlass, globalFaceBook } from '../../../assets/images'

const SignIn = ({ isOpen, toggleModal, login, isLoading }) => {
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [isEmailFocus, setEmailFocus] = useState(false)
  const [isPasswordFocus, setPasswordFocus] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [])

  const escFunction = useCallback((evt) => {
    if (evt.keyCode === 27) {
      toggleModal('')
    }
  }, [])

  const formSubmit = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
      login_type: 'email'
    }
    login(data)
  }

  const responseFacebook = (response) => {
    if (response) {
      toggleModal('')
      const data = {
        fbid: response.id,
        email: response.email,
        login_type: 'facebook'
      }
      login(data)
    }
  }

  return (
    <div className={`sign-in ${isOpen ? 'sign-in-active' : ''}`}>
      <div className='sign-in__box-shadow' onClick={() => toggleModal('')} />
      <div className='sign-in__block'>
        <div className='sign-in__first-row'>
          <h3>Hey, welcome back!</h3>
          <div className='sign-in__close-position'>
            <a onClick={() => toggleModal('')} />
          </div>
        </div>
        <form className='sign-in__login' onSubmit={formSubmit}>
          <div className={`field-wrap ${email ? 'has-val' : ''} ${isEmailFocus ? 'is-focused' : ''}`}>
            <input
              className='form-control sign-in__valid'
              placeholder=' '
              id='email'
              name='pass'
              required
              type='email'
              value={email}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(evt) => onChangeEmail(evt.currentTarget.value)}
            />
            <label className='control-label sign-in__valid-label' htmlFor='email'>Email</label>
          </div>
          <div className={`field-wrap ${password ? 'has-val' : ''} ${isPasswordFocus ? 'is-focused' : ''}`}>
            <input
              className='form-control sign-in__repass'
              placeholder=' '
              id='pass'
              name='pass'
              required
              type={`${isShowPassword ? 'text' : 'password'}`}
              value={password}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={(evt) => onChangePassword(evt.currentTarget.value)}
            />
            <a className='sign-in__glass' onClick={() => setIsShowPassword(!isShowPassword)}>
              <img src={homeGlass} alt='' />
            </a>
            <label className='control-label' htmlFor='pass'>Password</label>
          </div>
          <div className='sign-in__forgot-position'>
            <a className='sign-in__forgot second-link' onClick={() => toggleModal('forgot_pass')}>
              Forgot password?
            </a>
          </div>
          <button type='submit' className='button--blue sign-in__button'>
            {
              isLoading ? <Loader animation='BlueButtonLoader' height={32} /> : 'SIGN IN'
            }
          </button>
        </form>
        <div className='sign-in__line' />
        <div className='sign-in__or-position'>
          <div className='sign-in__or'>
            <span>OR</span>
          </div>
        </div>
        <div className='sign-in__facebook-position'>
          {
            process.env.FACEBOOK_APP_ID &&
              <FacebookLogin
                appId={process.env.FACEBOOK_APP_ID}
                autoLoad={false}
                fields='name,email,picture'
                callback={responseFacebook}
                render={renderProps => {
                  return (
                    <a className='sign-in__facebook' onClick={renderProps.onClick}>
                      <img src={globalFaceBook} alt='' />
                      <span className='second-link'>continue with facebook</span>
                    </a>
                  )
                }}
              />
          }
          <div className='sign-in__sign-up'>
            <span>Don’t have an account?</span>
            <a className='second-link' onClick={() => toggleModal('sign_up')}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
