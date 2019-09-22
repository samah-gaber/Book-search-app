import { SEARCH_BOOKS_REDUCER } from '../ActionTypes';

export default (state = {}, action) => {
    switch ( action.type ) {
        case SEARCH_BOOKS_REDUCER:
            return { ...state, books: action.payload };
        default:
            return state;
    };
};