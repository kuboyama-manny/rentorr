import React from 'react'

import MenuItem from '../common/menu/MenuItem'
import MenuComponent from '../common/menu/MenuComponent'

// icons
import iconInviteUser from '../../assets/images/icons/Icons16Invite_default.png'
import iconArchive from '../../assets/images/icons/Icons16Archive_default.png'
import iconDeactivateRed from '../../assets/images/icons/Icons16Deactivate_red.png'

const MenuListed = ({ editProperty }) => {
  return (
    <MenuComponent>
      <MenuItem icon={iconInviteUser} label='Invite tenant' />
      <MenuItem icon={iconArchive} label='Archive property' />
      <MenuItem divider />
      <MenuItem icon={iconDeactivateRed} label='Deactivate property' />
    </MenuComponent>
  )
}

export default MenuListed
