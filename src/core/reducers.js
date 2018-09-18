import { combineReducers } from 'redux';
import { set } from 'lodash';
import CONST from './constants';

const page = (state = {}, action) => {
  switch (action.type) {
    case CONST.SET_PAGE:
      return { ...action.page };
    default:
      return state;
  }
};

const grid = (state = {}, action) => {
  switch (action.type) {
    case CONST.SET_GRID:
      return { ...action.grid };
    default:
      return state;
  }
};

const dependencies = (state = [], action) => {
  switch (action.type) {
    case CONST.SET_DEPENDENCIES:
      return [ ...action.dependencies ];
    default:
      return state;
  }
};

const widgets = (state = {}, action) => {
  switch (action.type) {
    case CONST.SET_WIDGETS:
      return { ...action.widgets, ...action.any };
    case CONST.SET_WIDGET_PROPS:
      return { ...state, [action.name]: {...state[action.name], ...action.props }};
    case CONST.WIDGETS_CHANGE:
      return { ...set(state, action.path, action.value) };
    case CONST.CLEAR_WIDGETS:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  page,
  widgets,
  grid,
  dependencies,
});