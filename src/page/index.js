import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { initialize } from '../core/actions';
import * as Layouts from './layouts';
import { keys, map } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';


class Page extends PureComponent{
  componentDidMount(){
    this.props.initialize();
  }

  render(){

    const { layout, ...rest } = this.props;

    if(keys(Layouts).includes(layout)) {
      const Layout = Layouts[layout];
      return (
        <Switch>
          {
            map(rest.urls, (item) => <Route path={item.url} render={({location}) => <Layout {...rest} { ...location }/>} />)
          }
        </Switch>
        // <Route path='*' render={({ match, location }) => (
        //   rest.urls.some(item => item.url === match.url)
        //     ?
        //     : null
        // )} />
      )
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