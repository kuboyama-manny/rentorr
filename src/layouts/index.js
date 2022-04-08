import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

/**
 * authenticated routes
 */
import LandlordRoute from './landlordRoute'
import TenantRoute from './tenantRoute'

/**
 * header and footer
 */
import Header from './header'
import Footer from './footer'

/**
 * main routes
 */
import Landing from '../components/landing'

import Landlord from '../components/landlord'
import CollectRentOne from '../components/collectRentOnline'
import ListProperty from '../components/listProperty'
import CreateProperty from '../components/createProperty/CreateProperty'
import TenantScreening from '../components/tenantScreening'
import RentalForms from '../components/rentalForms'
import Overview from '../components/overview'
import Listings from '../components/listings'
import Properties from '../components/properties'
import PropertyDetails from '../components/propertyDetails'
import Documents from '../components/documents'

import Tenant from '../components/tenant'
import RentalApplications from '../components/rentalApplications'
import PayRentOnline from '../components/payRentOnline'
import MaintenanceRequests from '../components/maintenanceRequests'

/**
 * settings
 */
import LandlordGeneralSettings from '../components/settings/landlord/generalSettings'
import LandlordPhoneVerification from '../components/settings/landlord/phoneVerification'
import LandlordIdVerification from '../components/settings/landlord/idVerification'
import LandlordEmailVerification from '../components/settings/landlord/emailVerification'
import LandlordSecuritySettings from '../components/settings/landlord/securitySettings'

import TenantSecuritySettings from '../components/settings/tenant/securitySettings'

/**
 * policy
 */
import Terms from '../components/terms'
import Privacy from '../components/privacy'
import KeepInTouch from '../components/keepInTouch'

/**
 * error handling
 */
import Error404 from '../components/errorHandling/error404'

/**
 * verify component
 */
import VerifyEmail from '../components/authentication/verifyEmail'

import { rootClassNameGroup } from '../utils/setRootClassName'
import { auth } from './auth'
import { changeLoginState, verifyEmail } from '../actions/auth'

const Routes = ({ location, isApplicationPreview, changeLoginState, isLoggedIn, verifyEmail }) => {
  const [className, setClassName] = useState('')

  useEffect(() => {
    rootClassNameGroup.forEach(item => {
      if (location.pathname === item.route) {
        setClassName(item.className)
      }
    })
  })

  useEffect(() => {
    if (isApplicationPreview) {
      document.body.classList.add('application-hidden')
    } else {
      document.body.classList.remove('application-hidden')
    }
  })

  if (auth.isAuthenticated() && !isLoggedIn) {
    changeLoginState(true)
  }

  return (
    <div className={className}>
      <Header />
      <Switch>
        <Route path='/landlord/collect-rent-online' component={CollectRentOne} />
        <Route path='/landlord/list-property' component={ListProperty} />
        <Route path='/landlord/screening' component={TenantScreening} />
        <Route path='/landlord/rental-forms' component={RentalForms} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/overview' component={Overview} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/listings' component={Listings} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/properties/detail/:id' component={PropertyDetails} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/properties/create' component={CreateProperty} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/properties/edit/:id' component={CreateProperty} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/properties' component={Properties} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/documents' component={Documents} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/settings/general' component={LandlordGeneralSettings} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/settings/phone-verification' component={LandlordPhoneVerification} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/settings/id-verification' component={LandlordIdVerification} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/settings/email-verification' component={LandlordEmailVerification} />
        <LandlordRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/landlord/settings/security' component={LandlordSecuritySettings} />
        <Route exact path='/landlord' component={Landlord} />
        <Route path='/tenant/rental-applications' component={RentalApplications} />
        <Route path='/tenant/pay-rent-online' component={PayRentOnline} />
        <Route path='/tenant/maintenance-requests' component={MaintenanceRequests} />
        <TenantRoute isAuthenticated={auth.isAuthenticated} role={auth.getRole()} path='/tenant/settings/security' component={TenantSecuritySettings} />
        <Route path='/tenant' component={Tenant} />
        <Route path='/terms' component={Terms} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/contact' component={KeepInTouch} />
        <Route path='/verify' component={VerifyEmail} />
        <Route path='/error-404' component={Error404} />
        <Route exact path='/' component={Landing} />
        <Redirect from='*' to='/error-404' />
      </Switch>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isApplicationPreview: state.landing.isApplicationPreview,
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLoginState: (isLoggedIn) => {
      dispatch(changeLoginState(isLoggedIn))
    },
    verifyEmail: (data) => {
      dispatch(verifyEmail(data))
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
)
