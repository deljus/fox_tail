import { put, call, takeLatest } from 'redux-saga/effects';
import { urls, axiosR } from './config';
import { reduce } from 'lodash';
import { schemaAndComponents } from './until';
import CONST from './constants';
import * as actions from './actions';

function* init() {
  const page = yield call(axiosR, { url: urls.page });
  yield put(actions.setPage(page.data));
}

function* getWidgets({ pathname }) {
  const response = yield call(axiosR, { url: pathname });
  const { widgets } = response.data;
  const widgetPath = reduce(widgets, (prev, { name, type }) => ({ ...prev, [name]: type }),{});
  yield put(actions.setWidgets(widgetPath));
}


export function* sagas() {
  yield takeLatest(CONST.INITIALIZE, init);
  yield takeLatest(CONST.GET_WIDGETS, getWidgets);
}