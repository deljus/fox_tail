import CONST from './constants';

export const initialize = () => ({
  type: CONST.INITIALIZE,
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