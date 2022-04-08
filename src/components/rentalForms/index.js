import React from 'react'
import { connect } from 'react-redux'

import MetaWrapper from '../common/wrappers/metaWrapper'
import BlueButton from '../common/buttons/blueButton'
import { landFourTop, landFourMap, landFourBeautiful } from '../../assets/images'
import { setModalMode } from '../../actions/auth'
import { auth } from '../../layouts/auth'

const RentalForms = ({ setModalMode }) => {
  return (
    <MetaWrapper
      title='Stay Legal with All of The Right Rental Forms '
      description='There are a number of documents associated with renting a property, and they all must comply with state law. Rentorr ensures that you do just that.'
      keywords='Rentorr'
    >
      <div className='top-pages'>
        <div className='container'>
          <div className='row  justify-content-between top-pages__block-position'>
            <div className='col-lg-6 top-pages__text wow bounceInDown' data-wow-duration='2s'>
              <h1>Be Save with Lawyer-Approved Rental Agreements</h1>
              <p>We have worked with real estate lawyers in your area so you don&#x27;t have to, and have developed the correct forms so you&#x27;re protected every time you embark on a new journey renting your property.</p>
              <BlueButton
                title='TRY IT FOR FREE'
                extraClass='wow bounceInLeft'
                duration='2s'
                onClick={() => setModalMode('sign_up')}
                disabled={auth.isAuthenticated()}
              />
            </div>
            <div className='col-lg-6 top-pages__image wow zoomIn'>
              <h1>Be Save with Lawyer-Approved Rental Agreements</h1>
              <img src={landFourTop} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='paragraf'>
        <div className='container'>
          <div className='row'>
            <div className='paragraf__box col-lg-6 wow bounceInUp'>
              <h3>Get access to rental forms for free</h3>
              <p>We have a vast library of online forms that you can view any time of the day or night as part of our property manager services. What&#x27;s more, all of these forms comply with state laws so you&#x27;re keeping your business safe.</p>
              <div className='paragraf__button wow bounceInLeft' />
            </div>
          </div>
        </div>
      </div>
      <div className='map'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 offset-lg-3 wow fadeInUp' data-wow-duration='2s'>
              <img src={landFourMap} alt='maps' />
            </div>
          </div>
        </div>
      </div>
      <div className='author'>
        <div className='container'>
          <div className='row align-content-center author__block-position'>
            <div className='col-lg-6'>
              <div className='author__text-box wow bounceInLeft'>
                <h3>Get a Rental Forms Package Made Just for You</h3>
                <p>Rental agreements are just the tip of the iceberg when it comes to landlord and tenant legal forms. Our comprehensive offering of rental forms protects you in this early stage, but also later on. <br />  <br /></p>
                <p>During the course of a rental, you might encounter a number of property management issues that require legal documents. Eviction notices, maintenance requests, and everything in between can be found with Rentorr. <br />  <br /></p>
                <p>When it comes time for the current tenant to move out, we have all of the necessary forms to help with that process, too. We'll help you make sure that deposits are returned and you're ready to rent to the next tenant. <br />  <br /></p>
              </div>
            </div>
            <div className='col-lg-6 img wow bounceInRight'>
              <h3>Get a Rental Forms Package Made Just for You</h3>
              <img src={landFourBeautiful} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='ready'>
        <div className='container'>
          <div className='ready__info wow slideInUp'>
            <h2 className='ready__title'>
              Stay Safe with Rentorr
            </h2>
            <p className='ready__desc'>
              The world of property management can be murky and confusing. See through all of that haze with Rentorr&#x27;s property management services.
            </p>
            <BlueButton
              title='SIGN UP FOR FREE'
              extraClass=''
              onClick={() => setModalMode('sign_up')}
              disabled={auth.isAuthenticated()}
            />
          </div>
        </div>
      </div>
    </MetaWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModalMode: (mode) => {
      dispatch(setModalMode(mode))
    }
  }
}

export default connect('', mapDispatchToProps)(RentalForms)
