import React from 'react'
import CheckIcon from '../../../assets/images/icons/icon_check_blue.svg'

const MenuItem = ({ icon, label, onClick, divider, selected }) => {
  if (divider) {
    return (
      <div className='menu-item divider' />
    )
  }
  return (
    <a className='menu-item' onClick={onClick}>
      <div className='menu-text'>
        {icon && <img alt='' className='icon' src={icon} />}
        <div className='text'>
          {label}
        </div>
      </div>
      {selected && <img className='selected' src={CheckIcon} alt='' />}
    </a>
  )
}

export default MenuItem
