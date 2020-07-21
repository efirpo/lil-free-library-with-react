import React, { useState } from 'react';
import { makeJoinApiCall } from './../actions/index';
import { connect } from 'react-redux';

function BookDetail(props) {
  const { dispatch } = props
  const [theseJoins, makeJoins] = useState(null)

  const showOtherDetails = async (id) => {
    let fetchString = `?bookId=` + id
    dispatch(makeJoinApiCall(fetchString)).then(() => { makeJoins(props.joins) }).then(() => {
      console.log("These just post state slice:")
      console.log(theseJoins)

    })
    grabJoinsFromLocations()
  }

  let locationsArr;

  const grabJoinsFromLocations = () => {
    let joinsIdArr = () => {
      for (let i = 0; i <= theseJoins.joins.length; i++) {
        return theseJoins.joins[i].locationId
      }
    }
    locationsArr = props.locations.locations.filter((e) => {
      for (let i = 0; i <= joinsIdArr.length; i++) {
        if (e.locationId == joinsIdArr[i]) {
          return e
        }
      }
    })

  }
  let joinsTest;
  if (theseJoins) {
    console.table("Join Table")
    console.table(theseJoins)
    console.table("ID")

  }
  return (
    <React.Fragment>
      <div onClick={() => showOtherDetails(props.id)}>
        <h3>{props.id}. {props.title}</h3>
        <h3><em>{props.author}</em></h3>
        {joinsTest}
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = state => ({
  joins: state.joins,
  locations: state.locations
})
export default connect(mapStateToProps)(BookDetail);