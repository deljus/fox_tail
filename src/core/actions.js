import CONST from './constants';

export const initialize = () => ({
  type: CONST.INITIALIZE,
});

export const initializeWidgets = (pathname) => ({
  type: CONST.GET_WIDGETS,
  pathname
});

export const setPermissions = (permission) => ({
  type: CONST.SET_PERMISSION,
  permission
});

export const setPage = (page) => ({
  type: CONST.SET_PAGE,
  page
});

export const setWidgets = (widgets) => ({
  type: CONST.SET_WIDGETS,
  widgets
});