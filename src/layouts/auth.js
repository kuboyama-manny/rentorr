import history from '../history'

export default class Auth {
  accessToken
  firstName
  lastName
  email
  role

  constructor () {
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.setSession = this.setSession.bind(this)
    this.getAccessToken = this.getAccessToken.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.getRole = this.getRole.bind(this)
    this.getEmail = this.getEmail.bind(this)
    this.getUserName = this.getUserName.bind(this)
    this.saveUserRole = this.saveUserRole.bind(this)
  }

  handleAuthentication (authResult) {
    if (authResult && authResult.token) {
      this.setSession(authResult)
    } else {
      history.replace('/')
    }
  }

  setSession (authResult) {
    window.localStorage.setItem('isLoggedIn', 'true')

    this.accessToken = authResult.token
    window.localStorage.setItem('accessToken', `Bearer ${this.accessToken}`)
    this.firstName = authResult.user.firstName
    window.localStorage.setItem('firstName', this.firstName)
    this.lastName = authResult.user.lastName
    window.localStorage.setItem('lastName', this.lastName)
    this.email = authResult.user.email
    window.localStorage.setItem('email', this.email)

    if (authResult.user.role) {
      this.role = authResult.user.role
      window.localStorage.setItem('role', this.role)
    }

    history.replace('/')
  }

  saveUserRole (result) {
    this.role = result.role
    window.localStorage.setItem('role', this.role)
  }

  getAccessToken () {
    return this.accessToken
  }

  logout () {
    this.accessToken = null
    this.firstName = null
    this.lastName = null
    this.email = null
    this.role = null

    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('firstName')
    window.localStorage.removeItem('lastName')
    window.localStorage.removeItem('email')
    window.localStorage.removeItem('role')

    window.location.href = '/'
  }

  isAuthenticated () {
    return window.localStorage.getItem('accessToken')
  }

  getRole () {
    return window.localStorage.getItem('role')
  }

  getEmail () {
    return window.localStorage.getItem('email')
  }

  getUserName () {
    return window.localStorage.getItem('firstName') + ' ' + window.localStorage.getItem('lastName')
  }
}

export const auth = new Auth()
