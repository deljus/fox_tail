import { combineReducers } from 'redux';
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

const widgets = (state = {}, action) => {
  switch (action.type) {
    case CONST.SET_WIDGETS:
      return { ...action.widgets, ...action.any };
    case CONST.SET_WIDGET_PROPS:
      return { ...state, [action.name]: Object.assign(state[action.name], action.props) };
    default:
      return state;
  }
};

export default combineReducers({
  page,
  widgets,
  grid,
});