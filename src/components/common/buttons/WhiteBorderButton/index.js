import React from 'react'

const WhiteBorderButton = ({ title, onClick, extraClass }) => {
  return (
    <a className={`button--white--border normal ${extraClass}`} onClick={onClick}>
      {title}
    </a>
  )
}

export default WhiteBorderButton
