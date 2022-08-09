import { all, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import Header from "../components/Header";
import { fetchAllCountries } from "../api/fetchAllCountries";
function* fetchAllData() {
  let data = [];
  yield fetchAllCountries().then((res) => {
    console.log(res.data);
    data = res.data;
  });
  yield put({ type: "GET_ALL_COUNTRIES", peyload: data });
}

function* watchGetFetchAllData() {
  yield takeLatest("FETCH_ALL_DATA", fetchAllData);
}

export function* rootSaga() {
  yield all([watchGetFetchAllData()]);
}
