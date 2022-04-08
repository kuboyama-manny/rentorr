import React from 'react'

import Loader from '../../../animation/loader'

const CheckEmail = ({ isOpen, toggleModal, isLoading, signUpEmail, resendEmail }) => {
  const formSubmit = () => {
    const data = {
      email: signUpEmail
    }
    resendEmail(data)
  }
  return (
    <div className={`check-email ${isOpen ? 'check-email-active' : ''}`}>
      <div className='sign-in__box-shadow' onClick={() => toggleModal('')} />
      <div className='sign-in__block'>
        <div className='sign-in__first-row'>
          <h3>Great, check your inbox</h3>
          <div className='sign-in__close-position'>
            <a onClick={() => toggleModal('')} />
          </div>
        </div>
        <div className='check-email__info'>
          <p>Check your email to finish signing up. We sent a signup link to you at: <span>{signUpEmail}</span></p>
        </div>
        <button className='button--blue' onClick={formSubmit}>
          {
            isLoading ? <Loader animation='BlueButtonLoader' height={32} /> : 'Resend email'
          }
        </button>
      </div>
    </div>
  )
}

export default CheckEmail
