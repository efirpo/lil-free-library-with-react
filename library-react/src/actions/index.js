import * as a from './ActionTypes';

export const requestBooks = () => ({
  type: a.REQUEST_BOOKS
});

export const getBooksSuccess = (books) => ({
  type: a.GET_BOOKS_SUCCESS,
  books
});

export const getBooksFailure = (error) => ({
  type: a.GET_BOOKS_FAILURE,
  error
});

export const requestLocations = () => ({
  type: a.REQUEST_LOCATIONS
})

export const getLocationsSuccess = (locations) => ({
  type: a.GET_LOCATIONS_SUCCESS,
  locations
})

export const getLocationsFailure = (error) => ({
  type: a.GET_LOCATIONS_FAILURE,
  error
})

export const requestJoins = () => ({
  type: a.REQUEST_JOINS
})

export const getJoinsSuccess = (joins) => ({
  type: a.GET_JOINS_SUCCESS,
  joins
})
export const getJoinsFailure = (error) => ({
  type: a.GET_JOINS_FAILURE,
  error
})

export const makeBookApiCall = () => {
  return dispatch => {
    dispatch(requestBooks);
    return fetch(`http://localhost:5000/api/books`).then(response => response.json()).then((jsonifiedResponse) => {
      dispatch(getBooksSuccess(jsonifiedResponse))
      // console.log("INSIDE API CALL");
      // console.log(jsonifiedResponse);
    }).catch((error) => {
      dispatch(getBooksFailure(error))
    });
  }
}

export const makeLocationApiCall = () => {
  return dispatch => {
    dispatch(requestLocations);
    return fetch(`http://localhost:5000/api/locations`).then(response => response.json()).then((jsonifiedResponse) => {
      dispatch(getLocationsSuccess(jsonifiedResponse))
      //onsole.log(jsonifiedResponse.results);
    }).catch((error) => {
      dispatch(getLocationsFailure(error))
    });
  }
}

export const makeJoinApiCall = (fetchString) => {
  return dispatch => {
    dispatch(requestJoins);
    return fetch(`http://localhost:5000/api/join` + fetchString).then(response => response.json()).then((jsonifiedResponse) => {
      dispatch(getJoinsSuccess(jsonifiedResponse))
      // console.log(jsonifiedResponse)
    }).catch((error) => {
      dispatch(getJoinsFailure(error))
    })
  }
}