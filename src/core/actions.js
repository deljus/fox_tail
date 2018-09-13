import CONST from './constants';

export const initialize = () => ({
  type: CONST.INITIALIZE,
});

export const initializeWidgets = (pathname) => ({
  type: CONST.GET_WIDGETS,
  pathname
});

export const setPage = (page) => ({
  type: CONST.SET_PAGE,
  page
});

export const setGrid = (grid) => ({
  type: CONST.SET_GRID,
  grid
});

export const setWidgets = (widgets) => ({
  type: CONST.SET_WIDGETS,
  widgets,
});

export const setWidgetProps = (name, props) => ({
  type: CONST.SET_WIDGET_PROPS,
  name,
  props,
});