import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setWidgetProps } from '../core/actions';

export default (WrappedComponent) => {
  class ReturnedComponent extends PureComponent {
    componentDidMount() {
      const {dataUrl, name, setWidgetProps, data} = this.props;
      if (dataUrl && !data) setWidgetProps(name, {data: [{
        "key": "1",
        "name": "John Brown",
        "age": 32,
        "address": "New York No. 1 Lake Park"
      }, {
        "key": "2",
        "name": "Jim Green",
        "age": 42,
        "address": "London No. 1 Lake Park"
      }, {
        "key": "3",
        "name": "Joe Black",
        "age": 32,
        "address": "Sidney No. 1 Lake Park"
      }]});
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
  return connect(null, {setWidgetProps})(ReturnedComponent)
}