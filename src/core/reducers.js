import { combineReducers } from 'redux';
import CONST from './constants';

const pages = (state = {}, action) => {
  switch (action.type) {
    case CONST.SET_PAGE:
      return { ...state, [action.url]: action.page };

    default:
      return state;
  }
};

const permission = (state = false, action) => {
  switch (action.type) {
    case CONST.SET_PERMISSION:
      return true;

    default:
      return state;
  }
};

export default combineReducers({
  pages,
  permission,
});