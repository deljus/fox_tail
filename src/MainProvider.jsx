import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { initialize } from './core/actions';
import components from './components';
import { get } from 'lodash';
import PropTypes from 'prop-types';

console.log(components);

class MainProvider extends Component {
  static defaultProps = {
    schema: false,
  };

  static propTypes = {};

  componentDidMount() {
    const { initialize, location } = this.props;
    initialize(location);
  }

  createNodes = (schema) => {

    if(get(schema, 'widget')){
      return createElement(connect(state => ({  ...state.page.rdom[`${schema.widget}#${schema.id}`] }))(
        components[schema.widget]), {});
    }
    return null;

  };

  render() {
    const { schema } = this.props;
    return schema && this.createNodes(schema)
  }
}

const mapDispatchToProps = {
  initialize
};

const mapStateToProps = (state) => ({
  schema: state.page.schema,
});


export default connect(mapStateToProps, mapDispatchToProps)(MainProvider);
