import { all } from 'redux-saga/effects';
import { watchAll } from './SearchSaga';

export default function * rootSaga () {
    yield all ([
        watchAll()
    ]);
};