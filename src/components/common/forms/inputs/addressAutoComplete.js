import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

const searchOptions = {
  location: new google.maps.LatLng(-33.91542, 18.55117),
  radius: 2000,
  types: ['address']
}

const LocationSearchInput = ({ address, handleChange, handleSelect }) => {
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      // onSelect={handleSelect}
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Property Address ...',
              className: 'location-search-input'
            })}
          />
          <div className={`autocomplete-dropdown-container ${suggestions.length > 0 ? 'active' : ''}`}>
            {loading && <div className='loading-section'>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item'
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' }
              return (
                // eslint-disable-next-line react/jsx-key
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  )
}

export default LocationSearchInput
