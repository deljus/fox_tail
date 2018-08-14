import { put, call, takeLatest } from 'redux-saga/effects';
import { urls, axiosR } from './config';
import { schemaAndComponents } from './until';
import CONST from './constants';
import * as actions from './actions';

export function* init({ pathname }) {
  const page = yield call(axiosR, { url: urls.page });
  yield put(actions.setPage(page.data));
}

export function* sagas() {
  yield takeLatest(CONST.INITIALIZE, init);
}