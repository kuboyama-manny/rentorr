import superAgent from 'superagent'

import { requestService } from './request'
import * as ApiUrls from './apiUrl'
import { auth } from '../layouts/auth'

export const commonService = (request, token = true) => {
  let reqObj = {
    method: request.method,
    url: request.url
  }
  if (token && auth.isAuthenticated()) {
    reqObj = Object.assign(reqObj, { token: auth.isAuthenticated() })
  }
  if (request.data) {
    reqObj = Object.assign(reqObj, { data: request.data })
  }
  if (request.queryParams) {
    reqObj = Object.assign(reqObj, { queryParams: request.queryParams })
  }
  return requestService(reqObj)
    .then(response => {
      return response
    }).catch(error => {
      return Promise.reject(error.response.data)
    })
}

export const signUpService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.SIGN_UP_ENDPOINT,
    data: data
  })
}

export const verifyEmailService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.VERIFY_EMAIL_ENDPOINT,
    data: data
  })
}

export const loginService = (data, loginType) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.LOGIN_ENDPOINT,
    data: data
  })
}

export const setUserRoleService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.USER_ROLE_ENDPOINT,
    data: data
  })
}

export const resendEmailService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.RESEND_EMAIL_ENDPOINT,
    data: data
  })
}

export const forgotPasswordService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.FORGOT_PASSWORD_ENDPOINT,
    data: data
  })
}

export const getLandlordListingsService = () => {
  return commonService({
    method: 'GET',
    url: ApiUrls.GET_LANDLORD_LISTING_ENDPOINT
  })
}

export const contactUserService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.USER_CONTACT_ENDPOINT,
    data: data
  }, false)
}

export const getProperties = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.GET_PROPERTIES_ENDPOINT,
    data: {
      sort: data
    }
  })
}

export const getProperty = (id) => {
  return commonService({
    method: 'GET',
    url: ApiUrls.GET_PROPERTIES_ENDPOINT + '/' + id,
  })
}

export const createPropertyService = (data) => {
  return new Promise((resolve, reject) => {
    const req = superAgent
      .post(ApiUrls.CREATE_PROPERTY_ENDPOINT)
      .set({ Authorization: auth.isAuthenticated() })
      .field('name', data.name)
      .field('address', data.address)
      // .field('unit', data.unit)
      .field('beds', data.beds)
      .field('bathrooms', data.bathrooms)
      .field('size', data.size)
      .field('category', data.category)
      .field('rent', data.rent)
      .field('deposit', data.deposit)
      .field('lease_duration', data.lease_duration)
      .field('intro_video', data.intro_video)
      .field('additional_info', data.additional_info)

    data.file.forEach((file, index) => req.attach(`file${index}`, file))
    req.end((error, res) => {
      error ? reject(error) : resolve(res)
    })
  })
}

export const editPropertyService = (id, data) => {
  return new Promise((resolve, reject) => {
    const req = superAgent
      .put(ApiUrls.GET_PROPERTIES_ENDPOINT + '/' + id)
      .set({ Authorization: auth.isAuthenticated() })

    Object.keys(data).forEach(item => {
      if (item === 'file') {
        return data.file.forEach((file, index) => req.attach(`file${index}`, file))
      } else {
        return req.field(item, data[item])
      }
    })

    req.end((error, res) => {
      error ? reject(error) : resolve(res)
    })
  })
}
