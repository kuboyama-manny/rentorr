import React from 'react'

import history from '../../history'
import noListingsImage from '../../assets/images/listings/Img_no listings.png'

const EmptyProperty = () => {
  return (
    <div className='container-box-full empty-property'>
      <div className='no-listings-img__wrapper'>
        <img src={noListingsImage} alt='' />
      </div>
      <p className='title'>You don’t have any properties yet!</p>
      <p className='description'>Add your properties and attract quality tenants.</p>
      <a
        className='btn create'
        onClick={() => history.push('/landlord/properties/create')}
      >
        CREATE PROPERTY
      </a>
    </div>
  )
}

export default EmptyProperty
