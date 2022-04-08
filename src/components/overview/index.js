import React from 'react'

import MetaWrapper from '../common/wrappers/metaWrapper'
import LandlordWrapper from '../common/wrappers/landlordWrapper'
import ShadowBox from '../common/boxes/shadowBox'
import ChartView from './ChartView'
// import icon from '../../assets/images/icons/round_limit.svg'
import view from '../../assets/images/icons/iconround_limit.svg'
import applicants from '../../assets/images/icons/iconround_limit_avatar.svg'
import income from '../../assets/images/icons/iconsproperty_blue.svg'
import maintenance from '../../assets/images/icons/iconround_limit_setting.svg'
import iconMail from '../../assets/images/icons/icon_mail.svg'
import iconAlert from '../../assets/images/icons/icons56alert_active.svg'
import InfoBox from './InfoBox'
import Listing from './Listing'
import Properties from './Properties'
import Documents from './Documents'

const Overview = () => {
  return (
    <MetaWrapper
      title=''
      description=''
      keywords=''
    >
      <LandlordWrapper
        title=''
      >
        <div className='overview-container'>
          <p className='landlord-title'>Overview</p>
          <div className='row'>
            <div className='col-lg-8 col-padding-md-r-8 mb-8 pl-lg-8'>
              <ShadowBox>
                <ChartView />
              </ShadowBox>
            </div>
            <div className='col-lg-4 information'>
              <div className='row'>
                <div className='col-6 col-padding-md-l-8 pr-8'>
                  <InfoBox icon={view} number={500} caption='Listings views' percent='10.3%' up />
                </div>
                <div className='col-6 pl-8 pr-lg-8'>
                  <InfoBox icon={applicants} number={15} caption='Applicants' percent='34%' up={false} />
                </div>
                <div className='col-6 col-padding-md-l-8 pr-8'>
                  <InfoBox icon={income} number='R48,000' caption='Total Income' />
                </div>
                <div className='col-6 pl-8 pr-lg-8'>
                  <InfoBox icon={maintenance} number={2} caption='Maintenance request' />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-padding-r-8 mb-8 mt-8 pl-lg-8'>
              <Listing />
            </div>
            <div className='col-lg-4 col-md-6 col-padding-l-8 col-padding-r-8 mb-8 mt-8'>
              <Properties />
            </div>
            <div className='col-lg-4 pl-lg-8 mb-8'>
              <div className='row'>
                <div className='col-lg-12 col-md-6 mb-8 mt-8 pl-md-8 pr-lg-8 pr-md-8 pr-sm-8'>
                  <Documents />
                </div>
                <div className='col-lg-6 col-md-3 col-6 mt-8 pl-md-8 pl-sm-8 pr-8'>
                  <ShadowBox className='block-btn'>
                    <img className='icon' src={iconMail} alt='Messages' />
                    <div>
                      MESSAGES
                    </div>
                  </ShadowBox>
                </div>
                <div className='col-lg-6 col-md-3 col-6 mt-8 pl-8 pr-lg-8'>
                  <ShadowBox className='block-btn'>
                    <div className='new'>New</div>
                    <img className='icon' src={iconAlert} alt='Alerts' />
                    <div>
                      ALERTS
                    </div>
                  </ShadowBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandlordWrapper>
    </MetaWrapper>
  )
}

export default Overview
