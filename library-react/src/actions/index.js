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