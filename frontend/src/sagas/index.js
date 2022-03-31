import {
  takeLatest,
  put,
  all,
  takeEvery,
  select,
  call,
} from "redux-saga/effects";
import {
  getRequest,
  putRequest,
  postRequest,
  patchRequest,
  deleteRequest,
  putRequestCompressed,
  postRequestCompressed,
} from "../_http";

import { LOAD_DEPLOYMENTS } from "../actions/actionTypes";

function* loadDeploymentsAsync() {
  console.log("REQUESTED TO LOAD DEPLOYMENTS");
  try {
    const response = yield call(getRequest, `/deployments`);

    yield put({ type: LOAD_DEPLOYMENTS.SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: LOAD_DEPLOYMENTS.FAILURE, payload: error.message });
  }
}

function* watchLoadDeployments() {
  yield takeLatest(LOAD_DEPLOYMENTS.REQUEST, loadDeploymentsAsync);
}

export default function* rootSaga() {
  yield all([watchLoadDeployments()]);
}
