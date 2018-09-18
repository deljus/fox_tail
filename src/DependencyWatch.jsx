import React, { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { transform, isEqual, isEmpty, isObject, forEach, has, includes, get } from 'lodash';
import { widgets, dependencies } from './core/selectors';
import { differenceObj, urlConverter } from './core/until';
import { widgetsChange } from './core/actions';

class DependecyWatch extends PureComponent {

  componentDidUpdate = (prevProps) => {

    const { widgets, dependencies } = this.props;
    const { widgets: prevWidgets } = prevProps;

    if(!dependencies || isEmpty(widgets) || isEmpty(prevWidgets)) return false;

    const diff = differenceObj(widgets, prevWidgets);

    forEach(dependencies, dependence => {
      const [ fn, ...args ] = dependence;
      if(this[fn] && has(diff, dependence[1])){
        this[fn].call(this, ...args);
      }
    })

  };

  insertAsUrl = (field, urlField, template) => {
    const { widgets, widgetsChange } = this.props;
    const url = urlConverter(template, get(widgets, field));
    widgetsChange(urlField, url);
  };

  render() {
    return null;
  }
};

const mapStateToProps = state => ({
  widgets: widgets(state),
  dependencies: dependencies(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    widgetsChange,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DependecyWatch);