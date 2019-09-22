import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from '../Redux/Reducers';
import rootSaga from '../Redux/Sagas';

// integrating redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// integrating redux-saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    Reducers,
    composeEnhancers( applyMiddleware(sagaMiddleware) )
);

sagaMiddleware.run(rootSaga);

export default store;