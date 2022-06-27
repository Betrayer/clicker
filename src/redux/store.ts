import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { RootState } from './rootReducer';
import rootSaga from './rootSaga';
import storage from '../helpers/storageHelper';

const preloadedState = storage.getItem<RootState>('store') || {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const composeEnhancers = composeWithDevTools({ trace: true });
const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  storage.setItem('store', store.getState());
});

export default store;
