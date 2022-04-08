import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'

import SettingLayout from '../../../common/settingLayout'
import FieldInput from '../../../common/forms/inputs/FieldInput'

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const reader = new FileReader()

    // Read the image via FileReader API and save image result in state.
    reader.onload = function (e) {
      // Add the file name to the data URL
      let dataURL = e.target.result
      dataURL = dataURL.replace(';base64', `;name=${file.name};base64`)
      resolve({ file, dataURL })
    }

    reader.readAsDataURL(file)
  })
}

const GeneralSettings = () => {

  const [previews, setPreviews] = useState([])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, changeEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [aboutYourself, setAboutYourself] = useState('')

  const onDrop = useCallback((acceptedFiles) => {
    const promises = []
    acceptedFiles.forEach((file) => {
      promises.push(readFile(file))
    })
    Promise.all(promises).then(newFilesData => {
      setPreviews(newFilesData)
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const right = (
    <>
      <div className='right-block'>
        <div className='title'>
          ID Verification
        </div>
        <div className='text'>
          You need to verify ID to be able to initiate Lease sign process.
        </div>
        <div className='link-wrapper'>
          <Link to={'/landlord/settings/id-verification'} className='link-text' href='#'>
            Verify ID
          </Link>
        </div>
      </div>
      <div className='right-block'>
        <div className='title'>
          Email Verification
        </div>
        <div className='text'>
          You need to verify your email to finalize activation of your account.
        </div>
        <div className='link-wrapper'>
          <Link to={'/landlord/settings/email-verification'} className='link-text' href='#'>
            Send verification email
          </Link>
        </div>
      </div>
      <div className='right-block'>
        <div className='title'>
          Phone Verification
        </div>
        <div className='text'>
          Verify your phone to be always in touch!
        </div>
        <div className='link-wrapper'>
          <Link to={'/landlord/settings/phone-verification'} className='link-text' href='#'>
            Verify phone
          </Link>
        </div>
      </div>
      <button type='button' className='btn-save d-md-none'>
        save changes
      </button>
    </>
  );

  const files = previews.map((file, index) => {
    return (
      <img {...getRootProps()} key={index} alt='avatar' className='img-avatar' src={file.dataURL}/>
    )
  })

  return (
    <SettingLayout
      className='general-settings'
      right={right}
      title={'General'}>
      <form className='form'>
        <div className='d-flex section'>
          <div>
            <div className='section-title'>
              Profile Picture
            </div>
            <p className='section-text'>
              This is your profile picture that appears in previews of listings throughout Rentorr.
              <span>
                <a className='link-text' {...getRootProps()}>
                  Change
                </a>
              </span>
            </p>
          </div>
          <input name='avatar' {...getInputProps({ accept: 'image/x-png,image/gif,image/jpeg' })} />
          {!(files && files.length > 0) &&
          <div {...getRootProps()} className='img-avatar' />}
          {(files && files.length > 0) && files}
        </div>
        <div className='section-name'>
          <FieldInput
            name='firstName'
            label='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
          <FieldInput
            name='lastName'
            label='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
        </div>
        <p className='section-name-description'>
          <Link to={'/contact'} className='link-text' href='#'>
            Contact Rentorr
          </Link>
          if you want to change your name.
        </p>
        <div className='section-email'>
          <FieldInput
            name='email'
            label='Email'
            value={email}
            onChange={(e) => changeEmail(e.currentTarget.value)}
          />
        </div>
        <div className='section-fields'>
          <FieldInput
            name='phone'
            label='Enter Phone'
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
          <div className='link-wrapper'>
            <Link to={'/landlord/settings/phone-verification'} className='link-text' href='#'>
              Verify phone
            </Link>
          </div>
        </div>
        <div className='section-fields'>
          <FieldInput
            name='address'
            label='Enter Address'
            value={address}
            onChange={(e) => setAddress(e.currentTarget.value)}
          />
        </div>
        <div className='section-fields'>
          <FieldInput
            name='aboutYourself'
            label='A bit about yourself'
            value={aboutYourself}
            onChange={(e) => setAboutYourself(e.currentTarget.value)}
          />
        </div>
        <button type='button' className='btn-save d-md-block d-none'>
          save changes
        </button>
      </form>
    </SettingLayout>
  )
}

export default GeneralSettings
