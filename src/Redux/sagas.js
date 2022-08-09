import { all, put, takeLatest } from "redux-saga/effects";
import { fetchCountries } from "../api/fetchCountries";

//
function* fetchAllData() {
  let data = [];
  yield fetchCountries("https://restcountries.com/v2/all").then((res) => {
    data = res.data;
  });
  yield put({ type: "GET_ALL_COUNTRIES", peyload: data });
}

function* watchGetFetchAllData() {
  yield takeLatest("FETCH_ALL_DATA", fetchAllData);
}
//

function* sagaGetSingleCountry(action) {
  let data = {};
  console.log(action.peyload);
  yield fetchCountries(
    `https://restcountries.com/v2/name/${action.peyload}`
  ).then((res) => {
    data = res.data;
  }).catch((err) => {
    data = [{err:err.message}]
  })
  yield put({ type: "GET_SINGLE_COUNTRY", peyload: data });
}

function* watchSagaGetSingleCountry() {
  yield takeLatest("SAGA_GET_SINGLE_COUNTRY", sagaGetSingleCountry);
}

export function* rootSaga() {
  yield all([watchGetFetchAllData(), watchSagaGetSingleCountry()]);
}
