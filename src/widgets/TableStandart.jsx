import React from 'react';
import { Table } from 'antd';
import { tableHOC } from '../hocs';

const TableStandart = (props) => <Table dataSource={props.data} { ...props} />;

export default tableHOC(TableStandart);
