import { createSelector } from 'reselect';
import { keys } from 'lodash';

const page = state => state.page;
export const widgets = state => state.widgets;
export const dependencies = state => state.dependencies;

export const getWidgetsTypeAndName = createSelector(
  widgets,
  items => keys(items).map(name => ({ name, type: items[name]['type'] }))
);

export const getWidgetsProps = (state, props) => state.widgets[props.name] || {};