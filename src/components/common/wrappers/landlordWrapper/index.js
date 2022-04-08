import React from 'react'

import LoadingWrapper from '../loadingWrapper'

const LandlordWrapper = ({ isLoading, title, children }) => {
  return (
    <LoadingWrapper
      isLoading={isLoading}
    >
      <div className='landlord-wrapper__container'>
        <div className='container-box-full'>
          <p className='landlord-title'>{title}</p>
          {children}
        </div>
      </div>
    </LoadingWrapper>
  )
}

export default LandlordWrapper
