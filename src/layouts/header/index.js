import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import LoadingWrapper from '../../components/common/wrappers/loadingWrapper'
import SignIn from '../../components/authentication/signIn'
import ForgotPassword from '../../components/authentication/forgotPassword'
import SignUp from '../../components/authentication/signUp'
import SelectRole from '../../components/authentication/selectRole'
import CheckEmail from '../../components/authentication/checkEmail'
import HeaderDropDown from '../../components/common/dropDowns/headerDropDown'

import history from '../../history'
import { logo } from '../../assets/images'
import notificationBadge from '../../assets/images/icons/notification.svg'
import messageBadge from '../../assets/images/icons/mail.svg'
import {
  setModalMode,
  signUp,
  login,
  setUserRole,
  resendEmail,
  forgotPassword
} from '../../actions/auth'
import { auth } from '../auth'


// actions
import { getProperties } from '../../actions/landlord/properties'


const Header = ({ location, isModalMode, setModalMode, signUp, login, isLoading, resendEmail, signUpEmail, setUserRole, forgotPassword, properties, getProperties }) => {
  const [isActive, setIsActive] = useState(false)
  let propertyId, selectedProperty
  
  if (location.pathname.startsWith('/landlord/properties/detail')) {
    let urls = location.pathname.split('/')
    propertyId = urls[urls.length - 1]
    selectedProperty = properties.filter(o => o._id === propertyId)[0]
  }

  useEffect(() => {
    if (properties.length === 0) {
      getProperties()
    }
  }, [])

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('body-hidden')
    } else {
      document.body.classList.remove('body-hidden')
    }
  }, [isActive])

  useEffect(() => {
    if (isModalMode) {
      document.body.classList.add('body-hidden')
    } else {
      document.body.classList.remove('body-hidden')
    }
  }, [isModalMode])

  // useEffect(() => {
  //   if (window.localStorage.getItem('accessToken') && window.localStorage.getItem('role') === null) {
  //     setModalMode('select_role')
  //   }
  // }, [isModalMode])

  const onActiveMobile = () => {
    setIsActive(!isActive)
  }

  const goToPage = (page) => {
    history.push(page)
  }

  const landLandingPage = () => {
    if (auth.getRole() === 'LANDLORD') history.push('/landlord')
    else if (auth.getRole() === 'TENANT') history.push('/tenant')
    else history.push('/')
  }

  const defaultHeader = () => (
    <div className='nav__menu'>
      <ul>
        <li>
          <a
            className={`nav__link ${/landlord/.test(location.pathname) ? 'active' : ''}`}
            onClick={() => goToPage('/landlord')}
          >
            Landlord
          </a>
        </li>
        <li>
          <a
            className={`nav__link ${/tenant/.test(location.pathname) ? 'active' : ''}`}
            onClick={() => goToPage('/tenant')}
          >
            Tenant
          </a>
        </li>
        <li>
          <a
            className='nav__link'
          >
            Browse<i className='arr' />
          </a>
        </li>
      </ul>
    </div>
  )

  const landlordHeader = () => (
    <div className='landlord_nav wow bounceInLeft'>
      <ul>
        <li>
          <a
            className={`landlord_nav_link ${location.pathname === '/landlord/overview' ? 'active' : ''}`}
            onClick={() => goToPage('/landlord/overview')}
          >
            Overview
          </a>
        </li>
        <li>
          <a
            className={`landlord_nav_link ${location.pathname === '/landlord/listings' ? 'active' : ''}`}
            onClick={() => goToPage('/landlord/listings')}
          >
            Listings
          </a>
        </li>
        <li>
          <a
            className={`landlord_nav_link ${location.pathname === '/landlord/properties' ? 'active' : ''}`}
            onClick={() => goToPage('/landlord/properties')}
          >
            Properties
          </a>
        </li>
        <li>
          <a
            className={`landlord_nav_link ${location.pathname === '/landlord/documents' ? 'active' : ''}`}
            onClick={() => goToPage('/landlord/documents')}
          >
            Documents
          </a>
        </li>
      </ul>
    </div>
  )

  const landlordPropertyDetailHeader = () => (
    <div className='property_nav'>
      <ul>
        <li>
          <a
            className={`property_nav_link`}
            onClick={() => goToPage('/landlord/properties')}
          >
            Properties <span>/</span>
          </a>
        </li>
        <li>
          <a
            className={`property_nav_link active`}
          >
            {selectedProperty && selectedProperty.name}
          </a>
        </li>
      </ul>
    </div>
  )

  const tenantHeader = () => (
    <div className='landlord_nav wow bounceInLeft'>
      <ul>
        <li>
          <a
            className={`landlord_nav_link ${location.pathname === '/tenant/lease' ? 'active' : ''}`}
            onClick={() => goToPage('/tenant/lease')}
          >
            Lease
          </a>
        </li>
        <li>
          <a
            className={`landlord_nav_link ${location.pathname === '/tenant/applications' ? 'active' : ''}`}
            onClick={() => goToPage('/tenant/applications')}
          >
            Applications
          </a>
        </li>
        <li>
          <a
            className={`landlord_nav_link ${location.pathname === '/tenant/profile' ? 'active' : ''}`}
            onClick={() => goToPage('/tenant/profile')}
          >
            Profile
          </a>
        </li>
      </ul>
    </div>
  )

  return (
    <LoadingWrapper isLoading={isLoading && !isModalMode}>
      <div className={`mobile-menu ${isActive ? 'active-menu' : ''}`}>
        <div className='mobile-menu__position'>
          <div className='mobile-menu__ul-position'>
            <ul>
              <li>
                <a
                  className={`mobile-menu__link ${/landlord/.test(location.pathname) ? 'active' : ''}`}
                  onClick={() => goToPage('/landlord')}
                >
                  Landlord
                </a>
              </li>
              <li>
                <a
                  className={`mobile-menu__link ${/tenant/.test(location.pathname) ? 'active' : ''}`}
                  onClick={() => goToPage('/tenant')}
                >
                  Tenant
                </a>
              </li>
              <li>
                <a
                  className='mobile-menu__link'
                >
                  Browse<i className='arr' />
                </a>
              </li>
            </ul>
          </div>
          <div className='mobile-menu__buttons'>
            {
              !auth.getRole() &&
              <a
                className='button--blue mobile-menu__sign-up'
                onClick={() => setModalMode('sign_up')}
              >
                SIGN UP
              </a>
            }
            {
              !auth.getRole() &&
              <a
                className='button--white--border mobile-menu__sign-in'
                onClick={() => setModalMode('sign_in')}
              >
                SIGN IN
              </a>
            }
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='container-box-full nav-position'>
          <div className='nav'>
            <div className='nav__logo-nav wow bounceInLeft'>
              <a className='nav__logo' onClick={landLandingPage}>
                <img src={logo} alt='logo' />
              </a>
              { !auth.getRole() && defaultHeader() }
              { 
                auth.getRole() === 'LANDLORD' && (
                  location.pathname.startsWith('/landlord/properties/detail') ?
                    landlordPropertyDetailHeader()
                    :
                    landlordHeader()
                )
              }
              { auth.getRole() === 'TENANT' && tenantHeader() }
            </div>
            <div className='nav__button wow bounceInRight'>
              {
                !auth.getRole() &&
                <a
                  className='nav__button--white button--white--border nav__sign-in'
                  onClick={() => setModalMode('sign_in')}
                >
                  SIGN IN
                </a>
              }
              {
                !auth.getRole() &&
                <a
                  className='nav__button--blue button--blue nav__sign-up'
                  onClick={() => setModalMode('sign_up')}
                >
                  SIGN UP
                </a>
              }
              {
                auth.getRole() &&
                <div className='mail-badge'>
                  <img src={messageBadge} alt='icon' />
                </div>
              }
              {
                auth.getRole() &&
                <div className='notification-badge'>
                  <img src={notificationBadge} alt='icon' />
                </div>
              }
              {
                auth.getRole() &&
                <HeaderDropDown />
              }
            </div>
            <a className={`nav__mobile-button ${isActive ? 'open-mobile' : ''}`} onClick={onActiveMobile}>
              <span />
              <span />
            </a>
          </div>
        </div>
      </div>
      <SignIn
        isOpen={isModalMode === 'sign_in'}
        toggleModal={setModalMode}
        login={login}
        isLoading={isLoading}
      />
      <ForgotPassword
        isOpen={isModalMode === 'forgot_pass'}
        toggleModal={setModalMode}
        forgotPassword={forgotPassword}
        isLoading={isLoading}
      />
      <SignUp
        isOpen={isModalMode === 'sign_up'}
        toggleModal={setModalMode}
        signUp={signUp}
        isLoading={isLoading}
      />
      <SelectRole
        isOpen={isModalMode === 'select_role'}
        toggleModal={setModalMode}
        setUserRole={setUserRole}
        isLoading={isLoading}
      />
      <CheckEmail
        isOpen={isModalMode === 'check_email'}
        toggleModal={setModalMode}
        resendEmail={resendEmail}
        signUpEmail={signUpEmail}
        isLoading={isLoading}
      />
    </LoadingWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isModalMode: state.auth.isModalMode,
    isLoading: state.auth.isLoading,
    signUpEmail: state.auth.signUpEmail,
    properties: state.landlord.properties.properties,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModalMode: (mode) => {
      dispatch(setModalMode(mode))
    },
    signUp: (data) => {
      dispatch(signUp(data))
    },
    login: (data) => {
      dispatch(login(data))
    },
    setUserRole: (data) => {
      dispatch(setUserRole(data))
    },
    resendEmail: (data) => {
      dispatch(resendEmail(data))
    },
    forgotPassword: (data) => {
      dispatch(forgotPassword(data))
    },
    getProperties: () => {
      dispatch(getProperties())
    },
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
