import React from 'react'
import ShadowBox from '../common/boxes/shadowBox'

const InfoBox = ({ icon, number, caption, percent, up = true }) => {
  return (
    <ShadowBox className='info-box'>
      <img className='icon' src={icon} />
      <div className='number'>{number}</div>
      <div className='caption'>
        {caption}
        {
          percent &&
            <span className={`percent ${up ? 'up' : 'down'}`}>
              <i className={`fa ${up ? 'fa-caret-up' : 'fa-caret-down'}`} />
              {percent}
            </span>
        }
      </div>
    </ShadowBox>
  )
}
export default InfoBox
