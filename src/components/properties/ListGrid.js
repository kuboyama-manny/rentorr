import React from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'

// components
import TitleIcon from './TitleIcon'
import MenuListed from './MenuListed'
import MenuRented from './MenuRented'
import MenuNotListed from './MenuNotListed'

// functions
import { numberWithCommas } from '../../utils/utilityFunctions'

const ListGrid = ({ data }) => {
  return (
    <div className='list-property-grid row'>
      {
        data && data.map((item, index) => {
          return (
            <div key={index} className='property-item col-sm-6 col-md-6 col-lg-4 col-xl-3'>
              <div className='property-item-content'>
                <div className='img-property-wrapper'>
                  <img className='img-property' alt='' src={item.media[0].link} />
                  {item.rent &&
                    <div className='img-extra'>
                      <span className='unit'>ZAR</span>
                      {numberWithCommas(item.rent)}
                    </div>}
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
                  <Popup
                    trigger={
                      <a className='btn-more'>
                        <svg width={4} height={12} viewBox='0 0 4 12'>
                          <path
                            d='M2 3c.825 0 1.5-.675 1.5-1.5S2.825 0 2 0 .5.675.5 1.5 1.175 3 2 3zm0 1.5C1.175 4.5.5 5.175.5 6S1.175 7.5 2 7.5 3.5 6.825 3.5 6 2.825 4.5 2 4.5zM2 9c-.825 0-1.5.675-1.5 1.5S1.175 12 2 12s1.5-.675 1.5-1.5S2.825 9 2 9z'
                            fill='#FFFFFF'
                            fillRule='nonzero'
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
                </div>
                <div className='property-info'>
                  <h6 className='title'>
                    {item.name}
                  </h6>
                  <div className='address'>
                    {item.address}
                  </div>
                  <div className='d-flex flex-row align-items-center justify-content-between mt-auto'>
                    <TitleIcon status={item.status} rented={item.rented} listed={item.listed} />
                    {!item.listed &&
                      <a className='extra-btn'>
                      List your property
                      </a>}
                    {item.isRepair && <i className='fa fa-wrench' />}
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListGrid
