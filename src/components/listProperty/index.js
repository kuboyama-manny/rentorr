import React from 'react'
import { connect } from 'react-redux'

import MetaWrapper from '../common/wrappers/metaWrapper'
import BlueButton from '../common/buttons/blueButton'

import { listPropertyData } from '../../utils/utilityVariables'
import { landLandOneMain, landOneOval, mapx } from '../../assets/images'
import { setModalMode } from '../../actions/auth'
import { auth } from '../../layouts/auth'

const ListProperty = ({ setModalMode }) => {
  return (
    <MetaWrapper
      title='Find Qualified Applicants with Quality Listings'
      description='You never get a second chance at a first impression, so list your property with Rentorr and catch the eye of every quality tenant.'
      keywords='Rentorr'
    >
      <div className='top-pages'>
        <div className='container'>
          <div className='row  justify-content-between top-pages__block-position'>
            <div className='col-lg-6 top-pages__text wow bounceInDown' data-wow-duration='2s'>
              <h1>Want Better Tenants? Start with Better Listings</h1>
              <p>
                The first part of Rentorr&#x27;s property management software walks you through listing creation so you can be sure you&#x27;ve included all of the details that high quality tenants care about.
              </p>
              <BlueButton
                title='TRY IT FOR FREE'
                extraClass='wow bounceInLeft'
                duration='2s'
                onClick={() => setModalMode('sign_up')}
                disabled={auth.isAuthenticated()}
              />
            </div>
            <div className='col-lg-6 top-pages__image wow zoomIn'>
              <h1>Want Better Tenants? Start with Better Listings</h1>
              <img src={landLandOneMain} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='paragraf'>
        <div className='container'>
          <div className='row'>
            <div className='paragraf__box col-lg-6 wow bounceInUp'>
              <h3>More Than Just Tools for Landlords, We&#x27;re also A Listing Service</h3>
              <p>
                Rentorr utilizes a partner network to make our property management services useful before
                your properties are even filled. Posting your listing across a wide range of services ensure more
                potential tenants become interested in renting your property.
              </p>
              <div className='paragraf__button wow bounceInLeft' />
            </div>
          </div>
        </div>
      </div>
      <div className='circle'>
        <div className='circle__position wow fadeInUp' data-wow-duration='2s'>
          <img src={landOneOval} alt='img' />
        </div>
      </div>
      <div className='apply'>
        <div className='apply__dots-position' />
        <div className='container'>
          <div className='row align-content-center flex-row-reverse'>
            <div className='col-lg-6 apply__title-position wow bounceInLeft'>
              <h3 className='apply__title'>Listings Include Integrated Applications</h3>
              <img src={mapx} alt='img' />
            </div>
            <div className='col-lg-6 apply__text-box-position'>
              <div className='apply__text-box wow bounceInRight'>
                <h3 className='apply__title'>Listings Include Integrated Applications</h3>
                <p className='apply__text'>
                  Sick of sifting through rental applications for tenants who aren&#x27;t qualified? We understand, and
                  that&#x27;s why our integrated service can help you see the best possible applicants faster when you
                  allow them to apply directly from your listing.
                </p>
                <a className='apply__link'>Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='what-land-one'>
        <div className='title-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 wow bounceInLeft'>
                <h3>What Makes Rentorr Different?</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='feature'>
          <div className='container'>
            <div className='row'>
              <div className='feature__all justify-content-between'>
                {
                  listPropertyData.map((item, index) => {
                    return (
                      <div key={index} className='feature__box col-lg-4 wow bounceInRight'>
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
      </div>
      <div className='ready'>
        <div className='container'>
          <div className='ready__info wow slideInUp'>
            <h2 className='ready__title'>Ready to Get Started?</h2>
            <p className='ready__desc'>
              Get the kinds of qualified applicants your property deserves when you created a specialized listing with Rentorr.
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

export default connect('', mapDispatchToProps)(ListProperty)
