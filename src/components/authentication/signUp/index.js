import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import Loader from '../../../animation/loader'
import { globalFaceBook, homeGlass } from '../../../assets/images'

const SignUp = ({ isOpen, toggleModal, signUp, isLoading }) => {
  const [firstName, onChangeFirstName] = useState('')
  const [lastName, onChangeLastName] = useState('')
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [isFirstNameFocus, setFirstNameFocus] = useState(false)
  const [isLastNameFocus, setLastNameFocus] = useState(false)
  const [isEmailFocus, setEmailFocus] = useState(false)
  const [isPasswordFocus, setPasswordFocus] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)

  const formSubmit = (e) => {
    e.preventDefault()
    const data = {
      firstName,
      lastName,
      email,
      password,
      login_type: 'email'
    }
    signUp(data)
  }

  const responseFacebook = (response) => {
    console.log(response)
    if (response) {
      toggleModal('')
      const nameGroup = response.name.split(' ')
      const data = {
        firstName: nameGroup[0],
        lastName: nameGroup[1],
        fbid: response.id,
        email: response.email,
        login_type: 'facebook'
      }
      signUp(data)
    }
  }

  return (
    <div className={`sign-up ${isOpen ? 'sign-up-active' : ''}`}>
      <div className='sign-in__box-shadow' onClick={() => toggleModal('')} />
      <div className='sign-in__block'>
        <div className='sign-in__first-row'>
          <h3>SIGN UP</h3>
          <div className='sign-in__close-position'>
            <a onClick={() => toggleModal('')} />
          </div>
        </div>
        <form className='main-form__regist' onSubmit={formSubmit}>
          <div className='main-form__first-row'>
            <div className={`field-wrap ${firstName ? 'has-val' : ''} ${isFirstNameFocus ? 'is-focused' : ''}`}>
              <input
                className='form-control main-form__name-input'
                id='name'
                name='name'
                type='text'
                required
                value={firstName}
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => setFirstNameFocus(false)}
                onChange={(evt) => onChangeFirstName(evt.currentTarget.value)}
              />
              <label className='control-label' htmlFor='name'>First Name</label>
            </div>
            <div className={`field-wrap ${lastName ? 'has-val' : ''} ${isLastNameFocus ? 'is-focused' : ''}`}>
              <input
                className='form-control main-form__name-input'
                id='last-name'
                name='last-name'
                type='text'
                required
                value={lastName}
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
                onChange={(evt) => onChangeLastName(evt.currentTarget.value)}
              />
              <label className='control-label' htmlFor='last-name'>Last Name</label>
            </div>
          </div>
          <div className={`field-wrap ${email ? 'has-val' : ''} ${isEmailFocus ? 'is-focused' : ''}`}>
            <input
              className='form-control main-form__valid'
              placeholder=' '
              id='email1'
              name='pass'
              required
              type='email'
              value={email}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(evt) => onChangeEmail(evt.currentTarget.value)}
            />
            <label className='control-label main-form__valid-label' htmlFor='email'>Email</label>
          </div>
          <div className={`field-wrap ${password ? 'has-val' : ''} ${isPasswordFocus ? 'is-focused' : ''}`}>
            <input
              className='form-control main-form__repass'
              id='pass1'
              name='pass'
              required
              type={`${isShowPassword ? 'text' : 'password'}`}
              value={password}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={(evt) => onChangePassword(evt.currentTarget.value)}
            />
            <a className='main-form__glass'>
              <img src={homeGlass} alt='' onClick={() => setIsShowPassword(!isShowPassword)} />
            </a>
            <label className='control-label' htmlFor='pass'>Password</label>
          </div>
          <button type='submit' className='button--blue sign-up__button'>
            {
              isLoading ? <Loader animation='BlueButtonLoader' height={32} /> : 'Sign Up with email'
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
                      <span className='second-link'>Sign up with facebook</span>
                    </a>
                  )
                }}
              />
          }
          <div className='sign-in__sign-up'>
            <span>Already have an account?</span>
            <a className='second-link' onClick={() => toggleModal('sign_in')}>Sign In</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
