import React from 'react'
import { withRouter } from 'react-router-dom'

import history from '../../history'
import { logo } from '../../assets/images'

const Footer = ({ location }) => {
  return (
    <footer
      className={`${
        (
          location.pathname === '/error-404' ||
          /verify/.test(location.pathname) ||
          location.pathname === '/landlord/overview' ||
          location.pathname === '/landlord/listings' ||
          location.pathname === '/landlord/properties' ||
          location.pathname.startsWith('/landlord/properties/detail') ||
          location.pathname === '/landlord/documents' || 
          location.pathname.startsWith('/landlord/settings') ||
          location.pathname.startsWith('/tenant/settings')
        ) ? 'd-none' : ''
      }`}
    >
      <div className='container'>
        <div className='row'>
          <div className='footer'>
            <div className='footer__logo'>
              <img src={logo} alt='logo' />
              <p>The easiest way to connect landlords with tenants for mutual benefit!</p>
            </div>
            <ul className='footer__nav'>
              <li>
                <a className='explore__link' target='_blank' rel='noopener noreferrer' href='https://rentorrcom.helpscoutdocs.com/'>
                  Blog
                </a>
              </li>
              <li>
                <a className='explore__link' onClick={() => history.push('/terms')}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a className='explore__link' onClick={() => history.push('/privacy')}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className='explore__link' onClick={() => history.push('/contact')}>
                  Keep in Touch
                </a>
              </li>
              <li>
                <a className='explore__link' target='_blank' rel='noopener noreferrer' href='https://rentorrcom.helpscoutdocs.com/'>
                  F.A.Q.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default withRouter(Footer)
