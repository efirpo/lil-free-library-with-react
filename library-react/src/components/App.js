import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeBookApiCall } from './../actions/index';
import { makeLocationApiCall } from './../actions/index'
import { makeJoinApiCall } from './../actions/index'
import Books from './Books';
import Locations from './Locations';


function App(props) {
  const [toggleList, toggleListButton] = useState(false)

  useEffect(() => {
    const { dispatch } = props
    async function callApi() {
      dispatch(makeBookApiCall());
      dispatch(makeLocationApiCall());
      dispatch(makeJoinApiCall());
    }

    callApi().then(() => {
      console.log("BOOK PROPS:");
      console.table(props.books);
      console.log(props.books.books);
      //console.log(props.loading);
      console.log("LOC PROPS:")
      console.table(props.locations)
      console.log("ALL PROPS:")
      console.table(props)
    });

  }, []);
  const swapList = () => {
    return toggleListButton(!toggleList)
  }
  let visible;
  if (toggleList) {
    visible = <Books books={props.books} />
  } else {
    visible = <Locations locations={props.locations} />
  }
  return (
    <React.Fragment>
      <button onClick={swapList}>Swap Lists</button>
      {visible}

    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books,
    locations: state.locations,
    joins: state.joins
  }
}

export default connect(mapStateToProps)(App);
