import React from 'react'
import Loader from '../../../../animation/loader'

const BlueButton = ({ title, onClick, extraClass, duration, isLoading, disabled }) => {
  return (
    <a className={`button--blue normal ${extraClass} ${disabled ? 'disabled' : ''}`} onClick={disabled ? () => {} : onClick} data-wow-duration={duration}>
      {isLoading ? <Loader animation='BlueButtonLoader' /> : title}
    </a>
  )
}

export default BlueButton
