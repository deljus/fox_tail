import React, { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { initializeWidgets, resetWidget } from './core/actions';
import { map, isEmpty, keys, get, uniqueId } from 'lodash';
import { didMountInitWidgets } from './hocs';
import { getWidgetsTypeAndName } from './core/selectors';
import components from './widgets';

class WidgetsFactory extends PureComponent {

  componentWillUnmount = () => {
    this.props.resetWidget();
  };

  render() {
    const { widgets, pathname, grid } = this.props;
    return (
      <div style={grid}>
        {
          !isEmpty(widgets) && widgets.map(widget =>
            createElement(
              components[widget['type']],
              {name: widget['name']}
            ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  widgets: getWidgetsTypeAndName(state),
  grid: state.grid,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    initializeWidgets,
    resetWidget,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(didMountInitWidgets(WidgetsFactory));