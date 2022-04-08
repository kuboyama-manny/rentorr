import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'

// icons
import iconBeds from '../../assets/images/icons/icon_beds.svg'
import iconBath from '../../assets/images/icons/icon_bath.svg'
import iconSquare from '../../assets/images/icons/icon_square.svg'
import iconApartment from '../../assets/images/icons/icon_apartment.svg'
import iconMore from '../../assets/images/icons/icon_more.svg'
// import iconListDefault from '../../assets/images/icons/icons16list_default.svg'
import iconListDefault from '../../assets/images/icons/iconsverify_white.svg'
import iconArchiveWhite from '../../assets/images/icons/icon_archive_white.svg'
import iconDeactivateWhite from '../../assets/images/icons/icon_deactivate_white.svg'

// components
import TitleIcon from './TitleIcon'
import MenuListed from './MenuListed'
import MenuRented from './MenuRented'
import MenuNotListed from './MenuNotListed'
import CheckBox from '../common/buttons/customCheckbox'

// functions
import { numberWithCommas } from '../../utils/utilityFunctions'

const ListTable = ({ data }) => {
  const checkedItems = data.filter(item => item.checked)
  const [hasCheckedChange, setHasCheckedChange] = useState(false)
  return (
    <>
      <ul className='list-property-table-min'>
        {
          data && data.map((item, index) => {
            return (
              <li key={index} className='property-item'>
                <div className='col-lg-5 d-flex flex-row align-items-center'>
                  <CheckBox
                    label=''
                    checked={item.checked}
                    onClick={() => { item.checked = !item.checked; setHasCheckedChange(!hasCheckedChange) }}
                  />
                  <img className='img-property' alt='' src={item.media[0].link} />
                  <div className='info'>
                    <h6 className='property-name'>
                      {item.name}
                      <TitleIcon status={item.status} rented={item.rented} listed={item.listed} />
                    </h6>
                    <p className='property-description'>
                      {item.address}
                    </p>
                  </div>
                  {item.isRepair &&
                    <div className='item-repair'>
                      <i className='fa fa-wrench' />
                    </div>}
                </div>
                <div className='col-lg-4 col-md-6 mt-md-4 mt-sm-2 mt-lg-0 extra-info-wrapper'>
                  <div className='extra-info'>
                    <div className='item'>
                      <img className='icon' alt='bed' src={iconBeds} />
                      {item.beds}
                    </div>
                    <div className='item'>
                      <img className='icon' alt='bath' src={iconBath} />
                      {item.bathrooms}
                    </div>
                    <div className='item'>
                      <img className='icon' alt='size' src={iconSquare} />
                      {item.size}&nbsp;m²
                    </div>
                    <div className='item'>
                      <img className='icon' alt='size' src={iconApartment} />
                      {item.category}
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 mt-md-4 mt-sm-2 mt-lg-0 more-info'>
                  <div className='price-info'>
                    {!item.tenant &&
                      <div className='no-tenant'>
                        No tenant
                      </div>}
                    {item.tenant &&
                      <div className='tenant-info'>
                        {item.tenant.fullName}
                      </div>}
                    <div className='price'>
                      {`R${numberWithCommas(item.rent)}`}
                    </div>
                  </div>
                  <div className='hover-button'>
                    <Link to={`/landlord/properties/edit/${item._id}`} className='secondary-button'>
                      Edit
                    </Link>
                    <Link to={`/landlord/properties/detail/${item._id}`} className='primary-button'>
                      Manage
                    </Link>
                  </div>
                </div>
                <Popup
                  trigger={
                    <a className='btn-more'>
                      <img src={iconMore} alt='more' />
                    </a>
                  }
                  contentStyle={{
                    padding: '20px 0',
                    borderRadius: '1px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(225, 223, 230, 0.5)'
                  }}
                  on='click'
                  closeOnDocumentClick
                  closeOnEscape
                  position='bottom right'
                  arrow={false}
                >
                  <>
                    {(item && item.listed) ? <MenuListed /> : <MenuNotListed />}
                    {(item && item.rented) && <MenuRented />}
                    {/*{(item && item.status === 'archived') && <MenuNotListed />}*/}
                  </>
                </Popup>
              </li>
            )
          })
        }
      </ul>
      {(checkedItems && checkedItems.length > 0) &&
        <div key={hasCheckedChange} className='float-menu-wrapper'>
          <div className='float-menu'>
            <div className='text'>
              {`${checkedItems.length} ${checkedItems.length > 1 ? 'listings' : 'listing'} selected`}
            </div>
            <div className='icons'>
              <img alt='List' className='item' src={iconListDefault} />
              <img alt='Archive' className='item' src={iconArchiveWhite} />
              <img alt='Deactivate' className='item' src={iconDeactivateWhite} />
            </div>
          </div>
        </div>}
    </>
  )
}

export default ListTable
