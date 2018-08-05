import CONST from './constants';

export const initialize = ({ pathname }) => ({
  type: CONST.INITIALIZE,
  pathname
});

export const setPermissions = (permission) => ({
  type: CONST.SET_PERMISSION,
  permission
});

export const setPage = (url, page) => ({
  type: CONST.SET_PAGE,
  url,
  page
});