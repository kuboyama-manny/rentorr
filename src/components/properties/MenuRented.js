import React from 'react'

import MenuItem from '../common/menu/MenuItem'
import MenuComponent from '../common/menu/MenuComponent'

// icons

import iconContract from '../../assets/images/icons/Icons16Contract_default.png'
import iconExtend from '../../assets/images/icons/Icons16Extend_default.png'
import iconTerminate from '../../assets/images/icons/Icons16Terminate_default.png'

const MenuRented = () => {
  return (
    <MenuComponent>
      <MenuItem icon={iconContract} label='Offer new terms' />
      <MenuItem icon={iconExtend} label='Extend contract' />
      <MenuItem icon={iconTerminate} label='Terminate contract' />
    </MenuComponent>
  )
}

export default MenuRented
