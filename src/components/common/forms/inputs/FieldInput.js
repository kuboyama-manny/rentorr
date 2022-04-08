import React, { useState } from 'react'

const FieldInput = (props) => {
  const [isFocus, setFocus] = useState(false)
  const [value, onChangeValue] = useState(null)
  const onChange = (event) => {
    onChangeValue(event.currentTarget.value);
    if (props && props.onChange) {
      props.onChange(event);
    }
  }
  return (
    <div className={`field-wrap ${value ? 'has-val' : ''} ${isFocus ? 'is-focused' : ''}`}>
      <input
        id={`input-${props.name}`}
        {...props}
        placeholder=''
        className='form-control'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={onChange}
      />
      <label className='control-label' htmlFor={`input-${props.name}`}>{props.label}</label>
    </div>
  )
}

export default FieldInput
