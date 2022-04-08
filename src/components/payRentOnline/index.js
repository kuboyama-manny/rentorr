import React from 'react'
import { connect } from 'react-redux'

import MetaWrapper from '../common/wrappers/metaWrapper'
import BlueButton from '../common/buttons/blueButton'

import { payRentApplicationData } from '../../utils/utilityVariables'
import { payRentOnlineTopTenant2, landTwoArr, landTwoList, landTwoCheck, payRentOnlineRight, payRentOnlinePaymentLeft, landTwoThought, landTwoWave } from '../../assets/images'
import { setModalMode } from '../../actions/auth'
import { auth } from '../../layouts/auth'

const PayRentOnline = ({ setModalMode }) => {
  return (
    <MetaWrapper
      title='Pay Rent Online Automatically with Rentorr'
      description='Don’t stress over trying to remember when you’re rent is due each month. Set up automatic payments and Rentorr will take care of it for you.'
      keywords='Rentorr'
    >
      <div className='top-pages'>
        <div className='container'>
          <div className='row d-flex flex-row-reverse justify-content-between top-pages__block-position'>
            <div className='col-lg-6 top-pages__text wow bounceInDown' data-wow-duration='2s'>
              <h1>Get Rewarded Just for Paying Rent</h1>
              <p>Every landlord in the game is wondering how to collect rent from tenants online, and the answer is simple: Rentorr. We allow you to connect your credit card or bank account to pay your landlord automatically each month. These automatic payments help boost your credit score.</p>
              <BlueButton
                title='TRY IT FOR FREE'
                extraClass='wow bounceInLeft'
                data-wow-duration='2s'
                onClick={() => setModalMode('sign_up')}
                disabled={auth.isAuthenticated()}
              />
            </div>
            <div className='col-lg-6 top-pages__image wow zoomIn'>
              <h1>Get Rewarded Just for Paying Rent</h1>
              <img src={payRentOnlineTopTenant2} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='what'>
        <div className='container pay-rent-online__dots-position'>
          <div className='title-section'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 wow bounceInLeft'>
                  <h3>How to Set Up Automatic Payments</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='feature'>
            <div className='container'>
              <div className='row'>
                <div className='feature__all justify-content-between'>
                  {
                    payRentApplicationData.map((item, index) => {
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
      </div>
      <div className='pay-rent-online__payment'>
        <div className='title-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 wow bounceInLeft'>
                <h3>Why Choose Rentorr to Process Your Payments?</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='skill-box'>
          <div className='container'>
            <div className='row start'>
              <div className='col-lg-4 align-items-center d-flex'>
                <div className='box__item wow bounceInLeft' data-wow-duration='2s'>
                  <div className='skill-box__oval'>
                    <img src={landTwoArr} alt='oval' />
                  </div>
                  <div className='skill-box__text-position'>
                    <h4>Improved Credit Score</h4>
                    <p>You&#x27;re already paying you rent, so wouldn&#x27;t it be nice to get something in return? Rentorr reports your payment history so your credit goes up at the same time.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 offset-lg-2 wow fadeIn' data-wow-duration='2s'>
                <img src={payRentOnlineRight} alt='img' className='start__img' />
              </div>
            </div>
            <div className='row center'>
              <div className='col-lg-4 offset-lg-4'>
                <div className='skill-box__item wow bounceInUp' data-wow-duration='2s'>
                  <div className='skill-box__oval'>
                    <img src={landTwoList} alt='img' />
                  </div>
                  <div className='skill-box__text-position'>
                    <h4>Automated Options</h4>
                    <p>To err is human, but you don&#x27;t have to pay late fees just because you&#x27;ve forgotten the date anymore. Set up automatic rent payments and Rentorr will remind you before the money is withdrawn each month.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row end'>
              <div className='col-lg-5 img wow fadeIn' data-wow-duration='2s'>
                <img src={payRentOnlinePaymentLeft} alt='img' />
              </div>
              <div className='col-lg-4 offset-lg-3 align-items-end d-flex'>
                <div className='skill-box__item wow bounceInRight' data-wow-duration='2s'>
                  <div className='skill-box__oval'>
                    <img src={landTwoCheck} alt='oval' />
                  </div>
                  <div className='skill-box__text-position'>
                    <h4>Record Keeping</h4>
                    <p>When you pay your rent with Rentorr, we keep a detailed history of receipts for all of the fees that you&#x27;ve paid, so you don&#x27;t have to. You can access them anytime.</p>
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
              <h3>Don&#x27;t Worry-Your Information Is Safe with Us</h3>
              <img src={landTwoThought} alt='img' />
            </div>
            <div className='col-lg-6 img-desc__text flex-column d-flex justify-content-center wow bounceInRight'>
              <h3>Don&#x27;t Worry-Your Information Is Safe with Us</h3>
              <p>Rentorr doesn&#x27;t keep your information-even when you&#x27;ve set up recurring payments. Plus, we work with Flutterwave to ensure that all of our connections with banks are secure, and your payment information is never in jeopardy.</p>
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
            <h2 className='ready__title'>Let Rentorr Make Your Life Easier</h2>
            <p className='ready__desc'>Don&#x27;t stress over paying your rent each month, let Rentorr take care of that for you.</p>
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

export default connect('', mapDispatchToProps)(PayRentOnline)
