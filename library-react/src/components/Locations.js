import React from 'react';
import LocationDetail from './LocationDetail';

function Locations(props) {
  let listVisible;
  if (props.locations) {
    listVisible = (props.locations.locations).map((loc) => {
      return <LocationDetail name={loc.name} address={loc.address} id={loc.locationId} />
    })
  }
  return (
    <React.Fragment>
      {listVisible}
    </React.Fragment>
  )
}
export default Locations