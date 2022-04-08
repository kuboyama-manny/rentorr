import React from 'react'

import history from '../../history'

import MetaWrapper from '../common/wrappers/metaWrapper'
import { privacies } from '../../utils/privacyData'

const Privacy = () => {
  return (
    <MetaWrapper
      title='Privacy Policy - Rentorr'
      description='Rentorr'
      keywords='Rentorr'
    >
      <div className='container privacy-terms__container'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='privacy-terms-title'>
              <h2>Privacy Policy</h2>
              <p>Last updated on March 26, 2019</p>
            </div>
            <div className='privacy-terms-desc'>
              {
                privacies.map((privacy, index) => {
                  return (
                    <div key={index}>
                      <h3 dangerouslySetInnerHTML={{ __html: privacy.h3 }} />
                      <h4 dangerouslySetInnerHTML={{ __html: privacy.h4 }} />
                      <p dangerouslySetInnerHTML={{ __html: privacy.p }} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='privacy-terms__link-position'>
              <a className='privacy-terms__active-link' onClick={() => history.push('/privacy')}>Privacy Policy</a>
              <a onClick={() => history.push('/terms')}>Terms of use</a>
            </div>
          </div>
        </div>
      </div>
    </MetaWrapper>
  )
}

export default Privacy
