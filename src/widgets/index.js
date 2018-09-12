import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { initializeWidgets } from '../core/actions';
import { map, isEmpty, keys, get, uniqueId } from 'lodash';
import TableStandart from './TableStandart';
import Card from './Card';
import { didMountInitWidgets } from '../hocs';

const components = {
  TableStandart,
  Card,
};

const WidgetsFactory = ({ widgets, pathname, grid }) => (
  <div style={grid}>
    {
      !isEmpty(widgets) && keys(widgets).map(name =>
        <div key={uniqueId('widget')} style={ get(widgets[name], 'grid', null) }>
          {
            createElement(components[widgets[name]['type']], widgets[name])
          }
        </div>
      )
    }
  </div>
);

const mapStateToProps = state => ({
  widgets: state.widgets,
  grid: state.grid,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    initializeWidgets,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(didMountInitWidgets(WidgetsFactory));