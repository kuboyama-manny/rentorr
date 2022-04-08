import React from 'react'

import history from '../../history'

import MetaWrapper from '../common/wrappers/metaWrapper'
import BlueButton from '../common/buttons/blueButton'
import { tenantCitiesData, protData, exploreLinkData } from '../../utils/utilityVariables'
import { mainTenantTop, mainTenantMap, mainTenantGroup1, mainTenantShape1, mainTenantRight, mainTenantShape2, mainTenantLeft, mainTenantShape3 } from '../../assets/images'

const Tenant = () => {
  return (
    <MetaWrapper
      title='Enjoy your rental property more with Rentorr'
      description='Finding the right rental doesn’t need to be stressful, and neither does communicating with your landlord. Rentorr simplifies every part renting.'
      keywords='property management software, property rentals, tenant application form, tenant management system, property management'
    >
      <div className='top-pages-search'>
        <div className='container'>
          <div className='row d-flex flex-row-reverse justify-content-between top-pages-search__block-position'>
            <div className='col-lg-6 top-pages-search__text wow bounceInDown' data-wow-duration='2s'>
              <h1>House Hunting <br /> Made <span style={{ color: '#1a5dc6' }}>Simple</span></h1>
              <p />
              <form className='top-pages-search__form'>
                <input
                  className='form-control top-pages-search__name-input wow bounceInLeft'
                  data-wow-duration='2s'
                  placeholder='Where will home be for you?'
                  type='text'
                />
                <button type='submit' className='small-button newsletter-form__button wow bounceInRight'>SEARCH</button>
              </form>
              {/*<div className='top-pages-search__link-position'>*/}
              {/*  <p>Have a property? </p>*/}
              {/*  <a onClick={() => history.push('/landlord/list-property')}> List with us <span>→</span></a>*/}
              {/*</div>*/}
            </div>
            <div className='col-lg-6 top-pages-search__image wow zoomIn'>
              <h1>House Hunting <br /> Made <span style={{ color: '#1a5dc6' }}>Simple</span></h1>
              <img src={mainTenantTop} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='trend-city'>
        <div className='container'>
          <div className='row trend-city__all-position'>
            <div className='trend-city__title wow bounceInLeft'>
              <h2>Tending Cities in South Africa</h2>
            </div>
            <div className='trend-city__all'>
              {
                tenantCitiesData.map((item, index) => {
                  return (
                    <a
                      key={index}
                      className='trend-city__item wow bounceInRight'
                      style={{ backgroundImage: `url(${item.imgUrl})` }}
                    >
                      <strong>{item.city}</strong>
                      <p className='trend-city__par1'>{item.par1}</p>
                      <p className='trend-city__par2'>{item.par2}</p>
                    </a>
                  )
                })
              }
            </div>
            <BlueButton
              title='Find your Next home'
              extraClass='trend-city__link wow bounceInUp'
            />
          </div>
        </div>
      </div>
      <div className='apply'>
        <div className=''>
          <div className='apply__dots-position' />
          <div className='container'>
            <div className='row align-content-center flex-row-reverse'>
              <div className='col-lg-6 apply__title-position wow bounceInLeft'>
                <h3 className='apply__title'>No-Hassle Applications</h3>
                <img src={mainTenantMap} alt='img' />
              </div>
              <div className='col-lg-6 apply__text-box-position'>
                <div className='apply__text-box wow bounceInRight'>
                  <h3 className='apply__title'>No-Hassle Applications</h3>
                  <p className='apply__text'>
                    Landlords aren&#x27;t the only ones who can benefit from property management software. Our oneclick application software allows you to apply for the property rentals of your dreams, and your tenant application form will jump to the top of the stack with verified financial reports and references.
                  </p>
                  <a
                    className='apply__link'
                    onClick={() => history.push('/tenant/rental-applications')}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='image-info'>
        <div className='container'>
          <div className='row flex-row-reverse'>
            <div className='col-lg-6 offset-lg-0 image-info__text wow bounceInUp' data-wow-duration='1.5s'>
              <h3>Automated Rent Payments</h3>
              <p>You&#x27;re human; you&#x27;re bound to forget what day of the month is every once in a while, but that doesn&#x27;t mean you have to pay a late fee anymore. Our services allow you to automatically withdraw rent each month so you don&#x27;t even have to think about it.</p>
              <div className='image-info__two wow bounceInRight'>
                <a
                  className='apply__link'
                  onClick={() => history.push('/tenant/pay-rent-online')}
                >
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className='col-lg-6 offset-lg-0 image-info__img  wow bounceInLeft' data-wow-duration='1.5s'>
              <h3>Automated Rent Payments</h3>
              <img src={mainTenantGroup1} alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className='paragraf'>
        <div className='container'>
          <div className='row'>
            <div className='paragraf__box col-lg-6 wow bounceInUp'>
              <h3>Lodge Complaints and Request Maintenance</h3>
              <p>Having trouble with your property? Our tenant management system allows you to fill out a maintenance request, complete with photos and videos, then send it off to your landlord and track the status in real time.</p>
              <div className='paragraf__button wow bounceInLeft'>
                <a
                  className='second-link'
                  onClick={() => history.push('/tenant/maintenance-requests')}
                >
                  REQUEST MAINTENANCE
                </a>
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
                  <img src={mainTenantShape1} alt='oval' />
                </div>
                <div className='skill-box__text-position'>
                  <h4>24/7 Repair Request Form</h4>
                  <p>Report a pressing issue any time of the day or night, and watch as your request progresses.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 offset-lg-2 wow fadeIn' data-wow-duration='2s'>
              <img src={mainTenantRight} alt='img' className='start__img' />
            </div>
          </div>
          <div className='row center'>
            <div className='col-lg-4 offset-lg-4'>
              <div className='skill-box__item wow bounceInUp' data-wow-duration='2s'>
                <div className='skill-box__oval'>
                  <img src={mainTenantShape2} alt='oval' />
                </div>
                <div className='skill-box__text-position'>
                  <h4>Set the Level of Urgency</h4>
                  <p>If an issue is especially pressing, you can indicate that on your request then watch as it is processed.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row end'>
            <div className='col-lg-5 img wow fadeIn' data-wow-duration='2s'>
              <img src={mainTenantLeft} alt='img' />
            </div>
            <div className='col-lg-4 offset-lg-3 align-items-end d-flex'>
              <div className='skill-box__item wow bounceInRight' data-wow-duration='2s'>
                <div className='skill-box__oval'>
                  <img src={mainTenantShape3} alt='oval' />
                </div>
                <div className='skill-box__text-position'>
                  <h4>Communicate Easily with Your Landlord</h4>
                  <p>It&#x27;s never been so simple to get a message to your landlord, and to see how they manage its content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-protection'>
        <div className='paragraf'>
          <div className='container'>
            <div className='row'>
              <div className='paragraf__box col-lg-6 wow bounceInUp'>
                <h3>Data Protection for Tenants</h3>
                <p>All legal documents, from tenancy agreements to lease terms, are made simple with Rentorr. Enjoy total transparency and round the clock support when you use our services.</p>
                <div className='paragraf__button wow bounceInLeft'>
                  <a href='browse.html' className='second-link'>Find a place</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='feature'>
          <div className='container'>
            <div className='row'>
              <div className='feature__all justify-content-between'>
                {
                  protData.map((prot, index) => {
                    return (
                      <div key={index} className='feature__box col-lg-4 wow bounceInRight'>
                        <div className='feature__oval'>
                          <img src={prot.imgUrl} alt='oval' />
                        </div>
                        <div className='feature__text-position'>
                          <h4>{prot.title}</h4>
                          <p dangerouslySetInnerHTML={{ __html: prot.description }} />
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
      <div className='explore'>
        <div className='paragraf'>
          <div className='container'>
            <div className='row'>
              <div className='paragraf__box col-lg-6 wow bounceInUp'>
                <h3>Explore South Africa!</h3>
                <p>Rentorr has property rentals available in all of the most desirable cities.</p>
                <div className='paragraf__button wow bounceInLeft' />
              </div>
            </div>
          </div>
        </div>
        <div className='explore__list'>
          <div className='container explore__link-position'>
            <ul>
              {
                exploreLinkData.map((link, index) => {
                  return (
                    <li key={index} className='wow bounceInRight'>
                      <a className='explore__link'>{link}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className='ready'>
        <div className='container'>
          <div className='ready__info wow slideInUp'>
            <h2 className='ready__title'>Protecting Your Privacy Is Our Priority</h2>
            <p className='ready__desc'>You don&#x27;t need to worry about data breaches or leaked information with
              Rentorr - we use the most cutting edge safety measures in the property management industry so you can
              focus on finding the house or apartment of your dreams.
            </p>
            <BlueButton
              title='Find your home now'
              extraClass=''
            />
          </div>
        </div>
      </div>
    </MetaWrapper>
  )
}

export default Tenant
