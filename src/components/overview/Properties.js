import React from 'react'
import { Link } from 'react-router-dom'
import ShadowBox from '../common/boxes/shadowBox'
import iconPlus from '../../assets/images/icons/icon_plus.svg'
import iconListed from '../../assets/images/icons/icon_listed.svg'
import iconNotListed from '../../assets/images/icons/icon_not_listed.svg'
import iconOverDue from '../../assets/images/icons/icon_overdue.svg'

const data = [
  {
    image: 'https://source.unsplash.com/random',
    name: 'Smart 1bedroomer in downtown',
    info: 'Overdue',
    icon: iconOverDue,
    repair: true
  },
  {
    image: 'https://source.unsplash.com/random',
    name: 'Downtown penthouse',
    info: 'Not listed',
    icon: iconNotListed
  },
  {
    image: 'https://source.unsplash.com/random',
    name: 'Valley paradise condo',
    info: 'Listed',
    icon: iconListed
  }
]

const Properties = () => {
  return (
    <ShadowBox className='box'>
      <div className='d-flex justify-content-between'>
        <h4 className='title'>Properties</h4>
        <Link to='/landlord/properties/create'>
          <button type='button' className='btn-plus'><img src={iconPlus} alt='' /></button>
        </Link>
      </div>
      <div className='info'>
        <div>
          <span className='number'>16</span>
          <span className='description'>Total</span>
        </div>
        <div>
          <span className='number'>4</span>
          <span className='description'>Overdue</span>
        </div>
        <div>
          <span className='number'>1</span>
          <span className='description'>Not listed</span>
        </div>
      </div>
      <ul className='listing'>
        {data && data.map((item, index) => {
          return (
            <li key={index} className='item'>
              <img className='image' src={item.image} />
              <div>
                <div className='name'>
                  {item.name}
                  {item.repair && <i className='fa fa-wrench' />}
                </div>
                <div className='d-flex flex-row align-items-center'>
                  <img className='icon-status' src={item.icon} alt='' />
                  <div className='description'>{item.info}</div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <Link className='btn-all' to='/landlord/properties/create'>
        All properties
      </Link>
    </ShadowBox>
  )
}

export default Properties
