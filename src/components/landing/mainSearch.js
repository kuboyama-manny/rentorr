import React from 'react'

const MainSearch = ({ screenStatus, setScreenStatus }) => {
  return (
    <div className={`main-search ${screenStatus === 'main_search' ? 'main-search-open' : ''}`}>
      <div className='container-box-full main-search__desc'>
        <div className='container-box-full main-search__close-position'>
          <a onClick={() => setScreenStatus('default')} />
        </div>
        <h3>Find Your New Home</h3>
        <form className='main-search__form'>
          <input placeholder='Search for a City, Suburb...' type='text' />
          <button type='submit'>SEARCH</button>
        </form>
      </div>
    </div>
  )
}

export default MainSearch
