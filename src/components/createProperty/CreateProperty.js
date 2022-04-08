import React, { useCallback, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { useDropzone } from 'react-dropzone'
import _ from 'lodash'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import LocationSearchInput from '../common/forms/inputs/addressAutoComplete'

import LoadingWrapper from '../common/wrappers/loadingWrapper'
import { createProperty, editProperty } from '../../actions/landlord/properties'
import { notificationMessage } from '../../utils/utilityFunctions'

import './style.scss'
// icons
import iconNext from '../../assets/images/icons/icon-next-white.png'
import iconClose from '../../assets/images/icons/icons16close_white.svg'
import CheckIcon from '../../assets/images/icons/icon_check_blue.svg'

const MAX_BEDS = 8
const MAX_BATHROOM = 4
const types = [
  {
    value: 'Apartment',
    label: 'Apartment'
  },
  {
    value: 'House',
    label: 'House'
  },
  {
    value: 'Duplex',
    label: 'Duplex'
  },
  {
    value: 'Room',
    label: 'Room'
  }
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

const Options = ({ max, activeValue = 0 }) => {
  const options = []
  for (let index = 1; index <= max; index++) {
    options.push(
      <MenuItem
        key={index}
        value={index}
        className={useStyles().menuListItem}
      >
        {`${index}`}
        {index === activeValue && <img src={CheckIcon} alt='' />}
      </MenuItem>
    )
  }
  return options
}

const CreateProperty = (props) => {
  const classes = useStyles()
  const [pageType, setPageType] = useState('Create')
  const [pDetails, setPDetails] = useState(null)

  const [isNameFocus, setNameFocus] = useState(false)
  const [pname, onChangeName] = useState('')

  const [isAddressFocus, setAddressFocus] = useState(false)
  const [address, onChangeAddress] = useState('')

  const [isUnitFocus, setUnitFocus] = useState(false)
  // const [punit, onChangeUnit] = useState('')

  const [bedNum, setBedNum] = useState('')

  const [bathroom, setBathroom] = useState('')

  const [isSizeFocus, setSizeFocus] = useState(false)
  const [squareSize, onChangeSquareSize] = useState('')

  const [propertyType, setPropertyType] = useState('')

  const [isMonthlyRentFocus, setMonthlyRentFocus] = useState(false)
  const [monthlyRent, onChangeMonthlyRent] = useState('')

  const [isSecurityDepositFocus, setSecurityDepositFocus] = useState(false)
  const [securityDeposit, onChangeSecurityDeposit] = useState('')

  const [isVideoTourFocus, setVideoTourFocus] = useState(false)
  const [videoTour, onChangeVideoTour] = useState('')

  const [isAddInfoFocus, setAddInfoFocus] = useState(false)
  const [addInfo, onChangeAddInfo] = useState('')

  const [previews, setPreviews] = useState([])
  const [deletedItems, setDeletedItems] = useState([])

  const [alertShown, setAlertShown] = useState(false)

  useEffect(() => {
    if (props.match.params.id) {
      setPageType('Edit')
      if (props.properties.length !== 0) {
        let details = props.properties.filter(o => o._id === props.match.params.id)[0]
        setPDetails(details)
        setPreviews(details.media.map(item => item.link))
        onChangeName(details.name)
        onChangeAddress(details.address)
        // onChangeUnit(details.unit !== 'NaN' ? details.unit :'')
        setBedNum(details.beds)
        setBathroom(details.bathrooms)
        onChangeSquareSize(details.size)
        setPropertyType(details.category)
        onChangeMonthlyRent(addCommas(details.rent.toString()))
        onChangeSecurityDeposit(addCommas(details.deposit.toString()))
        onChangeVideoTour(details.intro_video)
        onChangeAddInfo(details.additional_info[0])
      }
    }
  }, [props.match.params.id, props.properties])

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        onChangeAddress(results[0].formatted_address)
        return getLatLng(results[0])
      })
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  const validateFields = () => {
    return !(pname==='' || pname.length>35 || address==='' || bedNum==='' || bathroom==='' || squareSize==='' || propertyType==='' || monthlyRent==='' || securityDeposit==='' || previews.length === 0)
  }

  const submitProperty = () => {
    if (validateFields()) {
      const data = {
        file: previews.map(item => item.file),
        name: pname,
        address: address,
        // unit: parseFloat(punit),
        beds: parseFloat(bedNum),
        bathrooms: parseFloat(bathroom),
        size: parseFloat(squareSize),
        category: propertyType,
        rent: parseFloat(monthlyRent.split(',').join('')),
        deposit: parseFloat(securityDeposit.split(',').join('')),
        lease_duration: '',
        intro_video: videoTour,
        additional_info: addInfo
      }
      if (pageType === 'Create') {
        props.createProperty(data)
      } else {
        let updatedData = {}
        if (pDetails.name !== pname) {
          updatedData['name'] = pname
        }
        if (pDetails.address !== address) {
          updatedData['address'] = address
        }
        if (pDetails.beds !== parseFloat(bedNum)) {
          updatedData['beds'] = parseFloat(bedNum)
        }
        if (pDetails.bathrooms !== parseFloat(bathroom)) {
          updatedData['bathrooms'] = parseFloat(bathroom)
        }
        if (pDetails.size !== parseFloat(squareSize)) {
          updatedData['size'] = parseFloat(squareSize)
        }
        if (pDetails.category !== propertyType) {
          updatedData['category'] = propertyType
        }
        if (pDetails.rent !== parseFloat(monthlyRent.split(',').join(''))) {
          updatedData['rent'] = parseFloat(monthlyRent.split(',').join(''))
        }
        if (pDetails.deposit !== parseFloat(securityDeposit.split(',').join(''))) {
          updatedData['deposit'] = parseFloat(securityDeposit.split(',').join(''))
        }
        if (pDetails.intro_video !== videoTour) {
          updatedData['intro_video'] = videoTour
        }
        // if (pDetails.additional_info !== addInfo) {
        //   updatedData['additional_info'] = addInfo
        // }
        const objectPreviews = previews.filter(item => typeof item !== 'string')
        const file = objectPreviews.length > 0 ? objectPreviews.map(item => item.file) : []
        if (file.length > 0) updatedData['file'] = file
        if (deletedItems.length > 0) updatedData['media_to_delete'] = deletedItems
        props.editProperty(props.match.params.id, updatedData)
      }
    } else {
      setAlertShown(true)
    }
  }

  const readFile = (file) => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      const reader = new FileReader()
      reader.onload = (entry) => {
        // eslint-disable-next-line no-undef
        const image = new Image()
        image.src = entry.target.result
        image.onload = () => {
          resolve({
            file: file,
            width: image.width,
            height: image.height,
            dataURL: image.src
          })
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const onDrop = useCallback((acceptedFiles) => {
    const promises = []
    acceptedFiles.forEach((file) => {
      promises.push(readFile(file))
    })
    Promise.all(promises).then(newFilesData => {
      console.log('newFilesData', newFilesData)
      let tempData = _.cloneDeep(previews)
      newFilesData.forEach(file => {
        if (file.width > 200) {
          tempData.push(file)
        } else {
          notificationMessage('error', `${file.file.name} is too small`)
        }
      })
      setPreviews(tempData)
    })
  }, [previews])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const removeFile = (index, type, file) => {
    if (type === 'link') {
      const deletedItem = pDetails.media.find(item => item.link === file)
      const cloneDeletedItems = [...deletedItems]
      deletedItem && cloneDeletedItems.push(deletedItem._id)
      setDeletedItems(cloneDeletedItems)
    }
    const clone = [...previews]
    clone.splice(index, 1)
    setPreviews(clone)
  }

  const files = previews.map((file, index) => {
    if (typeof file === 'string') {
      return (
        <li className='image-item' key={index}>
          <img alt='' className='preview' src={file} />
          <a className='btn-close' onClick={() => removeFile(index, 'link', file)}>
            <img alt='' src={iconClose} />
          </a>
        </li>
      )
    } else {
      return (
        <li className='image-item' key={index}>
          <img alt='' className='preview' src={file.dataURL} />
          <a className='btn-close' onClick={() => removeFile(index, 'file', file)}>
            <img alt='' src={iconClose} />
          </a>
        </li>
      )
    }
  })

  const images = pDetails && pDetails.media.map((img, index) => (
    <li className='image-item' key={index}>
      <img alt='' className='preview' src={img.link} />
      <a className='btn-close'>
        <img alt='' src={iconClose} />
      </a>
    </li>
  ))

  const [isSticky, setSticky] = useState(false)
  const handleScroll = e => {
    const element = e.target
    if (element.scrollTop > 100) {
      if (!isSticky) {
        setSticky(true)
      }
    } else if (isSticky) {
      setSticky(false)
    }
  }

  const addCommas = (str) => {
    // let index = str.search(/[1-9]/)
    // index = index === -1 ? str.length : index
    // return str.substring(0, index) + str.substring(index, str.length).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    if (str) {
      str = str.split(',').join('')
    }
    const numParts = str.toString().split('.')
    numParts[0] = numParts[0] && parseFloat(numParts[0]).toLocaleString()
    return numParts.join('.')
  }

  return (
    <LoadingWrapper isLoading={props.isLoading}>
      <div className='create-property-page' onScroll={handleScroll}>
        <div className={`sticky-header ${isSticky ? 'show' : ''}`}>
          <div className='content-container'>
            <h2 className='title'>{`${pageType} Property`}</h2>
            <div className='cpp-header__close-position'>
              <a onClick={() => props.history.goBack()} />
            </div>
          </div>
        </div>
        <div className='cpp-header'>
          <h2 className='cpp-header-title'>{`${pageType} Property`}</h2>
          <div className='cpp-header__close-position'>
            <a onClick={() => props.history.goBack()} />
          </div>
          <p className='cpp-header-sub-title'>Find a qualified tenant, sign a lease and accept rent payments.</p>
        </div>

        <div className='cpp-body'>
          <div className='cpp-basic cpp-section'>
            <h5 className='cpp-basic-title cpp-section-title'>Property Basics</h5>
            <div className={`field-wrap ${pname ? 'has-val' : ''} ${isNameFocus ? 'is-focused' : ''}`}>
              <input
                className='form-control create-property__valid'
                placeholder=' '
                id='pname'
                name='pname'
                value={pname}
                required
                type='text'
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                onChange={(evt) => onChangeName(evt.currentTarget.value)}
              />
              <label className='control-label create-property__valid-label' htmlFor='pname'>Property Name</label>
              { alertShown && pname === '' && <div className="required-alert">This field is required.</div> }
              { alertShown && pname !== '' && pname.length > 35 && <div className="required-alert">The property name is limited to 35 characters.</div> }
            </div>
            <div className='cpp-basic__second-row'>
              <div className='address-auto_complete'>
                <LocationSearchInput
                  address={address}
                  handleChange={onChangeAddress}
                  handleSelect={() => handleSelect(address)}
                />
              </div>
              {/* <div className={`field-wrap ${punit ? 'has-val' : ''} ${isUnitFocus ? 'is-focused' : ''}`}>
                <input
                  className='form-control main-form__name-input'
                  id='punit'
                  name='punit'
                  type='text'
                  required
                  value={punit}
                  onFocus={() => setUnitFocus(true)}
                  onBlur={() => setUnitFocus(false)}
                  onChange={(evt) => onChangeUnit(evt.currentTarget.value)}
                />
                <label className='control-label' htmlFor='punit'>Unit (Optional)</label>
              </div> */}
            </div>
            { alertShown && address === '' && <div className="required-alert">This field is required.</div> }
            <div className='cpp-basic__third-row'>
              <div>
                <FormControl>
                  <InputLabel className='label' id='select-bed-label'>Beds</InputLabel>
                  <Select
                    labelId='select-bed-label'
                    value={bedNum}
                    onChange={(e) => setBedNum(e.target.value)}
                    MenuProps={{
                      getContentAnchorEl: null,
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                      }
                    }}
                    className={classes.select}
                  >
                    {Options({ max: MAX_BEDS, activeValue: bedNum })}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl>
                  <InputLabel className='label' id='select-bathrooms-label'>Bathrooms</InputLabel>
                  <Select
                    labelId='select-bathrooms-label'
                    value={bathroom}
                    onChange={(e) => setBathroom(e.target.value)}
                    MenuProps={{
                      getContentAnchorEl: null,
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                      }
                    }}
                    className={classes.select}
                  >
                    {Options({ max: MAX_BATHROOM, activeValue: bathroom })}
                  </Select>
                </FormControl>
              </div>
              <div className={`square-meter field-wrap ${squareSize ? 'has-val' : ''} ${isSizeFocus ? 'is-focused' : ''}`}>
                <input
                  className='form-control main-form__name-input'
                  id='squareMeter'
                  name='squareMeter'
                  type='text'
                  required
                  value={squareSize}
                  onFocus={() => setSizeFocus(true)}
                  onBlur={() => setSizeFocus(false)}
                  onChange={(evt) => onChangeSquareSize(evt.currentTarget.value)}
                />
                <label className='control-label' htmlFor='squareMeter'>m²</label>
              </div>
              <div>
                <FormControl>
                  <InputLabel className='label' id='select-type-label'>Type</InputLabel>
                  <Select
                    labelId='select-square-meter-label'
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
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
                      types.map((item, index) => {
                        return (
                          <MenuItem
                            key={index}
                            value={item.value}
                            className={useStyles().menuListItem}
                          >
                            {item.label}
                            {item.value === propertyType && <img src={CheckIcon} alt='' />}
                          </MenuItem>
                        )
                      })
                    }
                  </Select>
                </FormControl>
              </div>
            </div>
            {alertShown && (bedNum === '' || bathroom === '' || squareSize === '' || propertyType === '') && <div className="required-alert">These fields are required.</div> }
          </div>
          <div className='cpp-lease-details cpp-section'>
            <h5 className='cpp-section-title cpp-lease-details-title'>Lease Details</h5>
            <div className='cpp-lease-details__first-row'>
              <div className={`lease-details field-wrap ${monthlyRent ? 'has-val' : ''} monthly-rent-wrap ${isMonthlyRentFocus ? 'is-focused' : ''}`}>
                <input
                  className='form-control main-form__name-input'
                  id='monthly-rent'
                  name='monthly-rent'
                  type='text'
                  required
                  value={monthlyRent}
                  onFocus={() => setMonthlyRentFocus(true)}
                  onBlur={() => setMonthlyRentFocus(false)}
                  onChange={(evt) => onChangeMonthlyRent(addCommas(evt.currentTarget.value))}
                />
                <span className='r__prefix'>R</span>
                <label className='control-label' htmlFor='monthly-rent'>Monthly Rent</label>
              </div>
              <div className={`lease-details field-wrap ${securityDeposit ? 'has-val' : ''} ${isSecurityDepositFocus ? 'is-focused' : ''}`}>
                <input
                  className='form-control main-form__name-input'
                  id='security-deposit'
                  name='security-deposit'
                  type='text'
                  required
                  value={securityDeposit}
                  onFocus={() => setSecurityDepositFocus(true)}
                  onBlur={() => setSecurityDepositFocus(false)}
                  onChange={(evt) => onChangeSecurityDeposit(addCommas(evt.currentTarget.value))}
                />
                <span className='r__prefix'>R</span>
                <label className='control-label' htmlFor='security-deposit'>Security Deposit</label>
              </div>
            </div>
            { alertShown && (monthlyRent === '' || securityDeposit === '') && <div className="required-alert">These fields are required.</div> }
          </div>
          <div className='cpp-photo-video cpp-section'>
            <h5 className='cpp-section-title cpp-photo-video-title'>Photos & Video</h5>
            {
              files &&
                <ul className='list-image-preview'>
                  {files}
                </ul>
            }
            <div {...getRootProps({ className: (files && files.length > 0) ? 'drag-drop-photo have-file' : 'drag-drop-photo' })}>
              <input {...getInputProps()} />
              <div className='drag-drop-photo-text'>
                <p>Drag & Drop your photo here</p>
                <p>or <a>choose</a> photos from your computer</p>
              </div>
            </div>
            { alertShown && previews.length === 0 && <div className="required-alert">These fields are required.</div> }
            <div className={`field-wrap video-tour ${videoTour ? 'has-val' : ''} ${isVideoTourFocus ? 'is-focused' : ''}`}>
              <input
                className='form-control create-property__valid'
                placeholder=' '
                id='video-tour'
                name='video-tour'
                value={videoTour}
                required
                type='text'
                onFocus={() => setVideoTourFocus(true)}
                onBlur={() => setVideoTourFocus(false)}
                onChange={(evt) => onChangeVideoTour(evt.currentTarget.value)}
              />
              <label className='control-label create-property__valid-label' htmlFor='video-tour'>Video Tour</label>
            </div>
            <div className='cpp-tooltip-wrapper'>
              <div className='cpp-tooltip'>
                <div className='round' />
                <div className='title'>
                  Did you know?
                </div>
                <div className='content'>
                  That high quality photos will increase conversion rate up to 114%.
                </div>
                <div className='content'>
                  And honest explanatory video will add 37% more!
                </div>
              </div>
            </div>
          </div>
          <div className='cpp-add-info cpp-section'>
            <h5 className='cpp-section-title cpp-add-info-title'>Additional Information</h5>
            <div className={`field-wrap ${addInfo ? 'has-val' : ''} ${isAddInfoFocus ? 'is-focused' : ''}`}>
              <textarea
                className='form-control create-property__valid'
                placeholder=' '
                id='add-info'
                name='add-info'
                value={addInfo}
                onFocus={() => setAddInfoFocus(true)}
                onBlur={() => setAddInfoFocus(false)}
                onChange={(evt) => onChangeAddInfo(evt.currentTarget.value)}
              />
              <label className='control-label create-property__valid-label' htmlFor='add-info'>What makes your place great?</label>
            </div>
          </div>
        </div>
        <div className='cpp-footer'>
          <div className='cpp-footer-btn'>
            {
              pageType === 'Create' ?
                <a className='button--blue cpp-btn-create' onClick={submitProperty}>
                  CREATE
                  <img className='icon-next' alt='next' src={iconNext} />
                </a>
                :
                <a className='button--blue cpp-btn-create' onClick={submitProperty}>
                  SAVE
                </a>
            }
            <a className='cpp-btn-save-as-draft' onClick={() => props.history.goBack()}>
              NEVER MIND
            </a>
          </div>
        </div>
      </div>
    </LoadingWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.landlord.properties.isLoading,
    properties: state.landlord.properties.properties,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProperty: (data) => {
      dispatch(createProperty(data))
    },
    editProperty: (id, data) => {
      dispatch(editProperty(id, data))
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateProperty)
)
