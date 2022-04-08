import React from 'react'

import MenuItem from '../common/menu/MenuItem'
import MenuComponent from '../common/menu/MenuComponent'

// icons
import iconInviteUser from '../../assets/images/icons/Icons16Invite_default.png'
import iconArchive from '../../assets/images/icons/Icons16Archive_default.png'
import iconDeactivateRed from '../../assets/images/icons/Icons16Deactivate_red.png'

import iconList from '../../assets/images/icons/Icons16List_default.png'

const MenuNotListed = ({ editProperty }) => {
  return (
    <MenuComponent>
      <MenuItem icon={iconList} label='List property' />
      <MenuItem icon={iconInviteUser} label='Invite tenant' />
      <MenuItem icon={iconArchive} label='Archive property' />
      <MenuItem divider />
      <MenuItem icon={iconDeactivateRed} label='Deactivate property' />
    </MenuComponent>
  )
}

export default MenuNotListed
