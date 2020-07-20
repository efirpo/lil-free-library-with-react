import * as a from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  books: [],
  locations: [],
  error: null
}

export default (state = initialState, action => {
  switch (action.type) {
    case a.REQUEST_LOCATIONS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case a.GET_LOCATIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        locations: action.locations
      });
    case a.GET_LOCATIONS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default: return state
  }
})