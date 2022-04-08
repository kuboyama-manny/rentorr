import React, { useState } from 'react'

import Loader from '../../../animation/loader'
import history from '../../../history'
import { notificationMessage } from '../../../utils/utilityFunctions'
import { auth } from '../../../layouts/auth'

const SelectRole = ({ isOpen, toggleModal, setUserRole, isLoading }) => {
  const [role, setRole] = useState('')

  const formSubmit = (e) => {
    e.preventDefault()
    const data = {
      role: role,
      email: auth.getEmail()
    }
    if (!role) {
      notificationMessage('error', 'Please select default role!')
    } else {
      setUserRole(data)
    }
  }

  const goToTermsAndPrivacy = (field) => {
    toggleModal('')
    history.push(field)
  }

  return (
    <div className={`select-role ${isOpen ? 'select-role-active' : ''}`}>
      <div className='sign-in__box-shadow' onClick={() => toggleModal('')} />
      <div className='sign-in__block'>
        <div className='sign-in__first-row'>
          <h3>Select your role</h3>
          <div className='sign-in__close-position'>
            <a onClick={() => toggleModal('')} />
          </div>
        </div>
        <div className='select-role__desc'>
          <p>What is your purpose of using Rentorr?</p>
          <span>You will be able to select other role via settings in your profile</span>
        </div>
        <form className='select-role__form' onSubmit={formSubmit}>
          <input
            className='select-role__input'
            id='select-role__input'
            name='LANDLORD'
            type='radio'
            checked={role === 'LANDLORD'}
            value='LANDLORD'
            onChange={(e) => setRole(e.currentTarget.value)}
          />
          <label className='select-role__input-label' htmlFor='select-role__input'>
            I’m Landlord, looking for a tenants
          </label>
          <input
            className='select-role__input'
            id='select-role__input-2'
            name='TENANT'
            type='radio'
            checked={role === 'TENANT'}
            value='TENANT'
            onChange={(e) => setRole(e.currentTarget.value)}
          />
          <label className='select-role__input-label' htmlFor='select-role__input-2'>
            I’m Tenant, looking for place to rent
          </label>
          <button className='button--blue select-role__button' onClick={formSubmit}>
            {
              isLoading ? <Loader animation='BlueButtonLoader' height={32} /> : 'select'
            }
          </button>
        </form>
        <p className='forgot-pass__desc'>
          By signing up you agree on Rentorr’s <a className='second-link' onClick={() => goToTermsAndPrivacy('/terms')}>Terms of use</a>&nbsp;
          and&nbsp;<a className='second-link' onClick={() => goToTermsAndPrivacy('/privacy')}>Privacy policy.</a>
        </p>
      </div>
    </div>
  )
}

export default SelectRole
