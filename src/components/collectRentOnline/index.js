import React from 'react'
import { connect } from 'react-redux'

import MetaWrapper from '../common/wrappers/metaWrapper'
import BlueButton from '../common/buttons/blueButton'

import { collectFeaturesData } from '../../utils/utilityVariables'
import { landTwoTop, landTwoArr, landTwoImgRight3x, landTwoImgLeft3x, landTwoList, landTwoCheck, landTwoThought, landTwoWave } from '../../assets/images'
import { setModalMode } from '../../actions/auth'
import { auth } from '../../layouts/auth'

const CollectRentOne = ({ setModalMode }) => {
  return (
    <MetaWrapper
      title='Rentorr handles online payments automatically'
      description='Collecting rent is one of the worst parts of property management, but Rentorr can take care of it for you with automatic payment services.'
      keywords='renting your property, tenant management system, landlord and tenant, property management'
    >
      <div className='top-pages'>
        <div className='container'>
          <div className='row  justify-content-between top-pages__block-position'>
            <div className='col-lg-5 top-pages__text wow bounceInDown' data-wow-duration='2s'>
              <h1>Put Rent Collection on Auto-Pilot</h1>
              <p>When you invite tenants to pay rent using Rentorr, you&#x27;lll receive money directly to your bank account on time each month.</p>
              <BlueButton
                title='TRY IT FOR FREE'
                extraClass='wow bounceInLeft'
                onClick={() => setModalMode('sign_up')}
                disabled={auth.isAuthenticated()}
              />
            </div>
            <div className='col-lg-6 offset-lg-1 top-pages__image wow zoomIn'>
              <h1>Put Rent Collection on Auto-Pilot</h1>
              <img src={landTwoTop} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='what'>
        <div className='title-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 wow bounceInLeft'>
                <h3>What Goes in to Setting up Payments</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='feature'>
          <div className='container'>
            <div className='row'>
              <div className='feature__all justify-content-between'>
                {
                  collectFeaturesData.map((collectItem, index) => {
                    return (
                      <div key={index} className='feature__box col-lg-4 wow bounceInRight'>
                        <div className='feature__oval'>
                          <img src={collectItem.imgUrl} alt='oval' />
                        </div>
                        <div className='feature__text-position'>
                          <h4>{collectItem.title}</h4>
                          <p dangerouslySetInnerHTML={{ __html: collectItem.description }} />
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
      <div className='payment'>
        <div className='title-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 wow bounceInLeft'>
                <h3>Why is Rentorr the best choice for payment processing?</h3>
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
                    <img src={landTwoArr} alt='oval' />
                  </div>
                  <div className='skill-box__text-position'>
                    <h4>Effortless Collection</h4>
                    <p>Paying rent is one of the tensest parts of the relationship between landlord and tenant, but Rentorr eliminates in completely by automating the process. Plus, our property management software will give you insight into where payments are at, and will allow you to receive them in real time.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 offset-lg-2 wow fadeIn' data-wow-duration='2s'>
                <img src={landTwoImgRight3x} alt='img' className='start__img' />
              </div>
            </div>
            <div className='row center'>
              <div className='col-lg-4 offset-lg-4'>
                <div className='skill-box__item wow bounceInUp' data-wow-duration='2s'>
                  <div className='skill-box__oval'>
                    <img src={landTwoList} alt='oval' />
                  </div>
                  <div className='skill-box__text-position'>
                    <h4>Record Keeping</h4>
                    <p>One of the most mundane aspects of property management is keeping detailed records. Luckily, Rentorr does that for you, compiling all of the receipts for paid rent in one convenient place. Rentorr can even provide monthly break downs that include those one-time fees.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row end'>
              <div className='col-lg-5 img wow fadeIn' data-wow-duration='2s'>
                <img src={landTwoImgLeft3x} alt='img' />
              </div>
              <div className='col-lg-4 offset-lg-3 align-items-end d-flex'>
                <div className='skill-box__item wow bounceInRight' data-wow-duration='2s'>
                  <div className='skill-box__oval'>
                    <img src={landTwoCheck} alt='oval' />
                  </div>
                  <div className='skill-box__text-position'>
                    <h4>Building Credit for Tenants</h4>
                    <p>Why shouldn&#x27;t your tenants be rewarded for paying their rent on time? When they opt in for automatic payments with Rentorr, we automatically report those on-time payments to the credit bureau, thereby improving their credit history..</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='img-desc'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 img-desc__images wow bounceInLeft'>
              <h3>Don&#x27;t Sweat The Small Stuff</h3>
              <img src={landTwoThought} alt='img' />
            </div>
            <div className='col-lg-6 img-desc__text flex-column d-flex justify-content-center wow bounceInRight'>
              <h3>Don&#x27;t Sweat The Small Stuff</h3>
              <p>You&#x27;ve got enough on your plate managing property without having to worry about the details of your finances. That&#x27;s why we have partnered with Flutterwave to ensure all of our bank connections are completely safe. On top of that, we never keep your information, so you stay secure.</p>
              <div className='img-desc__logo wow bounceIn' data-wow-duration='2s'>
                <img src={landTwoWave} alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ready'>
        <div className='container'>
          <div className='ready__info wow slideInUp'>
            <h2 className='ready__title'>
              Ready to Start Using Rentorr?
            </h2>
            <p className='ready__desc'>
              Property management doesn&#x27;t have to feel like rocket science. Work with Rentorr to strike a balance that&#x27;s right for you.
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

export default connect('', mapDispatchToProps)(CollectRentOne)
