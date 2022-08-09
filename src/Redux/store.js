import { createStore, combineReducers, applyMiddleware } from "redux";
import { countriesReducer } from "./reducers/countriesReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    countriesReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
