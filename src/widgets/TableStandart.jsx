import React from 'react';
import { Table } from 'antd';

const TableStandart = (props) => {
  console.log(props);
  return <Table dataSource={props.data} { ...props} />;
};

export default TableStandart;
