import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Popup from 'reactjs-popup'
import moment from 'moment'
import MenuItem from '../common/menu/MenuItem'
import MenuComponent from '../common/menu/MenuComponent'

// icons
import iconBeds from '../../assets/images/icons/icon_beds.svg'
import iconBath from '../../assets/images/icons/icon_bath.svg'
import iconSquare from '../../assets/images/icons/icon_square.svg'
import iconApartment from '../../assets/images/icons/icon_apartment.svg'
import iconLogPaid from '../../assets/images/icons/icon_log_paid.svg'
import iconLogRequest from '../../assets/images/icons/icon_log_request.svg'
import iconLogSigned from '../../assets/images/icons/icon_log_signed.svg'
import iconDocument from '../../assets/images/icons/icons-docs.svg'
import iconCalendar from '../../assets/images/icons/icons16calendar_default.svg'
import iconStarActive from '../../assets/images/icons/icon_star_active.svg'
import iconStar from '../../assets/images/icons/icon_star_default.svg'
import iconRepairRed from '../../assets/images/icons/icon_repair_red.svg'
import iconRepairGray from '../../assets/images/icons/icon_repair_gray.svg'
import iconAvatar from '../../assets/images/icons/avatar.svg'

// images
import PaymentsImg from '../../assets/images/property-details/img_payments.png'
import MatenanceImg from '../../assets/images/property-details/img_maintenance.png'
import NoApplicationsImg from '../../assets/images/property-details/img_no_applicants.png'
import DocumentsImg from '../../assets/images/property-details/img_documents.png'

// utils
import { numberWithCommas } from '../../utils/utilityFunctions'

// actions
import { getProperty } from '../../actions/landlord/properties'


