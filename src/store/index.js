import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import scanReducer from "./reducers/scanReducer";
import rootSaga from "./sagas";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  scanReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
