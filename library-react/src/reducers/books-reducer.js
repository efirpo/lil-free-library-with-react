import * as a from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  books: [],
  locations: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case a.REQUEST_BOOKS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case a.GET_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        books: action.books
      });
    case a.GET_BOOKS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default: return state
  }
}