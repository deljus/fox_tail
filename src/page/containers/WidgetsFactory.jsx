import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as components from '../../widgets';
import { initializeWidgets } from '../../core/actions';
import { map, isEqual, keys } from 'lodash';

class WidgetsFactory extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { pathname, initializeWidgets } = this.props;
    initializeWidgets(pathname);
  }

  shouldComponentUpdate(nextProps){
    console.log(nextProps);
    // const { pathname, initializeWidgets } = this.props;
    // const isNotEqualPath = !isEqual(nextProps.pathname, pathname);
    // isNotEqualPath && initializeWidgets(nextProps.pathname);
    // console.log(isNotEqualPath);
    return false
  }

  render(){

    const { widgets, pathname } = this.props;
    console.log(pathname);

    return(
      <div>
        {
          keys(widgets).map(name =>
          createElement(components[widgets[name]], { stateName: name }))
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  widgets: state.widgets,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    initializeWidgets,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsFactory);