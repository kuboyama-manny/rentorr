import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Popup from 'reactjs-popup'

// components
import LoadingWrapper from '../common/wrappers/loadingWrapper'
import ListNormal from './ListNormal'
import FilterSidebar from './FilterSidebar'
import ListGrid from './ListGrid'
import ListTable from './ListTable'
import MenuItem from '../common/menu/MenuItem'
import MenuComponent from '../common/menu/MenuComponent'
import EmptyProperty from './emptyProperty'

import { getProperties, editProperty, updateSortOptions } from '../../actions/landlord/properties'

const filterOption = [
  'all',
  'rented',
  'listed',
  'not listed',
  'archived'
]

const sortTypes = [
  {
    key: 1,
    label: 'Most recent on top'
  },
  {
    key: 2,
    label: 'Alphanumeric A to Z'
  },
  {
    key: 3,
    label: 'Alphanumeric Z to A'
  }
]

const Properties = ({ getProperties, properties, isLoading, editProperty, updateSortOptions, selectedOption }) => {
  const [showFilterSideBar, setShowFilterSideBar] = useState(false)
  const [showSortByMenu, setShowSortByMenu] = useState(false)
  const [currentFilterOption, setCurrentFilterOption] = useState(filterOption[0])
  const [offsetLeft, setOffsetLeft] = useState(null)
  const [layoutType, setLayoutType] = useState('normal')

  const onClickSortMenuItem = (selectedSort) => {
    if (selectedSort === 1) {
      updateSortOptions(1)
    } else if (selectedSort === 2) {
      updateSortOptions(2)
    } else if (selectedSort === 3) {
      updateSortOptions(3)
    }
    getProperties()
  }

  const MenuSortBy = () => {
    return (
      <MenuComponent>
        {
          sortTypes.map(sort => (
            <MenuItem key={sort.key} label={sort.label} selected={selectedOption === sort.key} onClick={() => onClickSortMenuItem(sort.key)} />
          ))
        }
      </MenuComponent>
    )
  }

  const handleResize = () => {
    if (showFilterSideBar) {
      return
    }
    setOffsetLeft(null)
  }

  const containerRef = useRef()

  useEffect(() => {
    getProperties()
  }, [])

  useEffect(() => {
    // componentDidMount

    if (containerRef) {
      setOffsetLeft(containerRef.offsetLeft)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      // componentWillUnmount

      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <LoadingWrapper isLoading={isLoading}>
      {
        properties && properties.length > 0
          ? <div className='properties-page-wrapper'>
            <div
              style={offsetLeft ? { marginLeft: offsetLeft, marginRight: offsetLeft } : {}}
              ref={containerRef}
              className={`container-box-full properties-page ${showFilterSideBar ? 'filter-show' : ''}`}
            >
              <div className='row properties-page-content'>
                <div className='col-12'>
                  <div className='page-title-container'>
                    <h4 className='page-title'>Properties</h4>
                    <Link to='/landlord/properties/create'>
                      <button type='button' className='btn-create-property'>
                        Create property
                      </button>
                    </Link>
                  </div>
                  <div className='toolbar'>
                    <ul className='option'>
                      {
                        filterOption && filterOption.map(option => {
                          return (
                            <li
                              key={option}
                              onClick={() => setCurrentFilterOption(option)}
                              className={`option-item ${option === currentFilterOption ? 'active' : ''}`}
                            >
                              {option}
                            </li>
                          )
                        })
                      }
                    </ul>
                    <div className='right-option'>
                      <div className='option' onClick={() => setShowFilterSideBar(!showFilterSideBar)}>
                        Filters
                        <svg width='16px' height='16px' viewBox='0 0 16 16' className={`icon ${showFilterSideBar ? 'active' : ''}`}>
                          <title>8934DF7D-C9F9-43E9-861D-6893BC51D153</title>
                          <path
                            d='M11,8 L11,1 L13,1 L13,8 L14.5,8 L14.5,13 L13,13 L13,15 L11,15 L11,13 L9.5,13 L9.5,8 L11,8 Z M5,3 L6.5,3 L6.5,8 L5,8 L5,15 L3,15 L3,8 L1.5,8 L1.5,3 L3,3 L3,1 L5,1 L5,3 Z'
                            fill={showFilterSideBar ? '#1A5DC6' : '#3C404E'}
                            fillRule='evenodd'
                          />
                        </svg>
                      </div>
                      <Popup
                        trigger={
                          <div className='option ml-24'>
                            {sortTypes.filter(s => s.key === selectedOption)[0].label}
                            {!showSortByMenu && <i className='fa fa-caret-down' />}
                            {showSortByMenu && <i className='fa fa-caret-up' style={{ color: '#1A5DC6' }} />}
                          </div>
                        }
                        open={showSortByMenu}
                        contentStyle={{
                          padding: '20px 0',
                          borderRadius: '1px',
                          background: '#FFFFFF',
                          border: '1px solid rgba(225, 223, 230, 0.5)'
                        }}
                        on='click'
                        onClose={() => setShowSortByMenu(false)}
                        onOpen={() => setShowSortByMenu(true)}
                        closeOnDocumentClick
                        closeOnEscape
                        position='bottom right'
                        arrow={false}
                      >
                        <>
                          <MenuSortBy />
                        </>
                      </Popup>
                      <div className='option ml-24' onClick={() => setLayoutType('normal')}>
                        <svg width={16} height={10} viewBox='0 0 16 10' className='icon-simple'>
                          <title>20CCCAE8-8755-49C6-A169-62114D6769BD</title>
                          <path
                            d='M0 0h16v3.452H0V0zm0 6.548h16V10H0V6.548z'
                            fill={layoutType === 'normal' ? '#3C404E' : '#9BA0B5'}
                            fillRule='evenodd'
                          />
                        </svg>
                      </div>
                      <div className='option ml-16' onClick={() => setLayoutType('table-min')}>
                        {/* <img alt="" className="icon-simple" src={iconViewTable}/> */}
                        <svg width={16} height={10} viewBox='0 0 16 10' className='icon-simple'>
                          <title>6BF15FED-FECE-4646-9723-3144D8BCB9A5</title>
                          <path
                            d='M0 0h16v2H0V0zm0 4h16v2H0V4zm0 4h16v2H0V8z'
                            fill={layoutType === 'table-min' ? '#3C404E' : '#9BA0B5'}
                            fillRule='evenodd'
                          />
                        </svg>
                      </div>
                      <div className='option ml-16' onClick={() => setLayoutType('card-grid')}>
                        <svg width={10} height={10} viewBox='0 0 10 10' className='icon-simple'>
                          <title>F9ED3E20-8578-4143-A154-87972F99E125</title>
                          <g
                            fill={layoutType === 'card-grid' ? '#3C404E' : '#9BA0B5'}
                            fillRule='evenodd'
                          >
                            <path d='M0 0h4v4H0zM6 0h4v4H6zM0 6h4v4H0zM6 6h4v4H6z' />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {
                    layoutType === 'normal' &&
                      <ListNormal
                        data={properties}
                        editProperty={editProperty}
                      />
                  }
                  {
                    layoutType === 'card-grid' &&
                      <ListGrid
                        data={properties}
                        editProperty={editProperty}
                      />
                  }
                  {
                    layoutType === 'table-min' &&
                      <ListTable
                        data={properties}
                        editProperty={editProperty}
                      />
                  }
                </div>
              </div>
            </div>
            <FilterSidebar show={showFilterSideBar} onClose={() => setShowFilterSideBar(!showFilterSideBar)} />
          </div>
          : <EmptyProperty />
      }
    </LoadingWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.landlord.properties.isLoading,
    properties: state.landlord.properties.properties,
    selectedOption: state.landlord.properties.selectedOption
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: () => {
      dispatch(getProperties())
    },
    editProperty: (data) => {
      dispatch(editProperty())
    },
    updateSortOptions: (value) => {
      dispatch(updateSortOptions(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Properties)
