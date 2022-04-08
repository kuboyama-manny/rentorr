import React from 'react'
import ShadowBox from '../common/boxes/shadowBox'
import iconPlus from '../../assets/images/icons/icon_plus.svg'

const data = [
  {
    image: 'https://source.unsplash.com/random',
    name: 'Smart 1bedroomer in downtown',
    view: 23,
    info: 'Invite sent'
  },
  {
    image: 'https://source.unsplash.com/random',
    name: 'Downtown penthouse',
    view: 209,
    info: '1 applicant'
  },
  {
    image: 'https://source.unsplash.com/random',
    name: 'Valley paradise condo',
    view: 156,
    info: 'No applicants'
  }
]

const Listing = () => {
  return (
    <ShadowBox className='box'>
      <div className='d-flex justify-content-between'>
        <h4 className='title'>LISTINGS</h4>
        <button type='button' className='btn-plus'><img src={iconPlus} alt='' /></button>
      </div>
      <div className='info'>
        <div>
          <span className='number'>16</span>
          <span className='description'>Total</span>
        </div>
        <div>
          <span className='number'>4</span>
          <span className='description'>Promoted</span>
        </div>
        <div>
          <span className='number'>1</span>
          <span className='description'>Near expired</span>
        </div>
      </div>
      <ul className='listing'>
        {data && data.map((item, index) => {
          return (
            <li key={index} className='item'>
              <img className='image' src={item.image} alt={item.name} />
              <div>
                <div className='name'>{item.name}</div>
                <div className='d-flex flex-row align-items-center'>
                  <div className='description'>{`${item.view} ${item.view > 1 ? 'views' : 'view'}`}</div>
                  <div className='divider' />
                  <div className='description'>{item.info}</div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <a className='btn-all'>
        All listings
      </a>
    </ShadowBox>
  )
}

export default Listing
