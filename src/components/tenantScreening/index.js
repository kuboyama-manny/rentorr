import React from 'react'
import { connect } from 'react-redux'

import MetaWrapper from '../common/wrappers/metaWrapper'
import BlueButton from '../common/buttons/blueButton'
import { screeningFeatureData } from '../../utils/utilityVariables'
import { landThreeTop, landThreeImagesR, landThreeAdult, landThreeCompuscanOrg } from '../../assets/images'
import { setModalMode } from '../../actions/auth'
import { auth } from '../../layouts/auth'

const TenantScreening = ({ setModalMode }) => {
  return (
    <MetaWrapper
      title='Rent Your Property with Credible Online Applications'
      description='Finding the right tenant can take time, but Rentorr cuts down on that time significantly by making the application and screening simple.'
      keywords='tenant management system, rental applications, tenant screening, renting your property, landlord and tenant'
    >
      <div className='top-pages'>
        <div className='container'>
          <div className='row  justify-content-between top-pages__block-position'>
            <div className='col-lg-6 top-pages__text wow bounceInDown' data-wow-duration='2s'>
              <h1>Online Rental Applications Made Easy</h1>
              <p>No more paper cuts or illegible handwriting to contend with when you use Rentorr&#x27;s tenant management system. Our time-stamped digital applications will allow you to track and compare all of the potential tenants.</p>
              <BlueButton
                title='RENT YOUR HOME'
                extraClass='wow bounceInLeft'
                duration='2s'
                onClick={() => setModalMode('sign_up')}
                disabled={auth.isAuthenticated()}
              />
            </div>
            <div className='col-lg-6 top-pages__image wow zoomIn'>
              <h1>Online Rental Applications Made Easy</h1>
              <img src={landThreeTop} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='title-img'>
        <div className='container'>
          <div className='row  title-img__block-position'>
            <div className='col-lg-6 title-img__text wow bounceInLeft'>
              <h3>Use Your Listing to Screen Tenants and Accept Applications</h3>
              <p>Capitalize on the heat of the moment, allow potential tenants to apply right from your listing. Rental applications will be time-stamped and complete with financial screening information so you can make an informed decision.</p>
            </div>
            <div className='col-lg-6 title-img__img d-flex justify-content-end wow bounceInRight'>
              <h3>Use Your Listing to Screen Tenants and Accept Applications</h3>
              <img src={landThreeImagesR} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='img-desc'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 img-desc__images wow bounceInLeft'>
              <h3>High Quality Security Protects Your Information</h3>
              <img src={landThreeAdult} alt='img' />
            </div>
            <div className='col-lg-6 img-desc__text flex-column d-flex justify-content-center wow bounceInRight'>
              <h3>High Quality Security Protects Your Information</h3>
              <p>Rentorr understands that it takes a lot of trust to supply your personal information. That&#x27;s why we encrypt it with the same system that banks use. What&#x27;s more, we&#x27;ve partnered with Compuscan to ensure that all credit information is not only accurate, but also secure.</p>
              <div className='img-desc__logo wow bounceIn' data-wow-duration='2s'>
                <img src={landThreeCompuscanOrg} alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='title-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 wow bounceInLeft'>
              <h3>What Sets Rentorr Tenant Screeing Apart?</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='feature'>
        <div className='container'>
          <div className='row'>
            <div className='feature__all justify-content-between'>
              {
                screeningFeatureData.map((item, index) => {
                  return (
                    <div key={index} className='feature__box col-lg-3 wow bounceInRight'>
                      <div className='feature__oval'>
                        <img src={item.imgUrl} alt='oval' />
                      </div>
                      <div className='feature__text-position'>
                        <h4>{item.title}</h4>
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
      <div className='ready'>
        <div className='container'>
          <div className='ready__info wow slideInUp'>
            <h2 className='ready__title'>Get to Work with Rentorr</h2>
            <p className='ready__desc'>Finding the right tenant has never been easier or more autonomous than with Rentorr, so capitalize on this service.</p>
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

export default connect('', mapDispatchToProps)(TenantScreening)
