import React from 'react'
import { connect } from 'react-redux'

import history from '../../history'

import MetaWrapper from '../common/wrappers/metaWrapper'
import ApplicationPreview from '../common/modals/applicationPreview'
import BlueButton from '../common/buttons/blueButton'
import WhiteBorderButton from '../common/buttons/WhiteBorderButton'
import { featuresData, featurePeopleData, featureSearchesData, howData } from '../../utils/utilityVariables'
import {
  top,
  speed,
  check,
  pictures2,
  landOneHome,
  card,
  imagePayments,
  list,
  landOnePicture
} from '../../assets/images'
import { setModalMode } from '../../actions/auth'
import { toggleApplicationPreview } from '../../actions/landing'
import { auth } from '../../layouts/auth'

const Landlord = ({ isApplicationPreview, toggleApplicationPreview, setModalMode }) => {
  return (
    <MetaWrapper
      title='Manage Property Rentals Easily with Rentorr'
      description='Landlords and property management companies have a tough job, but Rentorr simplifies it through one simple property management system.'
      keywords='Property management, property rentals, property management software, tenant management system, landlord and tenant, renting your property, how to collect rent from tenants online, property manager services, property management system'
    >
      <div className='top-pages'>
        <div className='container'>
          <div className='row justify-content-between top-pages__block-position'>
            <div className='col-lg-6 top-pages__text wow bounceInDown' data-wow-duration='2s'>
              <h1>Property Management <br /> Made Easy</h1>
              <p>
                Managing your property rentals is simpler than ever with Rentorr. Our property management software means you can take a hands off approach while still effectively managing your tenants and properties.
              </p>
              <BlueButton
                title='RENT YOUR HOME'
                extraClass='wow bounceInLeft'
                duration='2s'
                onClick={() => setModalMode('sign_up')}
                disabled={auth.isAuthenticated()}
              />
            </div>
            <div className='col-lg-6 top-pages__image wow zoomIn'>
              <h1>Property Management <br /> Made Easy</h1>
              <img src={top} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='report'>
        <div className='image-info'>
          <div className='container'>
            <div className='row revers'>
              <div className='col-lg-6 offset-lg-1 image-info__text wow bounceInUp' data-wow-duration='1.5s'>
                <h3>Comprehensive Screening Reports</h3>
                <p>Make an informed decision before choosing a tenant with a comprehensive report.</p>
                <div className='image-info__two wow bounceInRight'>
                  <BlueButton
                    title='START SCREENING'
                    extraClass=''
                    onClick={() => history.push('/landlord/screening')}
                  />
                  <WhiteBorderButton
                    title='View example application'
                    extraClass=''
                    onClick={() => toggleApplicationPreview(true)}
                  />
                </div>
              </div>
              <div className='col-lg-5 offset-lg-0 image-info__img  wow bounceInLeft' data-wow-duration='1.5s'>
                <h3>Comprehensive Screening Reports</h3>
                <img src={speed} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='feature'>
          <div className='container'>
            <div className='row'>
              <div className='feature__all justify-content-between'>
                {
                  featuresData.map((feature, index) => {
                    return (
                      <div className='feature__box col-lg-4 wow bounceInRight' key={index}>
                        <div className='feature__oval'>
                          <img src={feature.imgUrl} alt='oval' />
                        </div>
                        <div className='feature__text-position'>
                          <h4>{feature.title}</h4>
                          <p dangerouslySetInnerHTML={{ __html: feature.description }} />
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
      <div className='rent'>
        <div className='paragraf'>
          <div className='container'>
            <div className='row'>
              <div className='paragraf__box col-lg-6 wow bounceInUp'>
                <h3>Automated Rent Collection</h3>
                <p>
                  Stop wondering how to collect rent from tenants online and make it happen with Rentorr. Payments are automatically sent to your bank account, and we&#x27;ll even take care of collecting late fees.
                </p>
                <div className='paragraf__button wow bounceInLeft'>
                  <BlueButton
                    title='START COLLECTING RENT'
                    extraClass=''
                    onClick={() => history.push('/landlord/collect-rent-online')}
                  />
                </div>
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
                    <img src={landOneHome} alt='oval' />
                  </div>
                  <div className='skill-box__text-position'>
                    <h4>Automated Late Fee Collection</h4>
                    <p>The chances of tenants missing automated payments is slim, but if it does happen, our property manager services will automatically collect the appropriate late fees for you.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 offset-lg-2 wow fadeIn' data-wow-duration='2s'>
                <img src={imagePayments} className='start__img' alt='img' />
              </div>
            </div>
            <div className='row center'>
              <div className='col-lg-4 offset-lg-4'>
                <div className='skill-box__item wow bounceInUp' data-wow-duration='2s'>
                  <div className='skill-box__oval'>
                    <img src={card} alt='oval' />
                  </div>
                  <div className='skill-box__text-position'>
                    <h4>Flexible Rent Collection</h4>
                    <p>Gone are the days of knocking on doors and making phone calls to ensure you get your rent payment-now Rentorr takes care of it for you, so you can enjoy more flexibility.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row end'>
              <div className='col-lg-5 img wow fadeIn' data-wow-duration='2s'>
                <img src={pictures2} alt='img' />
              </div>
              <div className='col-lg-4 offset-lg-3 align-items-end d-flex'>
                <div className='skill-box__item wow bounceInRight' data-wow-duration='2s'>
                  <div className='skill-box__oval'>
                    <img src={check} alt='oval' />
                  </div>
                  <div className='skill-box__text-position'>
                    <h4>Effortless Cash Flow</h4>
                    <p>Not only will you receive the rent payments from your tenants as they come in, but you&#x27;ll also be able to check on the status of each individual tenant from a single dashboard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='list'>
        <div className='image-info'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 offset-lg-0 image-info__text wow bounceInUp' data-wow-duration='1.5s'>
                <h3>List and Manage Your Property</h3>
                <p>
                  Rentorr is here to help with property rentals from start to finish. That means we begin by assisting you in creating quality listings. From there, you can manage your properties and even view your cash flow all from our property management system.
                </p>
                <div className='image-info__two wow bounceInRight'>
                  <BlueButton
                    title='List your property'
                    extraClass=''
                    onClick={() => history.push('/landlord/list-property')}
                  />
                </div>
              </div>
              <div className='col-lg-6 offset-lg-0 image-info__img  wow bounceInLeft' data-wow-duration='1.5s'>
                <h3>List and Manage Your Property</h3>
                <img src={list} alt='img' />
              </div>
            </div>
          </div>
        </div>
        <div className='feature'>
          <div className='container'>
            <div className='row'>
              <div className='feature__all justify-content-between'>
                {
                  featurePeopleData.map((featurePeople, index) => {
                    return (
                      <div key={index} className='feature__box col-lg-4 wow bounceInRight'>
                        <div className='feature__oval'>
                          <img src={featurePeople.imgUrl} alt='oval' />
                        </div>
                        <div className='feature__text-position'>
                          <h4>{featurePeople.title}</h4>
                          <p dangerouslySetInnerHTML={{ __html: featurePeople.description }} />
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
      <div className='list-white'>
        <div className='image-info'>
          <div className='container'>
            <div className='row revers'>
              <div className='col-lg-6 offset-lg-0 image-info__text wow bounceInUp' data-wow-duration='1.5s'>
                <h3>Scalable &amp; Flexible Property Management</h3>
                <p>Whether you&#x27;ree an individual landlord or a property management company, our services will automate a great deal of your work and make management a breeze.</p>
                <div className='image-info__two wow bounceInRight'>
                  <BlueButton
                    title='Manage your Property'
                    extraClass=''
                    onClick={() => setModalMode('sign_up')}
                    disabled={auth.isAuthenticated()}
                  />
                </div>
              </div>
              <div className='col-lg-6 offset-lg-0 image-info__img  wow bounceInLeft' data-wow-duration='1.5s'>
                <h3>Scalable &amp; Flexible Property Management</h3>
                <img src={landOnePicture} alt='img' />
              </div>
            </div>
          </div>
        </div>
        <div className='feature'>
          <div className='container'>
            <div className='row'>
              <div className='feature__all justify-content-between'>
                {
                  featureSearchesData.map((featureSearch, index) => {
                    return (
                      <div key={index} className='feature__box col-lg-4 wow bounceInRight'>
                        <div className='feature__oval'>
                          <img src={featureSearch.imgUrl} alt='oval' />
                        </div>
                        <div className='feature__text-position'>
                          <h4>{featureSearch.title}</h4>
                          <p dangerouslySetInnerHTML={{ __html: featureSearch.description }} />
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
      <div className='how-work-block'>
        <div className='how-work'>
          <div className='container'>
            <div className='title-section'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6 wow bounceInLeft'>
                    <h3>Here&#x27;s How It Works</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='how-work__anim wow fadeIn' data-wow-duration='2s'>
              <div className='row first-row'>
                {
                  howData.slice(0, 3).map((how, index) => {
                    return (
                      <div key={index} className='col-lg-4 how-work__item-position how-work__item-position-one'>
                        <div className='how-work__item'>
                          <div className='how-work__item--line'>
                            <div className='how-work__img'>
                              <img src={how.imgUrl} alt='oval' />
                            </div>
                            <div className='how-work__line' />
                          </div>
                          <div className='how-work__text-position'>
                            <p>{how.title}</p>
                            <span dangerouslySetInnerHTML={{ __html: how.description }} />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className='row second-row'>
                {
                  howData.slice(3, 6).map((how, index) => {
                    return (
                      <div key={index} className='col-lg-4 how-work__item-position how-work__item-position-two'>
                        <div className='how-work__item'>
                          <div className='how-work__item--line'>
                            <div className='how-work__img'>
                              <img src={how.imgUrl} alt='oval' />
                            </div>
                            <div className='how-work__line' />
                          </div>
                          <div className='how-work__text-position'>
                            <p>{how.title}</p>
                            <span dangerouslySetInnerHTML={{ __html: how.description }} />
                          </div>
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
            <h2 className='ready__title'>
              Ready to Land Great Tenants?
            </h2>
            <p className='ready__desc'>
              Simply write your listing then sit back and relax while Rentorr delivers the best possible applicants.
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
      <ApplicationPreview
        isApplicationPreview={isApplicationPreview}
        toggleApplicationPreview={toggleApplicationPreview}
      />
    </MetaWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isApplicationPreview: state.landing.isApplicationPreview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleApplicationPreview: (status) => {
      dispatch(toggleApplicationPreview(status))
    },
    setModalMode: (mode) => {
      dispatch(setModalMode(mode))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landlord)
