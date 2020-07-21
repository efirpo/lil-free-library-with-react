import React, { useState } from 'react';
import { makeJoinApiCall } from './../actions/index';
import { connect } from 'react-redux';

function BookDetail(props) {
  const { dispatch } = props
  const [joins, getJoins] = useState([])

  const showOtherDetails = async (id) => {
    let fetchString = `?bookId=` + id
    dispatch(makeJoinApiCall(fetchString))
  }

  return (
    <React.Fragment>
      <div onClick={() => showOtherDetails(props.id)}>
        <h3>{props.id}. {props.title}</h3>
        <h3><em>{props.author}</em></h3>
      </div>
    </React.Fragment>
  )
}

export default connect()(BookDetail);