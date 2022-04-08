import React from 'react'
import ShadowBox from '../common/boxes/shadowBox'
import iconPlus from '../../assets/images/icons/icon_plus.svg'
import iconDoc from '../../assets/images/icons/icon_docs.svg'

const data = [
  {
    name: 'Rental Agreement',
    info: '2:39 PM, Jan 5, 2019'
  },
  {
    name: 'Addenda to the agreement',
    info: '2:39 PM, Jan 5, 2019'
  },
  {
    name: 'Mandate Addendum',
    info: '2:39 PM, Jan 5, 2019'
  }
]

const Documents = () => {
  return (
    <ShadowBox className='box document-box'>
      <div className='d-flex justify-content-between'>
        <h4 className='title'>documents</h4>
        <button type='button' className='btn-plus'><img src={iconPlus} alt='' /></button>
      </div>
      <ul className='listing'>
        {data && data.map((item, index) => {
          return (
            <li key={index} className='item'>
              <img className='icon-doc' src={iconDoc} alt='' />
              <div>
                <div className='name'>
                  {item.name}
                  {item.repair && <i className='fa fa-wrench' />}
                </div>
                <div className='d-flex flex-row align-items-center'>
                  <div className='description'>{item.info}</div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <a className='btn-all'>
        All documents
      </a>
    </ShadowBox>
  )
}

export default Documents
