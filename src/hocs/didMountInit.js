import React, { PureComponent } from 'react';

export default (WrappedComponent) =>
  class extends PureComponent{
    componentDidMount() {
      this.props.initialize();
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };