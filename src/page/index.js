import React from 'react';
import * as layouts from './layouts';

export default ({ type, ...rest }) => {
  if(type && layouts[type]){
    const Layout = layouts[type];
    return <Layout { ...rest }/>
  }
  return null;
}