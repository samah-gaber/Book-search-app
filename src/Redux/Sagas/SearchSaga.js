import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import { SEARCH_BOOKS_SAGA } from '../ActionTypes';
import { searchBooksReducer } from '../Actions';
import SearchAPI from '../../Apis/API';

function * searchBooks ( action ) {
    const { query } = action;
    const response = yield call (SearchAPI.searchBooks, query);
    console.log('saga response ', response);
    const payload = response ? response.data.items : [];
    yield put ( searchBooksReducer(payload) );
};

export function * watchAll () {
    yield takeEvery ( SEARCH_BOOKS_SAGA, searchBooks );
};