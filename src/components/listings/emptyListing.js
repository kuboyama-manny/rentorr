import React from 'react'

import noListingsImage from '../../assets/images/listings/Img_no listings.png'

const EmptyListing = () => {
  return (
    <div className='container-box-full empty-listing'>
      <div className='no-listings-img__wrapper'>
        <img src={noListingsImage} alt='' />
      </div>
      <p className='title'>You don’t have any listings yet!</p>
      <p className='description'>Add your listings and attract quality tenants.</p>
      <a className='btn create'>CREATE LISTING</a>
    </div>
  )
}

export default EmptyListing
