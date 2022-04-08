import React from 'react'

import { applicationPreviewDescriptionData } from '../../../../utils/utilityVariables'
import { applicationCreditScore, applicationMoneys, applicationHouse, applicationMoney } from '../../../../assets/images'

const ApplicationPreview = ({ isApplicationPreview, toggleApplicationPreview }) => {
  return (
    <div className={`application ${isApplicationPreview ? 'application-active' : ''}`}>
      <div className='sign-in__box-shadow' onClick={() => toggleApplicationPreview(false)} />
      <div className='sign-in__block' id='application-show'>
        <div className='application__first-row'>
          <h3>Application preview</h3>
          <div className='application__close-position'>
            <a onClick={() => toggleApplicationPreview(false)} />
          </div>
        </div>
        <div className='application__info-block-position'>
          <div className='application__info-block application__first'>
            <div className='application__info-block-title'>
              <h4>verified identity</h4>
              <span>ID Verified on May 5, 2019</span>
            </div>
            <div className='application__info-block-content'>
              {
                applicationPreviewDescriptionData.map((item, index) => {
                  return (
                    <div key={index} className='application__info-block-desc'>
                      <span>{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='application__info-block application__second'>
            <div className='application__info-block-title'>
              <h4>Credit check</h4>
              <span>Data Synchronized on May 5, 2019</span>
            </div>
            <div className='application__info-block-content'>
              <div className='col-md-6 application__img-position'>
                <img src={applicationCreditScore} alt='credit' />
              </div>
              <div className='col-md-6 application__content-position'>
                <div className='application__low-row'>
                  <span>Potential credit risk</span>
                  <p>Low</p>
                </div>
                <div className='application__other-row'>
                  <span>Enquiries</span>
                  <p>1</p>
                </div>
                <div className='application__other-row'>
                  <span>Fraud notices</span>
                  <p>0</p>
                </div>
                <div className='application__other-row'>
                  <span>Negative information</span>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
          <div className='application__info-block application__third'>
            <div className='application__info-block-title'>
              <h4>Affordability index</h4>
              <span>Data Synchronized on May 5, 2019</span>
            </div>
            <div className='application__content-position application__stat-position'>
              <div className='application__stat'>
                <img src={applicationMoneys} alt='logo' />
                <p>R48,000</p>
                <span>Gross monthly income</span>
              </div>
              <div className='application__stat'>
                <img src={applicationHouse} alt='logo' />
                <p>R16,000</p>
                <span>Comfortable rent (30%)</span>
              </div>
              <div className='application__stat'>
                <img src={applicationMoney} alt='logo' />
                <p>R24,000</p>
                <span>Upper limit (50%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationPreview
