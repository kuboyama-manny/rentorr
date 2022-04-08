import React, { useState } from 'react'
import { connect } from 'react-redux'

import MainSearch from './mainSearch'
import MainForm from './mainForm'

import MetaWrapper from '../common/wrappers/metaWrapper'
import BlueButton from '../common/buttons/blueButton'
import WhiteButton from '../common/buttons/whiteButton'
import WhiteBorderButton from '../common/buttons/WhiteBorderButton'
import history from '../../history'
import { video, testMp4, home, dots, skobki1, tenantBg3x, tenantBg1x, map3x, mapx } from '../../assets/images'
import { possibilityData, citiesData, operationsData } from '../../utils/utilityVariables'

import { setModalMode, signUp } from '../../actions/auth'
import { auth } from '../../layouts/auth'

const Landing = ({ setModalMode, isAuthLoading, signUp }) => {
  const [screenStatus, setScreenStatus] = useState('default')
  return (
    <MetaWrapper
      title='Property management made simple for everyone with Rentorr'
      description='Property management made simple for everyone with Rentorr'
      keywords='property management, renting your property, rental applications, landlord and tenant, how to collect rent from tenants online, tenant application form, managing property, commercial property management, property rentals, manage property'
    >
      <div className='search'>
        <MainSearch
          screenStatus={screenStatus}
          setScreenStatus={setScreenStatus}
        />
        <MainForm
          screenStatus={screenStatus}
          setScreenStatus={setScreenStatus}
          isLoading={isAuthLoading}
          signUp={signUp}
        />
        <div className='search__one wow zoomIn'>
          <h2>Find Your <br /> New Home</h2>
          <BlueButton
            title='Search listings'
            extraClass='search-open'
            onClick={() => setScreenStatus('main_search')}
          />
          <BlueButton
            title='Learn more'
            extraClass='form-open'
            onClick={() => setScreenStatus('main_form')}
          />
        </div>
        <div className='search__two wow zoomIn'>
          <h2>List and Manage Your Property</h2>
          <BlueButton
            title='Learn more'
            extraClass='form-open'
            onClick={() => setScreenStatus('main_form')}
          />
        </div>
      </div>
      <div className='what'>
        <div className='container'>
          <div className='what__title wow bounceInLeft'>
            <h2 className='what__title'>What is Rentorr?</h2>
            <p className='what__desc'>We're changing the property management game for the better. <br /> Our easy-to-use
              application allows you to list properties, collect rental applications, and pay rent in one convenient
              space.
            </p>
          </div>
          <div className='what__video play wow zoomIn'>
            <video
              src={testMp4}
              poster={video}
              controls
              width='100%'
              id='video'
            />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='possibility'>
          <h2 className='possibility__header-title wow bounceInLeft'>With Rentorr you can…</h2>
          <div className='possibility__all'>
            {
              possibilityData.map((item, index) => {
                return (
                  <div key={index} className='possibility__item wow fadeInRight'>
                    <div className='possibility__img'>
                      <img src={item.imgUrl} alt='img' />
                    </div>
                    <div className='possibility__desc-position'>
                      <h3 className='possibility__title'>{item.title}</h3>
                      <p className='possibility__desc' dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='dots-center'>
          <img src={dots} alt='img' />
        </div>
      </div>
      <div className='question'>
        <div className='container'>
          <div className='row align-content-center'>
            <div className='col-lg-6 question__img-position wow bounceInLeft'>
              <h3 className='question__title'>So, you’re a landlord?</h3>
              <img src={home} alt='img' />
            </div>
            <div className='col-lg-6 question__box-position'>
              <div className='question__text-box wow bounceInRight'>
                <h3 className='question__title'>So, you’re a landlord?</h3>
                <strong className='question__desc'>
                  Residential and commercial property management are about to get a whole lot more manageable with Rentorr. Plus, <span>it's free to use*</span>!
                </strong>
                <p className='question__text'>
                  When you list your property rentals with Rentorr, you can accept applications, screen potential tenants, and even schedule showings all from a single dashboard. Once you select a tenant, it&#x27;s never been easier to manage property, either - accept online rent payments and handle maintenance requests from that same platform.
                </p>
                <WhiteButton
                  title='Learn more'
                  extraClass=''
                  onClick={() => history.push('/landlord')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='property'>
        <div className='container'>
          <div className='property__info wow bounceInUp'>
            <h2 className='property__title wow'>
              Property Management at Your Fingertips-For Free!
            </h2>
            <p className='property__desc'>
              Rentorr allows you to advertise your property, look through applications, screen possible tenants, and even accept online rent payments from a single, convenient place. No sneaky set up charges, no monthly fees to worry about, no catch-just convenience.
            </p>
            <ul>
              <li><span>List your property</span></li>
              <li><span>View online applications</span></li>
              <li><span>Enjoy thorough screening</span></li>
              <li><span>Choose applicants confidently</span></li>
              <li><span>Schedule showings</span></li>
              <li><span>Collect all payments online automatically</span></li>
              <li><span>Manage property remotely</span></li>
              <li><span>Manage maintenance requests easily</span></li>
              <li>
                <span onClick={() => history.push('/landlord/rental-forms')}>Access lawyer-approved rental forms</span>
              </li>
              <li><span>Rentability reports to increase rent</span></li>
            </ul>
            <div className='property__button wow bounceInLeft'>
              <BlueButton
                title='Get started'
                extraClass=''
                onClick={() => setModalMode('sign_up')}
                disabled={auth.isAuthenticated()}
              />
              <WhiteBorderButton
                title='More Details'
                extraClass=''
                onClick={() => history.push('/landlord/list-property')}
              />
            </div>
          </div>
          <div className='property__img-position wow bounceInRight'>
            <div className='property__img'>
              <span>
                <img src={skobki1} alt='skob' />
              </span>
              <p className='property__img-text'>
                Being an ER doctor and mother of 3, I don't get much time to manage my real estate properties. Rentorr saves me time, that's the time I get back to spend with my family.
              </p>
              <strong>Lerato M.</strong>
            </div>
          </div>
        </div>
      </div>
      <div className='tenat'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 tenat__block-position'>
              <div className='question__text-box wow bounceInUp'>
                <h3 className='question__title'>But I’m a tenant!</h3>
                <strong className='question__desc'>Great, we&#x27;re here to help you, too.</strong>
                <p className='question__text'>
                  Rentorr will help you find the property of your dreams, and you&#x27;ll never again miss out on a perfect space because your application wasn&#x27;t at the top of the stack.
                </p>
                <WhiteButton
                  title='Learn more'
                  extraClass='wow bounceInLeft'
                  onClick={() => history.push('/tenant')}
                />
              </div>
            </div>
            <div className='col-lg-6 tenat__img-position wow bounceInRight'>
              <h3 className='question__title'>But I’m a tenant!</h3>
              <img className='size3x' src={tenantBg3x} alt='img' />
              <img className='size1x' src={tenantBg1x} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='secure'>
        <div className='line' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 images wow bounceInLeft'>
              <h2>Get The Right Place at The Right Price</h2>
              <img className='size3x' src={map3x} alt='img' />
              <img className='size1x' src={mapx} alt='img' />
            </div>
            <div className='col-lg-5 offset-lg-2'>
              <div className='secure__title wow bounceInUp'>
                <h2>Get The Right Place at The Right Price</h2>
                <ul>
                  <li>Pay one application fee and apply to multiple properties</li>
                  <li>Make real time offers</li>
                  <li>Apply online in a matter of minutes</li>
                  <li>Enjoy Rentorr&#x27;s transparent pricing</li>
                </ul>
              </div>
              <div className='secure__button wow bounceInRight'>
                <BlueButton
                  title='Get started'
                  extraClass=''
                  onClick={() => setModalMode('sign_up')}
                  disabled={auth.isAuthenticated()}
                />
                <WhiteBorderButton
                  title='Learn more'
                  extraClass=''
                  onClick={() => history.push('/tenant/rental-applications')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='city'>
        <div className='container'>
          <div className='row'>
            <div className='city__title wow bounceInLeft'>
              <h2>Cities in Highest Demand</h2>
              <a>View listings</a>
            </div>
            <div className='city__all'>
              {
                citiesData.map((city, index) => {
                  return (
                    <a className='city__item wow fadeInUp' key={index} style={{ backgroundImage: `url(${city.imgUrl})` }}>
                      <strong>{city.name}</strong>
                      <p className='city__par1'>{city.par1}</p>
                      <p className='city__par2'>{city.par2}</p>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className='operation'>
        <div className='container'>
          <div className='row'>
            <div className='operation__title wow bounceInLeft'>
              Rentorr - The Software That Handles Property Management from Start to Finish
            </div>
            <div className='operation__all'>
              {
                operationsData.map((operation, index) => {
                  return (
                    <div className='operation__item wow fadeIn' key={index}>
                      <div className='operation__img'>
                        <img src={operation.iconUrl} alt='img' />
                      </div>
                      <p>{operation.description}</p>
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
            <h2 className='ready__title'>
              Ready to Work with Rentorr?
            </h2>
            <p className='ready__desc'>
              Living in a rental property doesn&#x27;t have to feel like hard work. Rentorr is here to improve the landlord and tenant relationship so you can enjoy an easier lifestyle without having to pay for it.
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

const mapStateToProps = (state) => {
  return {
    isAuthLoading: state.auth.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModalMode: (mode) => {
      dispatch(setModalMode(mode))
    },
    signUp: (data) => {
      dispatch(signUp(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
