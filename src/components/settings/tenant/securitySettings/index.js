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
    yourPhoto: false,
    financials: false,
    emailAddress: false,
    phoneNumber: false,
    rentalHistory: false,
    employmentHistory: false,
    creditScore: false,
    affordability: false
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
                    label='Your Photo'
                    checked={detailOptions.yourPhoto}
                    onClick={() => setDetailOptions({...detailOptions, yourPhoto: !detailOptions.yourPhoto})}
                  />
                  <CheckBox
                    label='Financials'
                    checked={detailOptions.financials}
                    onClick={() => setDetailOptions({...detailOptions, financials: !detailOptions.financials})}
                  />
                  <CheckBox
                    label='Email Address'
                    checked={detailOptions.emailAddress}
                    onClick={() => setDetailOptions({...detailOptions, emailAddress: !detailOptions.emailAddress})}
                  />
                </div>
                <div style={{width: '50%'}}>
                  <CheckBox
                    label='Phone Number'
                    checked={detailOptions.phoneNumber}
                    onClick={() => setDetailOptions({...detailOptions, phoneNumber: !detailOptions.phoneNumber})}
                  />
                  <CheckBox
                    label='Rental History'
                    checked={detailOptions.rentalHistory}
                    onClick={() => setDetailOptions({...detailOptions, rentalHistory: !detailOptions.rentalHistory})}
                  />
                  <CheckBox
                    label='Employment History'
                    checked={detailOptions.employmentHistory}
                    onClick={() => setDetailOptions({...detailOptions, employmentHistory: !detailOptions.employmentHistory})}
                  />
                  <CheckBox
                    label='Credit Score'
                    checked={detailOptions.creditScore}
                    onClick={() => setDetailOptions({...detailOptions, creditScore: !detailOptions.creditScore})}
                  />
                  <CheckBox
                    label='Affordability Check'
                    checked={detailOptions.affordability}
                    onClick={() => setDetailOptions({...detailOptions, affordability: !detailOptions.affordability})}
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
