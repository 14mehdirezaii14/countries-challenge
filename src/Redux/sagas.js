import { all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchCountries } from "../api/fetchCountries";
import { baseUrl } from "../api/baseUrl";
//
function* fetchAllData() {
  let data = [];
  yield fetchCountries(`${baseUrl}/all`).then((res) => {
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
  yield fetchCountries(`${baseUrl}/name/${action.peyload}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      data = [{ err: err.message }];
    });
  yield put({ type: "GET_SINGLE_COUNTRY", peyload: data });
}

function* watchSagaGetSingleCountry() {
  yield takeLatest("SAGA_GET_SINGLE_COUNTRY", sagaGetSingleCountry);
}
//
function* sagaSearchCountry(action) {
  let data = [];
  yield fetchCountries(
    !action.peyload
      ? `${baseUrl}/all`
      : `${baseUrl}/name/${action.peyload}`
  )
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      data = [{ err }];
    });
  yield put({ type: "SEARCH", peyload: data });
}

function* watchSagaSearchCountry() {
  yield takeEvery("SAGA_SEARCH_COUNTRY", sagaSearchCountry);
}

export function* rootSaga() {
  yield all([
    watchGetFetchAllData(),
    watchSagaGetSingleCountry(),
    watchSagaSearchCountry(),
  ]);
}
