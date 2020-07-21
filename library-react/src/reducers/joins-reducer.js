import * as a from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  locations: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case a.REQUEST_JOINS:
      return Object.assign({}, state, {
        isLoading: true
      })
    case a.GET_JOINS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        joins: action.joins
      })
    case a.GET_JOINS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      })
    default: return state
  }
}