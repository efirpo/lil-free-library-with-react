import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeBookApiCall } from './../actions/index';
import { makeLocationApiCall } from './../actions/index'


function App(props) {

  useEffect(() => {
    const { dispatch } = props
    dispatch(makeBookApiCall)
    dispatch(makeLocationApiCall)
  })

  return (
    <></>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books,
    locations: state.locations,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);
