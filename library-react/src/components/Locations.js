import React from 'react';

function Locations(props) {
  let listVisible;
  if (props.locations) {
    listVisible = (props.locations.locations).map((loc, index) => {
      return <li>{index}. {loc.name}</li>
    })
  }
  return (
    <React.Fragment>
      {listVisible}
    </React.Fragment>
  )
}
export default Locations