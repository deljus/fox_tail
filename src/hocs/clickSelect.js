import React, { PureComponent, Fragment } from 'react';

export default (WrappedComponent) => (props) => {

    const onSelect = (select) => {
      const { setWidgetProps, name } = props;
      setWidgetProps(name, { selected: select });
    };

     return <WrappedComponent {...props} onRow={(record) => {
       return {
         onClick: () => {onSelect(record)},       // click row
         onMouseEnter: () => {},  // mouse enter row
       };
     }} />
  };