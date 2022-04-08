import React from 'react'

import MetaWrapper from '../../common/wrappers/metaWrapper'
import history from '../../../history'
import { global404 } from '../../../assets/images'

const Error404 = () => {
  return (
    <MetaWrapper
      title='Oops! Something went wrong'
      description='Something went wrong'
      keywords='Rentorr'
    >
      <div className='container-box-full error__img-position'>
        <img src={global404} alt='img' />
      </div>
      <div className='container-box-full error__desc'>
        <h3>Oops!</h3>
        <span>Something went wrong</span>
        <p>
          <a className='error__link second-link' onClick={() => history.goBack()}>Go back</a>
          &nbsp;or head over to&nbsp;
          <a className='error__link second-link' onClick={() => history.push('/')}>Home Page</a>
          &nbsp;to choose a new direction.
        </p>
      </div>
    </MetaWrapper>
  )
}

export default Error404
