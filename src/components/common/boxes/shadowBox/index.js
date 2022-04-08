import React from 'react'

const ShadowBox = ({ children, className }) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 14px 45px 0 rgba(30,37,50,0.03)'
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default ShadowBox
