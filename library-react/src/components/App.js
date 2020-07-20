import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeBookApiCall } from './../actions/index';
import { makeLocationApiCall } from './../actions/index'
import Books from './Books';
import Locations from './Locations';


function App(props) {

  useEffect(() => {
    const { dispatch } = props
    async function callApi() {
      dispatch(makeBookApiCall());
      dispatch(makeLocationApiCall());
    }

    callApi().then(() => {
      console.log("BOOK PROPS:");
      console.table(props.books);
      console.log(props.loading);
      console.log("LOC PROPS:")
      console.table(props.locations)
      console.log("ALL PROPS:")
      console.table(props)
    });

    // dispatch(makeBookApiCall());
    // dispatch(makeLocationApiCall());
  }, [props]);

  return (
    <React.Fragment>
      <Books books={props.books} />
      <Locations locations={props.locations} />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books,
    locations: state.locations,
  }
}

export default connect(mapStateToProps)(App);
