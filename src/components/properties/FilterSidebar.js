import React, { useState } from 'react'
import iconClose from '../../assets/images/icons/icon_close.svg'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { numberWithCommas } from '../../utils/utilityFunctions'
import FilterInput from './FilterInput'
import CheckBox from '../common/buttons/customCheckbox'

// const CheckBox = ({ checked, label, name }) => {
//   return (
//     <div className='form-check'>
//       <input className='form-check-input' type='checkbox' value='' checked={checked} name={name} id={`checkbox-${name}`} />
//       <label className='form-check-label' htmlFor={`checkbox-${name}`}>
//         {label}
//       </label>
//     </div>
//   )
// }
const FilterSidebar = ({ show, onClick, onClose }) => {
  const [rent, setRent] = useState({ min: 3244, max: 15000 })
  const [checkAllStatus, setCheckAllStatus] = useState(false)
  const [checkRentedStatus, setCheckRentedStatus] = useState(false)
  const [checkListedStatus, setCheckListedStatus] = useState(false)
  const [checkNotListedStatus, setCheckNotListedStatus] = useState(false)
  const [checkArchivedStatus, setCheckArchivedStatus] = useState(false)
  const [checkAllType, setCheckAllType] = useState(false)
  const [checkHouseType, setCheckHouseType] = useState(false)
  const [checkApartmentType, setCheckApartmentType] = useState(false)
  const [checkDuplexType, setCheckDuplexType] = useState(false)
  const [checkRoomType, setCheckRoomType] = useState(false)
  const [checkMaintenance, setCheckMaintenance] = useState(false)
  return (
    <div className={`filter-sidebar ${show ? 'show' : ''}`} onClick={onClick}>
      <div className='filter-sidebar-content'>
        <a className='btn-close' onClick={onClose}>
          <img alt='' className='icon-close' src={iconClose} />
        </a>
        <h6 className='sidebar-title'>
          Filters
        </h6>
        <div className='group'>
          <div className='group-title'>
            Status
          </div>
          <CheckBox
            label='All'
            checked={checkAllStatus}
            onClick={() => setCheckAllStatus(!checkAllStatus)}
          />
          <CheckBox
            label='Rented'
            checked={checkRentedStatus}
            onClick={() => setCheckRentedStatus(!checkRentedStatus)}
          />
          <CheckBox
            label='Listed'
            checked={checkListedStatus}
            onClick={() => setCheckListedStatus(!checkListedStatus)}
          />
          <CheckBox
            label='Not Listed'
            checked={checkNotListedStatus}
            onClick={() => setCheckNotListedStatus(!checkNotListedStatus)}
          />
          <CheckBox
            label='Archived'
            checked={checkArchivedStatus}
            onClick={() => setCheckArchivedStatus(!checkArchivedStatus)}
          />
        </div>
        <div className='group'>
          <div className='group-title'>
            Property type
          </div>
          <CheckBox
            label='All'
            checked={checkAllType}
            onClick={() => setCheckAllType(!checkAllType)}
          />
          <CheckBox
            label='House'
            checked={checkHouseType}
            onClick={() => setCheckHouseType(!checkHouseType)}
          />
          <CheckBox
            label='Apartment'
            checked={checkApartmentType}
            onClick={() => setCheckApartmentType(!checkApartmentType)}
          />
          <CheckBox
            label='Duplex'
            checked={checkDuplexType}
            onClick={() => setCheckDuplexType(!checkDuplexType)}
          />
          <CheckBox
            label='Room'
            checked={checkRoomType}
            onClick={() => setCheckRoomType(!checkRoomType)}
          />
        </div>
        <div className='group'>
          <div className='group-title'>
            Other filters
          </div>
          <CheckBox
            label='Maintenance requests only'
            checked={checkMaintenance}
            onClick={() => setCheckMaintenance(!checkMaintenance)}
          />
        </div>
        <div className='group'>
          <div className='group-title'>
            Monthly rent
          </div>
          <div className='value-range'>
            {`R${numberWithCommas(rent.min)} - R${numberWithCommas(rent.max)}`}
          </div>
          <div className='input-range-container'>
            <InputRange
              maxValue={100000}
              minValue={1000}
              formatLabel={value => `R${numberWithCommas(value)}`}
              value={rent}
              onChange={value => setRent(value)}
              onChangeComplete={value => console.log(value)}
            />
          </div>
          <FilterInput name='property_name' type='text' label='Type property name' />
          <FilterInput name='property_address' type='text' label='Type property address' />
        </div>

        <div className='buttons'>
          <a className='btn-apply'>Apply</a>
          <a className='btn-clear'>Clear</a>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
