import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { auth } from '../../../layouts/auth'
import history from '../../../history'

const landlordSettingList = ({ pathname }) => (
  <ul className='nav nav-settings'>
    <li className={`nav-item ${pathname === '/landlord/settings/general' ? 'active' : ''}`}>
      <Link to={'/landlord/settings/general'}>
        General
      </Link>
    </li>
    <li className={`nav-item ${pathname === '/landlord/settings/security' ? 'active' : ''}`}>
      <Link to={'/landlord/settings/security'}>
        Security settings
      </Link>
    </li>
    <li className={`nav-item ${pathname === '/landlord/settings/company-details' ? 'active' : ''}`}>
      <Link to={'/landlord/settings/company-details'}>
        Company details
      </Link>
    </li>
    <li className={`nav-item ${pathname === '/landlord/settings/receiving-method' ? 'active' : ''}`}>
      <Link to={'/landlord/settings/receiving-method'}>
        Receiving method
      </Link>
    </li>
    <li className={`nav-item ${pathname === '/landlord/settings/receiving-method' ? 'active' : ''}`}>
      <Link to={'/landlord/settings/transactions-history'}>
        Transactions history
      </Link>
    </li>
    <li className={`nav-item ${pathname === '/landlord/settings/subscriptions' ? 'active' : ''}`}>
      <Link to={'/landlord/settings/subscriptions'}>
        Subscriptions
      </Link>
    </li>
    <li className={`nav-item ${pathname === '/landlord/settings/notifications' ? 'active' : ''}`}>
      <Link to={'/landlord/settings/notifications'}>
        Notifications
      </Link>
    </li>
  </ul>
)

const tenantSettingList = ({ pathname }) => (
  <ul className='nav nav-settings'>
    <li className={`nav-item ${pathname === '/tenant/settings/security' ? 'active' : ''}`}>
      <Link to={'/tenant/settings/security'}>
        Security settings
      </Link>
    </li>
    <li className={`nav-item ${pathname === '/tenant/settings/payment-method' ? 'active' : ''}`}>
      <Link to={'/tenant/settings/payment-method'}>
        Payment method
      </Link>
    </li>
    <li className={`nav-item ${pathname === '/tenant/settings/notifications' ? 'active' : ''}`}>
      <Link to={'/tenant/settings/notifications'}>
        Notifications
      </Link>
    </li>
  </ul>
)

const SettingLayout = ({ title, className, children, right, location }) => {
  return (
    <div className={`container setting-layout ${className}`}>
      <div className='row'>
        <div className='col-lg-3'>
          { auth.getRole() === 'LANDLORD' && landlordSettingList(location) }
          { auth.getRole() === 'TENANT' && tenantSettingList(location) }
        </div>
        <div className='col-lg-9 setting-content'>
          <h4 className='page-title'>{title}</h4>
          <div className='row'>
            <div className='col-md-7'>
              {children}
            </div>
            <div className='col-md-5'>
              {right}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(SettingLayout)
