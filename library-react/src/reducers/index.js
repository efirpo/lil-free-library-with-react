import booksReducer from './books-reducer';
import locationsReducer from './locations-reducer';

const rootReducer = combineReducers({
  books: booksReducer,
  locations: locationsReducer,
})

export default rootReducer;