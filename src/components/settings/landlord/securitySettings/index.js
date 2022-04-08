import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Box from '@material-ui/core/Box'

import SettingLayout from '../../../common/settingLayout'
import CheckBox from '../../../common/buttons/customCheckbox'

// icons
import CheckIcon from '../../../../assets/images/icons/icon_check_blue.svg'
import ControlImg from '../../../../assets/images/settings/Img_control.png'

const visibilities = [
  {
    value: 'Public',
    label: 'Public'
  },
  {
    value: 'Private',
    label: 'Private'
  },
  {
    value: 'Custom',
    label: 'Custom'
  },
]

const useStyles = makeStyles(theme => ({
  select: {
    '& > div': {
      '& > img': {
        display: 'none'
      }
    }
  },
  menuListItem: {
    backgroundColor: '#ffffff !important',
    '&:hover': {
      backgroundColor: '#dfebff !important'
    },
    '& > img': {
      marginLeft: '20px'
    }
  },
  selected: {
    backgroundColor: '#dfebff'
  }
}))

const SecuritySettings = () => {
  
  const classes = useStyles()
  const [visibility, setVisibility] = useState('')
  const [detailOptions, setDetailOptions] = useState({
    firstName: false,
    lastname: false,
    company: false,
    yourPhoto: false,
    yourLeases: false,
    emailAddress: false,
    phoneNumber: false,
    bio: false,
    yourProperties: false,
    registrationNo: false
  })

  const right = (
    <>
      <div className='right-block'>
        <img className='block-img' src={ControlImg} alt="" />
        <div className='title'>
          We care about your information safety!
        </div>
        <div className='text'>
          Be in control of into you want to show to general public, if you decide to go private - your profile details will be shown only after your authorization!
        </div>
      </div>
      <button type='button' className='btn-save d-md-none'>
        save changes
      </button>
    </>
  );

  return (
    <SettingLayout
      className='tenant-security-settings'
      right={right}
      title={'Security settings'}>
      <form className='form'>
        <div className='d-flex section'>
          <div>
            <div className='section-title'>
              Password
            </div>
            <p className='section-text'>
              It's a good idea to use a strong password but you're not using elsewhere.
              <a className='link-text'>
                Change
              </a>
            </p>
          </div>
        </div>
        <div className='section visibility-section'>
          <div>
            <div className='section-title'>
              Profile visibility
              <a className='link-text'>
                View your public profile
              </a>
            </div>
            <FormControl>
              <InputLabel className='label' id='select-profile-visibility-label'>Profile visibility</InputLabel>
              <Select
                labelId='select-profile-visibility-label'
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left'
                  }
                }}
                className={classes.select}
              >
                {
                  visibilities.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        value={item.value}
                        className={useStyles().menuListItem}
                      >
                        {item.label}
                        {item.value === visibility && <img src={CheckIcon} alt='' />}
                      </MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>
            <div className='visible-details'>
              <div className='label MuiInputLabel-shrink'>Public visible profile details</div>
              <Box display="flex">
                <div style={{width: '50%'}}>
                  <CheckBox
                    label='First Name'
                    checked={detailOptions.firstName}
                    onClick={() => setDetailOptions({...detailOptions, firstName: !detailOptions.firstName})}
                  />
                  <CheckBox
                    label='Last Name'
                    checked={detailOptions.lastName}
                    onClick={() => setDetailOptions({...detailOptions, lastName: !detailOptions.lastName})}
                  />
                  <CheckBox
                    label='Company'
                    checked={detailOptions.company}
                    onClick={() => setDetailOptions({...detailOptions, company: !detailOptions.company})}
                  />
                  <CheckBox
                    label='Your Photo'
                    checked={detailOptions.yourPhoto}
                    onClick={() => setDetailOptions({...detailOptions, yourPhoto: !detailOptions.yourPhoto})}
                  />
                  <CheckBox
                    label='Your Leases'
                    checked={detailOptions.yourLeases}
                    onClick={() => setDetailOptions({...detailOptions, yourLeases: !detailOptions.yourLeases})}
                  />
                </div>
                <div style={{width: '50%'}}>
                  <CheckBox
                    label='Email'
                    checked={detailOptions.emailAddress}
                    onClick={() => setDetailOptions({...detailOptions, emailAddress: !detailOptions.emailAddress})}
                  />
                  <CheckBox
                    label='Phone'
                    checked={detailOptions.phoneNumber}
                    onClick={() => setDetailOptions({...detailOptions, phoneNumber: !detailOptions.phoneNumber})}
                  />
                  <CheckBox
                    label='Bio'
                    checked={detailOptions.bio}
                    onClick={() => setDetailOptions({...detailOptions, bio: !detailOptions.bio})}
                  />
                  <CheckBox
                    label='Your Properties'
                    checked={detailOptions.yourProperties}
                    onClick={() => setDetailOptions({...detailOptions, yourProperties: !detailOptions.yourProperties})}
                  />
                  <CheckBox
                    label='Registration No'
                    checked={detailOptions.registrationNo}
                    onClick={() => setDetailOptions({...detailOptions, registrationNo: !detailOptions.registrationNo})}
                  />
                </div>
              </Box>
            </div>

          </div>
        </div>
        
        <button type='button' className='btn-save d-md-block d-none'>
          save changes
        </button>
      </form>
    </SettingLayout>
  )
}

export default SecuritySettings
