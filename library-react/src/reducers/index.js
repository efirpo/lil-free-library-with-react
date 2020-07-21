import booksReducer from './books-reducer';
import locationsReducer from './locations-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: booksReducer,
  locations: locationsReducer,
})

export default rootReducer;