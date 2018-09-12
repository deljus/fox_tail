import React, { PureComponent } from 'react';

export default (WrappedComponent) =>
  class extends PureComponent{
    componentDidMount() {
      const { location, initializeWidgets } = this.props;
      initializeWidgets(location.pathname);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };