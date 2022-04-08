import React from 'react'
import './style.scss'

import checkedImg from '../../../../assets/images/icons/componentscheckbox.svg'
import unCheckedImg from '../../../../assets/images/icons/components_uncheckbox.svg'

const CheckBox = ({ checked, label, onClick }) => {
  return (
    <div className='form-check' onClick={onClick}>
      <img src={checked ? checkedImg : unCheckedImg} alt='checkbox' />
      <label className='form-check-label'>{label}</label>
    </div>
  )
}

export default CheckBox
