import React from 'react'
import iconNotListed from '../../assets/images/icons/icon_not_listed_blue.svg'
import iconListed from '../../assets/images/icons/icon_listed_orange.svg'
import iconRented from '../../assets/images/icons/icon_rented.svg'
// import iconArchived from '../../assets/images/icons/icon_archived.svg'

const TitleIcon = ({ status, rented, listed }) => {
  const calculateOptions = () => {
    let icon
    let text
    let color
    // if (status === 'listed') {
    //   icon = iconListed
    //   text = 'Listed'
    //   color = '#FFA000'
    // } else if (status === 'not_listed') {
    //   icon = iconNotListed
    //   text = 'Not listed'
    //   color = '#1A5DC6'
    // } else if (status === 'rented') {
    //   icon = iconRented
    //   text = 'Rented'
    //   color = '#4CAF50'
    // } else if (status === 'archived') {
    //   icon = iconArchived
    //   text = 'Archived'
    //   color = '#838390'
    // }
    if (rented) {
      icon = iconRented
      text = 'Rented'
      color = '#4CAF50'
      return { icon, text, color }
    }

    if (listed) {
      icon = iconListed
      text = 'Listed'
      color = '#FFA000'
      return { icon, text, color }
    } else {
      icon = iconNotListed
      text = 'Not listed'
      color = '#1A5DC6'
      return { icon, text, color }
    }
  }
  return (
    <span className='icon-status' style={{ color: calculateOptions().color }}>
      <img alt={status} className='icon' src={calculateOptions().icon} />
      {calculateOptions().text}
    </span>
  )
}

export default TitleIcon
