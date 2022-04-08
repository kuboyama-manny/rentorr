import React from 'react'

import history from '../../history'

import MetaWrapper from '../common/wrappers/metaWrapper'
import { terms } from '../../utils/termsData'

const Terms = () => {
  return (
    <MetaWrapper
      title='Terms of Service'
      description='Rentorr'
      keywords='Rentorr'
    >
      <div className='container privacy-terms__container'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='privacy-terms-title'>
              <h2>Terms of Use</h2>
              <p>Last updated on March 26, 2019</p>
            </div>
            <div className='privacy-terms-desc'>
              {
                terms.map((term, index) => {
                  return (
                    <div key={index}>
                      <h3>{term.h3}</h3>
                      <h4>{term.h4}</h4>
                      <p dangerouslySetInnerHTML={{ __html: term.p }} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='privacy-terms__link-position'>
              <a onClick={() => history.push('/privacy')}>Privacy Policy</a>
              <a className='privacy-terms__active-link' onClick={() => history.push('/terms')}>Terms of use</a>
            </div>
          </div>
        </div>
      </div>
    </MetaWrapper>
  )
}

export default Terms
