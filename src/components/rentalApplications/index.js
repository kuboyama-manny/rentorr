import React from 'react'
import { connect } from 'react-redux'

import MetaWrapper from '../common/wrappers/metaWrapper'
import BlueButton from '../common/buttons/blueButton'
import { rentalApplicationsFeatureData } from '../../utils/utilityVariables'
import {
  rentalApplicationsTop,
  rentalApplicationsOne,
  rentalApplicationsTwo,
  rentalApplicationsThree,
  rentalApplicationsText1,
  rentalApplicationsText2,
  landThreeAdult,
  landThreeCompuscanOrg
} from '../../assets/images'
import { setModalMode } from '../../actions/auth'
import { auth } from '../../layouts/auth'

const RentalApplications = ({ setModalMode }) => {
  return (
    <MetaWrapper
      title='Apply More Easily for Property Rentals'
      description='Filling out rental applications is tedious, but Rentorr can make it less so when you fill out a single profile to send to multiple landlords at once.'
      keywords='Rentorr'
    >
      <div className='top-pages'>
        <div className='container'>
          <div className='row d-flex flex-row-reverse justify-content-between top-pages__block-position'>
            <div className='col-lg-6 top-pages__text wow bounceInDown' data-wow-duration='2s'>
              <h1>Streamline the Online Application Process</h1>
              <p>
                Stop filling out countless rental applications and make the system work for you instead. Fill out a single application and save it to your profile. Then you can instantly apply to your favorite rentals for free.
              </p>
              <BlueButton
                title='Start your application'
                extraClass='wow bounceInLeft'
                duration='2s'
                onClick={() => setModalMode('sign_up')}
                disabled={auth.isAuthenticated()}
              />
            </div>
            <div className='col-lg-6 top-pages__image wow zoomIn'>
              <h1>Streamline the Online Application Process</h1>
              <img src={rentalApplicationsTop} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='paragraf'>
        <div className='container'>
          <div className='row'>
            <div className='paragraf__box col-lg-6 wow bounceInUp'>
              <h3>Comprehensive Renter Profile</h3>
              <p>
                Don&#x27;t let those application fees pile up. Pay a single fee, then share your profile with any landlord whose property rentals you&#x27;re interested in.
              </p>
              <div className='paragraf__button wow bounceInLeft' />
            </div>
          </div>
        </div>
      </div>
      <div className='skill-box'>
        <div className='container'>
          <div className='row start'>
            <div className='col-lg-4 align-items-center d-flex'>
              <div className='skill-box__item wow bounceInLeft' data-wow-duration='2s'>
                <div className='skill-box__oval'>
                  <img src={rentalApplicationsOne} alt='oval' />
                </div>
                <div className='skill-box__text-position'>
                  <h4>Verified Identity</h4>
                  <p>We make sure that you are who you say you are, so landlords have a sense of trust toward you right from the start.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 offset-lg-2 wow fadeIn' data-wow-duration='2s'>
              <img src={rentalApplicationsText1} alt='' className='start__img' />
            </div>
          </div>
          <div className='row center'>
            <div className='col-lg-4 offset-lg-4'>
              <div className='skill-box__item wow bounceInUp' data-wow-duration='2s'>
                <div className='skill-box__oval'>
                  <img src={rentalApplicationsTwo} alt='oval' />
                </div>
                <div className='skill-box__text-position'>
                  <h4>Credit Check</h4>
                  <p>
                    You&#x27;re more than just a credit score, which is why we provide detailed financial histories to landlords, so they can get a whole view with your tenant application form.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row end'>
            <div className='col-lg-5 img wow fadeIn' data-wow-duration='2s'>
              <img src={rentalApplicationsText2} alt='img' />
            </div>
            <div className='col-lg-4 offset-lg-3 align-items-end d-flex'>
              <div className='skill-box__item wow bounceInRight' data-wow-duration='2s'>
                <div className='skill-box__oval'>
                  <img src={rentalApplicationsThree} alt='oval' />
                </div>
                <div className='skill-box__text-position'>
                  <h4>Rental History</h4>
                  <p>You won&#x27;t have to recount past addresses and landlords over and over again with Rentorr- simply do it once, then you&#x27;re good to go.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='title-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 wow bounceInLeft'>
              <h3>Why Is Rentorr Tenant Screen The Best?</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='feature'>
        <div className='container'>
          <div className='row'>
            <div className='feature__all justify-content-between'>
              {
                rentalApplicationsFeatureData.map((item, index) => {
                  return (
                    <div key={index} className='feature__box col-lg-3 wow bounceInRight'>
                      <div className='feature__oval'>
                        <img src={item.imgUrl} alt='oval' />
                      </div>
                      <div className='feature__text-position'>
                        <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p dangerouslySetInnerHTML={{ __html: item.description }} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className='img-desc'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 img-desc__images wow bounceInLeft'>
              <h3>High Quality Security Keeps You Protected</h3>
              <img src={landThreeAdult} alt='img' />
            </div>
            <div className='col-lg-6 img-desc__text flex-column d-flex justify-content-center wow bounceInRight'>
              <h3>High Quality Security Keeps You Protected</h3>
              <p>
                We understand that it can be nerve-wracking handing out your personal information, and that&#x27;s why Rentorr uses the same encryption method as all banks to protect your information from security breaches. We also work with Compuscan to ensure the credit information we collect is accurate.
              </p>
              <div className='img-desc__logo wow bounceIn' data-wow-duration='2s'>
                <img src={landThreeCompuscanOrg} alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ready'>
        <div className='container'>
          <div className='ready__info wow slideInUp'>
            <h2 className='ready__title'>
              Ready to Use Rentorr?
            </h2>
            <p className='ready__desc'>
              You won&#x27;t believe how simple it is to apply to the rentals of your dreams with Rentorr-get started today to see for yourself.
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

export default connect('', mapDispatchToProps)(RentalApplications)
