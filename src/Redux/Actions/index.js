import { SEARCH_BOOKS_REDUCER, SEARCH_BOOKS_SAGA } from '../ActionTypes';

// action creator calling saga
export const searchBooksSaga = query => ({
    type: SEARCH_BOOKS_SAGA,
    query
});

// action creator dispatching action to reducer
export const searchBooksReducer = payload => ({
    type: SEARCH_BOOKS_REDUCER,
    payload
});