const PropertyDetails = (props) => {
  let data = null

  if (props.properties.length !== 0) {
    data = props.properties.filter(o => o._id === props.match.params.id)[0]
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const getTenantRating = (rating) => {
    let stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) stars.push(<img className='r-star' src={iconStarActive} key={i} alt="" />)
      else stars.push(<img className='r-star' src={iconStar} key={i} alt="" />)
    }
    return stars;
  }

  return (
    <div className='property-details-page'>
      {
        data && (
          <div className='container-box-full'>
            <div className='top'>
              <Popup
                trigger={
                  <div className='page-title'>
                    <h3>{data.name}</h3>
                    {!menuOpen && <i className='fa fa-caret-down' />}
                    {menuOpen && <i className='fa fa-caret-up' style={{color: '#1A5DC6'}} />}
                  </div>
                }
                open={menuOpen}
                contentStyle={{
                  width: '420px',
                  padding: '20px 0',
                  borderRadius: '1px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(225, 223, 230, 0.5)'
                }}
                on='click'
                onClose={() => setMenuOpen(false)}
                onOpen={() => setMenuOpen(true)}
                closeOnDocumentClick
                closeOnEscape
                position='bottom left'
                arrow={false}
              >
                <div className='detail-menu'>
                  <MenuComponent>
                    {
                      props.properties.map((data, index) => (
                        <div className="menu-item" key={index} onClick={() => props.history.push(`/landlord/properties/detail/${data._id}`)}>
                          <div className="menu-text" key={index}>
                            <div className="text">{data.name}</div>
                            <div className="note">{data.address}</div>
                          </div>
                        </div>
                      ))
                    }
                  </MenuComponent>
                </div>
              </Popup>
              <div className='btns'>
                {
                  data.status === 'rented' ?
                    <button type='button' className='button--white--border normal list-btn'>
                      EXTEND CONTRACT
                    </button>
                    :
                    <button type='button' className='button--white--border normal list-btn'>
                      LIST PROPERTY
                    </button>
                }
                <Popup
                  trigger={
                    <button type='button' className='button--blue normal action-btn'>
                      ACTIONS
                      <i className='fa fa-caret-down' />
                    </button>
                  }
                  contentStyle={{
                    padding: '20px 0',
                    borderRadius: '1px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(225, 223, 230, 0.5)'
                  }}
                  on='click'
                  closeOnDocumentClick
                  closeOnEscape
                  position='bottom right'
                  arrow={false}
                >
                  <MenuComponent>
                    {
                      data.status === 'rented' ?
                        <>
                          <MenuItem label='Offer new terms' />
                          <MenuItem label='Terminate contract' />
                          <MenuItem label='Claim damage' />
                        </>
                        :
                        <>
                          <MenuItem label='Invite tenant' />
                          <MenuItem label='Archive' />
                          <MenuItem label='Deactivate' />
                        </>
                    }
                  </MenuComponent>
                </Popup>
              </div>
            </div>
    
            <div className='detail-content'>
              <div className='detail-box general'>
                <div className='detail-box-content'>
                  <div className='name-actions'>
                    <div className='detail-name text-uppercase'>general info</div>
                    <Link to={`/landlord/properties/edit/${data._id}`} className='detail-action text-uppercase'>edit</Link>
                  </div>
                  <div className='detail-info'>
                    <div className='d-address'>{data.address}</div>
                    <div className='d-price'><span>R{numberWithCommas(data.rent)}</span>&nbsp;&nbsp;/month</div>
                    <div className='extra-info'>
                      <div className='item'>
                        <img className='icon' alt='bed' src={iconBeds} />
                        {data.beds}
                      </div>
                      <div className='item'>
                        <img className='icon' alt='bath' src={iconBath} />
                        {data.bathrooms}
                      </div>
                      <div className='item'>
                        <img className='icon' alt='size' src={iconSquare} />
                        {data.size}&nbsp;m²
                      </div>
                      <div className='item'>
                        <img className='icon' alt='size' src={iconApartment} />
                        {data.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='detail-box payouts'>
                <div className='detail-box-content'>
                  <div className='name-actions'>
                    <div className='detail-name text-uppercase'>payouts</div>
                    {
                      (data.payouts && data.payouts.length !== 0) && (
                        <div className='detail-action text-uppercase'>view all</div>
                      )
                    }
                  </div>
                  <div className={`detail-info ${data.payouts && data.payouts.length !== 0 ? '' : 'empty'}`}>
                    {
                      (data.payouts && data.payouts.length !== 0) ?
                        <div className='payout-list'>
                          {
                            data.payouts.map((p, index) => (
                              <div className='payout-item' key={index}>
                                <div className='left'>
                                  <div className='p-title'>{p.title}</div>
                                  <div className={`p-status text-uppercase ${p.status}`}>{p.status}</div>
                                </div>
                                <div className='right'>
                                  <div className='p-price'>R{numberWithCommas(p.price)}</div>
                                  { p.deadline && <div className='p-deadline'>Until {p.deadline}</div> }
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        :
                        <>
                          <img className='detail-img' src={PaymentsImg} alt="" />
                          <div className='detail-text'>No payouts yet</div>
                        </>
                    }
                  </div>
                </div>
              </div>
              <div className='detail-box maintenances'>
                <div className='detail-box-content'>
                  <div className='name-actions'>
                    <div className='detail-name text-uppercase'>maintenance</div>
                    {
                      (data.status === 'rented' && data.maintenances && data.maintenances.length !== 0) && (
                        <div className='detail-action text-uppercase'>all requests</div>
                      )
                    }
                  </div>
                  <div className={`detail-info ${data.maintenances && data.maintenances.length !== 0 ? '' : 'empty'}`}>
                  {
                      (data.status === 'rented' && data.maintenances && data.maintenances.length !== 0) ?
                        <div className='maintenance-list'>
                          {
                            data.maintenances.map((m, index) => (
                              <div className='maintenance-item' key={index}>
                                {
                                  m.status === 'open'
                                    ? <img className='m-icon' src={iconRepairRed} alt="" />
                                    : <img className='m-icon' src={iconRepairGray} alt="" />
                                }
                                <div>
                                  <div className='m-title'>{m.title}</div>
                                  <div className='m-date'>{m.date}</div>
                                </div>
                                <div className={`m-status text-uppercase ${m.status}`}>{m.status}</div>
                              </div>
                            ))
                          }
                        </div>
                        :
                        <>
                          <img className='detail-img' src={MatenanceImg} alt="" />
                          <div className='detail-text'>No matenance yet</div>
                        </>
                    }
                  </div>
                </div>
              </div>
              <div className='detail-box tenant'>
                <div className='detail-box-content'>
                  <div className='name-actions'>
                    <div className='detail-name text-uppercase'>tenant</div>
                    {
                      (data.status === 'rented' && data.tenants.length !== 0) && (
                        <div className='detail-action text-uppercase'>Previous tenants</div>
                      )
                    }
                  </div>
                  <div className={`detail-info ${data.status === 'rented' ? '' : 'empty'}`}>
                  {
                      (data.status === 'rented' && data.tenants) ?
                        <>
                          <div className='tenant-info'>
                            <div className='t-img'>
                              <img src={iconAvatar} alt="" />
                            </div>
                            <div>
                              <div className='t-name'>{data.tenants[0].name}</div>
                              <div className='rating-score'>
                                <div className='rating'>
                                  { getTenantRating(data.tenants[0].rating) }
                                </div>
                                <div className='c-score'>credit score {data.tenants[0].creditScore}</div>
                              </div>
                            </div>
                          </div>
                          <div className='lease-period'>
                            <img className='c-img' src={iconCalendar} alt="" />
                            <div className='l-date'>{data.leasePeriod.startDate}</div>
                            <i className="fas fa-arrow-right"></i>
                            <div className='l-date'>{data.leasePeriod.endDate}</div>
                            <span className='l-period'>({data.leasePeriod.period})</span>
                          </div>
                          <button type='button' className='button--white--border normal contact-btn'>
                            CONTACT BRENDON
                          </button>
                        </>
                        :
                        <>
                          <img className='detail-img' src={NoApplicationsImg} alt="" />
                          <div className='detail-text'>No tenant yet</div>
                          <span className='detail-note'>
                            Try giving your listing a <a href="#">Boost!</a><br/>
                            or <a href="#">invite tenant</a> you know
                          </span>
                        </>
                    }
                  </div>
                </div>
              </div>
              <div className='detail-box activity'>
                <div className='detail-box-content'>
                  <div className='name-actions'>
                    <div className='detail-name text-uppercase'>activity log</div>
                    <div className='detail-action text-uppercase'>view all</div>
                  </div>
                  <div className='detail-info'>
                    <div className='log-list'>
                      {
                        data.activities && data.activities.slice(0,3).map((a, index) => (
                          <div className='log-item' key={index}>
                            { a.type === 'paid' && <img className='log-icon' src={iconLogPaid} alt='' />}
                            { a.type === 'request' && <img className='log-icon' src={iconLogRequest} alt='' />}
                            { a.type === 'signed' && <img className='log-icon' src={iconLogSigned} alt='' />}
                            <div>
                              <div className='log-title'>{a.title}</div>
                              <div className='log-time'>{a.date}</div>
                            </div>
                          </div>
                        ))
                      }
                      {
                        (!data.activities || (data.activities && data.activities.length < 3)) && (
                          <div className='log-item'>
                            <div className='log-icon'>
                              <img src={iconLogSigned} alt='' />
                            </div>
                            <div>
                              <div className='log-title'>Property Created</div>
                              <div className='log-time'>{moment(data.createdAt).format("h:m A, MMM D, YYYY")}</div>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className='detail-box documents'>
                <div className='detail-box-content'>
                  <div className='name-actions'>
                    <div className='detail-name text-uppercase'>documents</div>
                    <div className='detail-action text-uppercase'>{data.documents && data.documents.length !== 0 ? 'view all' : 'upload'}</div>
                  </div>
                  <div className={`detail-info ${data.documents && data.documents.length !== 0 ? '' : 'empty'}`}>
                    {
                      data.documents && data.documents.length !== 0 ?
                       <div className='document-list'>
                         {
                           data.documents.map((d, index) => (
                            <div className='document-item' key={index}>
                              <div className='d-icon'>
                                <img src={iconDocument} alt='' />
                              </div>
                              <div>
                                <div className='d-title'>{d.title}</div>
                                <div className='d-time'>{d.date}</div>
                              </div>
                            </div>
                           ))
                         }
                       </div>
                       :
                       <>
                        <img className='detail-img' src={DocumentsImg} alt="" />
                        <div className='detail-text'>No documents yet</div>
                       </>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    property: state.landlord.properties.property,
    properties: state.landlord.properties.properties,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProperty: (id) => {
      dispatch(getProperty(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails)
