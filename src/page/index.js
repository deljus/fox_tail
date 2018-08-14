import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { initialize } from '../core/actions';
import * as Layouts from './layouts'
import PropTypes from 'prop-types';


class Page extends PureComponent{
  componentDidMount(){
    this.props.initialize();
  }

  render(){

    const { layout, ...rest } = this.props;

    if(layout) {
      const Layout = Layouts[layout];
      return <Layout {...rest} />;
    }
    return null;
  }

}


const mapDispatchToProps = {
  initialize
};

const mapStateToProps = (state) => ({
  ...state.page
});


export default connect(mapStateToProps, mapDispatchToProps)(Page);