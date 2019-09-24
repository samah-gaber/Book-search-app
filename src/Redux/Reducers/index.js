import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 
import SearchReducer from './SearchReducer';

export default combineReducers({
    books: SearchReducer,
    form: formReducer  // redux form
});