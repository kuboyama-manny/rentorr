import React from 'react'
import { connect } from 'react-redux'

import MetaWrapper from '../common/wrappers/metaWrapper'
import BlueButton from '../common/buttons/blueButton'

import {
  maintenanceRequestsTop,
  maintenanceRequestsImagesR,
  maintenanceRequestsPlay,
  maintenanceRequestsWork,
  maintenanceRequestsDoc,
  maintenanceRequestsWork2,
  maintenanceRequestsMus
} from '../../assets/images'
import { setModalMode } from '../../actions/auth'
import { auth } from '../../layouts/auth'

const MaintenanceRequests = ({ setModalMode }) => {
  return (
    <MetaWrapper
      title='Apply More Easily for Property Rentals'
      description='illing out rental applications is tedious, but Rentorr can make it less so when you fill out a single profile to send to multiple landlords at once.'
      keywords='Rentorr'
    >
      <div className='top-pages'>
        <div className='container'>
          <div className='row flex-row-reverse justify-content-between top-pages__block-position'>
            <div className='col-lg-6 top-pages__text wow bounceInDown' data-wow-duration='2s'>
              <h1>Don't Put in Extra Work Making Maintenance Requests</h1>
              <p>Easily input a request with our tenant management system, then track its progress. Access your history of resolved requests for maintenance to ensure you receive your deposit back when you move out.</p>
              <BlueButton
                title='TRY IT FOR FREE'
                extraClass='wow bounceInLeft'
                duration='2s'
                onClick={() => setModalMode('sign_up')}
                disabled={auth.isAuthenticated()}
              />
            </div>
            <div className='col-lg-6 top-pages__image wow zoomIn'>
              <h1>Don't Put in Extra Work Making Maintenance Requests</h1>
              <img src={maintenanceRequestsTop} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='title-img'>
          <div className='container'>
            <div className='row  title-img__block-position'>
              <div className='col-lg-6 title-img__text wow bounceInLeft'>
                <h3>Easily Communicate with Landlord to Resolve Issues</h3>
                <p>Landlord and tenant communications are notoriously difficult, but Rentorr makes them easier with transparent messaging. Talk through any problems in real time, and receive a prompt response thanks to our property management software notifications.</p>
              </div>
              <div className='col-lg-6 title-img__img d-flex justify-content-end wow bounceInRight'>
                <h3>Easily Communicate with Landlord to Resolve Issues</h3>
                <img src={maintenanceRequestsImagesR} alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='title-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 wow bounceInLeft'>
              <h3>How Are Rentorr Maintenance Requests Different?</h3>
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
                  <img src={maintenanceRequestsPlay} alt='oval' />
                </div>
                <div className='skill-box__text-position'>
                  <h4>Attach Photos and Videos</h4>
                  <p>Make the status of your issue clear by attaching photos and videos to your maintenance request so your landlord understands the problem at hand.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 offset-lg-2 wow fadeIn' data-wow-duration='2s'>
              <img src={maintenanceRequestsWork} alt='img' className='start__img' />
            </div>
          </div>
          <div className='row center'>
            <div className='col-lg-4 offset-lg-4'>
              <div className='skill-box__item wow bounceInUp' data-wow-duration='2s'>
                <div className='skill-box__oval'>
                  <img src={maintenanceRequestsDoc} alt='oval' />
                </div>
                <div className='skill-box__text-position'>
                  <h4>Acess Request History</h4>
                  <p>You can look through the archive of your resolved maintenance requests at any time to keep your own record of repairs that have been made in your property rentals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row end'>
            <div className='col-lg-5 img wow fadeIn' data-wow-duration='2s'>
              <img src={maintenanceRequestsWork2} alt='img' />
            </div>
            <div className='col-lg-4 offset-lg-3 align-items-end d-flex'>
              <div className='skill-box__item wow bounceInRight' data-wow-duration='2s'>
                <div className='skill-box__oval'>
                  <img src={maintenanceRequestsMus} alt='oval' />
                </div>
                <div className='skill-box__text-position'>
                  <h4>Get Notifications</h4>
                  <p>Rentorr will keep you updated on the status of your maintenance request, and will also send you a notification once your request has been completed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ready'>
        <div className='container'>
          <div className='ready__info wow slideInUp'>
            <h2 className='ready__title'>Get Issues Resolved Faster</h2>
            <p className='ready__desc'>
              Putting in a maintenance request doesn&#x27;t have to be a headache, complete it
              in seconds using Rentorr.
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

export default connect('', mapDispatchToProps)(MaintenanceRequests)
