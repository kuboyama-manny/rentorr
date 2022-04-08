import React from 'react'

const WhiteButton = ({ title, onClick, extraClass }) => {
  return (
    <a className={`button--white normal ${extraClass}`} onClick={onClick}>
      {title}
    </a>
  )
}

export default WhiteButton
