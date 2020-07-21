import booksReducer from './books-reducer';
import locationsReducer from './locations-reducer';
import joinsReducer from './joins-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: booksReducer,
  locations: locationsReducer,
  joins: joinsReducer
})

export default rootReducer;