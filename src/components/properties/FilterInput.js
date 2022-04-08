import React, { useState } from 'react'

const FilterInput = (props) => {
  const [isEmailFocus, setEmailFocus] = useState(false)
  const [value, onChangeValue] = useState(null)
  return (
    <div className={`field-wrap ${value ? 'has-val' : ''} ${isEmailFocus ? 'is-focused' : ''}`}>
      <input
        id={`input-${props.name}`}
        {...props}
        placeholder=''
        className='form-control'
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
        onChange={(evt) => { onChangeValue(evt.currentTarget.value); props.onChange(evt) }}
      />
      <label className='control-label' htmlFor={`input-${props.name}`}>{props.label}</label>
    </div>
  )
}

export default FilterInput
