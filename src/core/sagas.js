import { put, call, takeLatest } from 'redux-saga/effects';
import { urls, axiosR } from './config';
import { reduce } from 'lodash';
import CONST from './constants';
import * as actions from './actions';
import { notification } from 'antd';

function* init() {
  const page = yield call(axiosR, { url: urls.page });
  yield put(actions.setPage(page.data));
}

function* getWidgets({ pathname }) {
  const response = yield call(axiosR, { url: pathname });
  const { widgets, grid } = response.data;
  const widgetPath = reduce(widgets, (prev, next) => ({ ...prev, [next.name]: { ...next }} ),{});
  yield put(actions.setWidgets(widgetPath));
  yield put(actions.setGrid(grid));
}

function* catchErrSaga(fn, action) {
  try {
    yield call(fn, action);
  } catch (e) {
    yield call(notification.error({
      message: 'Error',
      description: e.message,
    }));
  }
}

export function* sagas() {
  yield takeLatest(CONST.INITIALIZE, catchErrSaga, init);
  yield takeLatest(CONST.GET_WIDGETS, catchErrSaga, getWidgets);
}