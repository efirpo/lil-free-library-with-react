import React, { useEffect, useState } from 'react';
import { makeJoinApiCall } from './../actions/index';
import { connect } from 'react-redux';

function BookDetail(props) {
  const { dispatch } = props
  const [theseJoins, makeJoins] = useState(null)
  const [showDetail, showOtherDetails] = useState(false);

  useEffect(() => {
    makeJoins(props.joins.joins.filter(e => e.bookId == props.id))
    console.log("These Joins:")
    console.log(theseJoins)

  }, [])


  // makeJoins(props.joins.joins.filter(e => e.bookId == props.id))
  // console.log("These Joins:")
  // console.log(theseJoins)
  // useEffect(() => {

  //   const getOtherDetails = async () => {
  //     let fetchString = `?bookId=` + props.id
  //     dispatch(makeJoinApiCall(fetchString))
  //   }

  //   getOtherDetails()
  // }, [])

  // useEffect(() => {
  //   console.log(props.joins)
  //   makeJoins(props.joins)
  // }, [props.joins])

  let locationsArr;

  // const grabJoinsFromLocations = () => {
  //   let joinsIdArr = () => {
  //     for (let i = 0; i <= theseJoins.joins.length; i++) {
  //       return theseJoins.joins[i].locationId
  //     }
  //   }
  //   locationsArr = props.locations.locations.filter((e) => {
  //     for (let i = 0; i <= joinsIdArr.length; i++) {
  //       if (e.locationId == joinsIdArr[i]) {
  //         return e
  //       }
  //     }
  //   })

  // }
  let joinsTest;
  if (showDetail) {

    let joinIds = theseJoins.map((loc) => {
      return loc.locationId
    })

    let locations = () => {
      return props.locations.locations.filter((loc) => {
        for (let i = 0; i <= joinIds.length; i++) {
          if (loc.locationId == joinIds[i]) {
            return loc
          }
        }
      })
    }
    joinsTest = locations().map(loc => {
      return <div><p>Condition: {props.condition}</p><p>Available at:</p><p>{loc.name}</p>
        <p>{loc.address}</p></div>
    })
  }
  return (
    <React.Fragment>
      <div onClick={() => showOtherDetails(!showDetail)}>
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

export default connect(mapStateToProps)(BookDetail)