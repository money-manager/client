import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  logErrors: false,
});

const middleWares = createStore(
  reducers,
  applyMiddleware(
    sagaMiddleware,
    logger,
  )
);

sagaMiddleware.run(sagas);

export default middleWares;
