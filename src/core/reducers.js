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

export default combineReducers({
  page,
});