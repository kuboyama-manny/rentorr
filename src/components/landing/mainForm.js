import React, { useState } from 'react'

import Loader from '../../animation/loader'
import { mainFormItems } from '../../utils/utilityVariables'
import { homeGlass, top } from '../../assets/images'
import { auth } from '../../layouts/auth'

const MainForm = ({ screenStatus, setScreenStatus, isLoading, signUp }) => {
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
      password
    }
    signUp(data)
  }

  return (
    <div className={`main-form ${screenStatus === 'main_form' ? 'main-form-open' : ''}`}>
      <div className='container-box-full main-form__close-position'>
        <a onClick={() => setScreenStatus('default')} />
      </div>
      <div className='container'>
        <div className='row main-form__block-position'>
          <div className='col-lg-6 main-form__left'>
            <h3>List and Manage <span style={{ color: '#1a5dc6' }}>Your</span> Property</h3>
            <p>List on Rentorr.com, accept applications and request screenings for all potential tenants.</p>
            <ul>
              {
                mainFormItems.map((item, index) => {
                  return (
                    <li key={index} className='main-form__item-li'>{item}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className={`col-lg-6 main-form__right ${auth.isAuthenticated() ? 'is-authenticated' : ''}`}>
            {
              auth.isAuthenticated()
                ? <img src={top} alt='' />
                : <>
                  <h3>Join For Free</h3>
                  <form className='main-form__regist' onSubmit={formSubmit}>
                    <div className='main-form__first-row'>
                      <div className={`field-wrap ${firstName ? 'has-val' : ''} ${isFirstNameFocus ? 'is-focused' : ''}`}>
                        <input
                          className='form-control main-form__name-input'
                          id='name1'
                          name='name'
                          type='text'
                          value={firstName}
                          onFocus={() => setFirstNameFocus(true)}
                          onBlur={() => setFirstNameFocus(false)}
                          onChange={(evt) => onChangeFirstName(evt.currentTarget.value)}
                        />
                        <label className='control-label' htmlFor='name1'>First Name</label>
                      </div>
                      <div className={`field-wrap ${lastName ? 'has-val' : ''} ${isLastNameFocus ? 'is-focused' : ''}`}>
                        <input
                          className='form-control main-form__name-input'
                          id='last-name1'
                          name='last-name'
                          type='text'
                          value={lastName}
                          onFocus={() => setLastNameFocus(true)}
                          onBlur={() => setLastNameFocus(false)}
                          onChange={(evt) => onChangeLastName(evt.currentTarget.value)}
                        />
                        <label className='control-label' htmlFor='last-name1'>Last Name</label>
                      </div>
                    </div>
                    <div className={`field-wrap ${email ? 'has-val' : ''} ${isEmailFocus ? 'is-focused' : ''}`}>
                      <input
                        className='form-control main-form__valid'
                        placeholder=' '
                        id='email3'
                        name='pass'
                        required
                        type='email'
                        value={email}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        onChange={(evt) => onChangeEmail(evt.currentTarget.value)}
                      />
                      <label className='control-label main-form__valid-label' htmlFor='email3'>Email</label>
                    </div>
                    <div className={`field-wrap ${password ? 'has-val' : ''} ${isPasswordFocus ? 'is-focused' : ''}`}>
                      <input
                        className='form-control main-form__repass'
                        id='pass3'
                        name='pass'
                        type={`${isShowPassword ? 'text' : 'password'}`}
                        value={password}
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                        onChange={(evt) => onChangePassword(evt.currentTarget.value)}
                      />
                      <a className='main-form__glass'>
                        <img src={homeGlass} alt='' onClick={() => setIsShowPassword(!isShowPassword)} />
                      </a>
                      <label className='control-label' htmlFor='pass3'>Password</label>
                    </div>
                    <div className='main-form__checkbox-position'>
                      <input
                        className='main-form__checkbox'
                        id='main-form__checkbox'
                        type='checkbox'
                        value='value'
                      />
                      <label className='main-form__checkbox-label' htmlFor='main-form__checkbox'>
                        I agree to the Terms and Conditions and allow Rentorr to contact me by email.
                      </label>
                    </div>
                    <button className='button--blue' type='submit'>
                      {
                        isLoading ? <Loader animation='BlueButtonLoader' height={32} /> : 'SIGN UP'
                      }
                    </button>
                  </form>
                </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainForm
