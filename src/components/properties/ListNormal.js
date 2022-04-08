import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'

// icons
import iconBeds from '../../assets/images/icons/icon_beds.svg'
import iconBath from '../../assets/images/icons/icon_bath.svg'
import iconSquare from '../../assets/images/icons/icon_square.svg'
import iconApartment from '../../assets/images/icons/icon_apartment.svg'

// components
import TitleIcon from './TitleIcon'
import MenuNotListed from './MenuNotListed'
import MenuRented from './MenuRented'
import MenuListed from './MenuListed'

// functions
import { numberWithCommas } from '../../utils/utilityFunctions'

const ListNormal = ({ data, editProperty }) => {
  const [menuOpen, setMenuOpen] = useState(null)
  return (
    <ul className='list-property'>
      {
        data && data.map((item, index) => {
          return (
            <li key={index} className='property-item'>
              <div className='img-property-wrapper'>
                <img className='img-property' alt='' src={item.media[0].link} />
                <div className='img-extra'>
                  {numberWithCommas(item.rent)}<span className='unit'>/mo</span>
                  {/*<span className='unit'>{item.price.unit}</span>*/}
                </div>
                <div className='img-hover'>
                  <Link to={`/landlord/properties/detail/${item._id}`}>
                    <button type='button' className='btn-hover'>
                      Manage
                    </button>
                  </Link>
                  <Link to={`/landlord/properties/edit/${item._id}`}>
                    <button type='button' className='btn-hover'>
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
              <div className='row flex-grow-1'>
                <div className='col-lg-6 col-md-12 d-flex flex-row pl-0 pr-0'>
                  <div className='info'>
                    <h6 className='property-name'>
                      {item.name}
                      <TitleIcon status={item.status} rented={item.rented} listed={item.listed} />
                    </h6>
                    <p className='property-description'>
                      {item.address}
                    </p>
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
                      {item.isRepair &&
                        <div className='item'>
                          <i className='fa fa-wrench' />
                        </div>}
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-6 status'>
                  <div className='status-title'>Payment status</div>
                  <div className='status-text'>
                    {item.payment || 'You don’t have tenant yet'}
                  </div>
                  {item.isUpToDate &&
                    <div className='up-to-date'>
                    Up to date
                    </div>}
                  {!item.listed &&
                    <a className='list-your-property'>
                    List your property
                    </a>}
                </div>
                <div className='col-lg-3 col-md-4 col-6 tenant'>
                  {!item.tenant &&
                    <div className='tenant-info'>
                    No tenant
                    </div>}
                  {!item.tenant &&
                    <a className='btn-tenant'>
                    Invite a tenant
                    </a>}
                  {item.tenant &&
                    <>
                      <div className='tenant-info'>
                        {item.tenant.fullName}
                      </div>
                      <a className='btn-tenant'>
                      Message {item.tenant.firstName}
                      </a>
                    </>}
                </div>
              </div>
              <Popup
                trigger={
                  <a className='btn-more'>
                    <svg width='16px' height='16px' viewBox='0 0 16 16' className={`icon ${menuOpen === index ? 'active' : ''}`}>
                      <title>EDA8F1BA-28DB-4AAE-A44D-2BC75A83B118</title>
                      <path
                        d='M8,5 C8.825,5 9.5,4.325 9.5,3.5 C9.5,2.675 8.825,2 8,2 C7.175,2 6.5,2.675 6.5,3.5 C6.5,4.325 7.175,5 8,5 Z M8,6.5 C7.175,6.5 6.5,7.175 6.5,8 C6.5,8.825 7.175,9.5 8,9.5 C8.825,9.5 9.5,8.825 9.5,8 C9.5,7.175 8.825,6.5 8,6.5 Z M8,11 C7.175,11 6.5,11.675 6.5,12.5 C6.5,13.325 7.175,14 8,14 C8.825,14 9.5,13.325 9.5,12.5 C9.5,11.675 8.825,11 8,11 Z'
                        fill={menuOpen === index ? '#1A5DC6' : '#3C404E'}
                        fillRule='evenodd'
                      />
                    </svg>
                  </a>
                }
                contentStyle={{
                  padding: '20px 0',
                  borderRadius: '1px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(225, 223, 230, 0.5)'
                }}
                on='click'
                open={menuOpen === index}
                onOpen={() => setMenuOpen(index)}
                onClose={() => setMenuOpen(null)}
                closeOnDocumentClick
                closeOnEscape
                position='bottom right'
                arrow={false}
              >
                <>
                  {
                    (item && item.listed)
                      ? <MenuListed editProperty={editProperty} />
                      : <MenuNotListed editProperty={editProperty} />
                  }
                  {
                    (item && item.rented) &&
                      <MenuRented />
                  }
                  {/*{(item && item.status === 'archived') && <MenuNotListed />}*/}
                </>
              </Popup>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListNormal
