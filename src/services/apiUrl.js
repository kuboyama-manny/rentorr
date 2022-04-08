/**
 * api base url
 * type { String }
 */
export const { BASE_URL } = process.env

/**
 * api version url
 * type { String }
 */
export const VERSION_URL = `${BASE_URL}/api/v1`

export const SIGN_UP_ENDPOINT = `${VERSION_URL}/user/register`
export const VERIFY_EMAIL_ENDPOINT = `${VERSION_URL}/user/verify`
export const LOGIN_ENDPOINT = `${VERSION_URL}/user/login`
export const USER_ROLE_ENDPOINT = `${VERSION_URL}/user/role`
export const RESEND_EMAIL_ENDPOINT = `${VERSION_URL}/user/resendEmail`
export const FORGOT_PASSWORD_ENDPOINT = `${VERSION_URL}/user/forgotten`

export const GET_LANDLORD_LISTING_ENDPOINT = `${VERSION_URL}/listing`
export const USER_CONTACT_ENDPOINT = `${VERSION_URL}/user/contact`
export const CREATE_PROPERTY_ENDPOINT = `${VERSION_URL}/property`
export const GET_PROPERTIES_ENDPOINT = `${VERSION_URL}/properties`
