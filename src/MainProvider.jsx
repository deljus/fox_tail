import React, {Component} from 'react';
import { connect } from 'react-redux';
import { initialize } from './core/actions';
import PropTypes from 'prop-types';

class MainProvider extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  componentDidMount() {
    console.log(this.props);
    const { initialize, location } = this.props;
    initialize(location);
  }

  render() {
    return (
      <div></div>
    );
  }
}

const mapDispatchToProps = {
  initialize
};


export default connect(null, mapDispatchToProps)(MainProvider);
