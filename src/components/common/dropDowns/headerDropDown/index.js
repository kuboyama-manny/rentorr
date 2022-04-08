import React from 'react'
import { MenuList, MenuItem, MenuButton } from 'react-menu-list'

import { auth } from '../../../../layouts/auth'
// import avatar from '../../../../assets/images/icons/Avatar.png'
import { calculateDefaultAvatarBackground, intToRGB } from '../../../../utils/utilityFunctions'
import dropDownIcon from '../../../../assets/images/icons/icons-drop_default.png'
import findProperty from '../../../../assets/images/icons/find-property.png'
import accountSetting from '../../../../assets/images/icons/account-setting.png'
import help from '../../../../assets/images/icons/help.png'
import signOut from '../../../../assets/images/icons/sign-out.png'
import switchAccount from '../../../../assets/images/icons/switch.png'

import history from '../../../../history'

const Li = props => {
  return (
    <MenuItem
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        color: '#282830',
        fontFamily: 'Roboto'
      }}
      className='menu-item-section'
      // highlightedStyle={{ background: 'gray' }}
      {...props}
    />
  )
}

const HeaderDropDown = () => {
  const getUserAvatar = () => {
    return window.localStorage.getItem('firstName')[0].toUpperCase() + window.localStorage.getItem('lastName')[0].toUpperCase()
  }
  return (
    <div className='icon-wrapper'>
      <MenuButton
        className='menu-button'
        menuZIndex={9999}
        positionOptions={{
          position: 'cover', vAlign: 'bottom', hAlign: 'right'
        }}
        menu={
          <div className='menu-content'>
            <MenuList>
              <Li>
                <div>
                  <img src={findProperty} alt='icon' />
                  <span>Find Property</span>
                </div>
              </Li>
              <Li>
                <div onClick={() => auth.getRole() === 'LANDLORD' ? history.push('/landlord/settings/general') : history.push('/tenant/settings/security')}>
                  <img src={accountSetting} alt='icon' />
                  <span>Account & Settings</span>
                </div>
              </Li>
              <Li>
                <div>
                  <img src={help} alt='icon' />
                  <span>Help</span>
                </div>
              </Li>
              <Li>
                {/* eslint-disable-next-line react/jsx-handler-names */}
                <div onClick={auth.logout}>
                  <img src={signOut} alt='icon' />
                  <span>Sign out</span>
                </div>
              </Li>
              <Li>
                <div>
                  <img src={switchAccount} alt='icon' />
                  <span>{auth.getRole() === 'LANDLORD' ? 'Switch to Tenant' : 'Switch to Landlord'}</span>
                </div>
              </Li>
            </MenuList>
          </div>
        }
      >
        <div className='icon-part'>
          <div
            className='icon-sm'
            style={{
              // backgroundColor: '#FFA500'
              backgroundColor: `#${intToRGB(calculateDefaultAvatarBackground(auth.getUserName()))}`
            }}
          >
            <span>{getUserAvatar()}</span>
          </div>
          <div className='icon-arrow'>
            <img src={dropDownIcon} alt='icon' />
          </div>
        </div>
      </MenuButton>
    </div>
  )
}

export default HeaderDropDown
