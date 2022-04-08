import React, { useState } from 'react'
import { connect } from 'react-redux'

import MetaWrapper from '../common/wrappers/metaWrapper'
import Loader from '../../animation/loader'
import { userContact } from '../../actions/landing'
import { keepInTouchDver, keepInTouchDverSmall } from '../../assets/images'

const KeepInTouch = ({ userContact, isLoading }) => {
  const [email, onChangeEmail] = useState('')
  const [message, onChangeMessage] = useState('')
  const [isEmailFocus, setEmailFocus] = useState(false)
  const [isMessageFocus, setMessageFocus] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: email,
      message: message
    }
    userContact(data)
    onChangeEmail('')
    onChangeMessage('')
  }

  return (
    <MetaWrapper
      title='Contact Rentorr'
      description='Rentorr'
      keywords='Rentorr'
    >
      <div className='container keep-in-touch__container'>
        <div className='row keep-in-touch__block-position'>
          <div className='col-lg-6 keep-in-touch__left'>
            <h1>Keep in touch</h1>
            <p>If you need our help with your user account, have a questions about how to use the platform or are experiencing technical difficulties, please do not hesistate to contact us</p>
            <form className='sign-in__login' onSubmit={handleSubmit}>
              <div className={`field-wrap ${email ? 'has-val' : ''} ${isEmailFocus ? 'is-focused' : ''}`}>
                <input
                  className='form-control sign-in__valid'
                  placeholder=' '
                  id='email5'
                  name='pass'
                  required
                  type='email'
                  value={email}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  onChange={(evt) => onChangeEmail(evt.currentTarget.value)}
                />
                <label className='control-label sign-in__valid-label' htmlFor='email5'>Email</label>
              </div>
              <div className={`field-wrap ${message ? 'has-val' : ''} ${isMessageFocus ? 'is-focused' : ''}`}>
                <textarea
                  className='form-control sign-in__repass'
                  id='message'
                  name='message'
                  value={message}
                  required
                  onFocus={() => setMessageFocus(true)}
                  onBlur={() => setMessageFocus(false)}
                  onChange={(evt) => onChangeMessage(evt.currentTarget.value)}
                />
                <label className='control-label' htmlFor='message'>Message</label>
              </div>
              <button type='submit' className='button--blue keep-in-touch__button'>
                {
                  isLoading ? <Loader animation='BlueButtonLoader' height={32} /> : 'Send'
                }
              </button>
            </form>
          </div>
          <div className='col-lg-6 keep-in-touch__right'>
            <img className='keep-in-touch__img' src={keepInTouchDver} alt='' />
            <img className='keep-in-touch__small-img' src={keepInTouchDverSmall} alt='' />
            <div className='keep-in-touch__right-box'>
              <p>The Pinnacle Building, Cnr Burg & Castle Streets, Cape Town</p>
              <span>0861322223</span>
              <a className='second-link'>hello@rentorr.com</a>
            </div>
          </div>
        </div>
      </div>
    </MetaWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.landing.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userContact: (data) => {
      dispatch(userContact(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeepInTouch)
