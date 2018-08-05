import { put, call, takeLatest } from 'redux-saga/effects';
import { urls, axiosR } from './config';
import { schemaAndComponents } from './until';
import CONST from './constants';
import * as actions from './actions';

export function* init({ pathname }) {
  const permissions = yield call(axiosR, { url: urls.permissions });
  yield put(actions.setPermissions(permissions.data));
  const page = yield call(axiosR, { url: pathname });
  yield put(actions.setPage(pathname, page.data));
  console.log(schemaAndComponents()(page.data));
}

export function* sagas() {
  yield takeLatest(CONST.INITIALIZE, init);
}