import * as Antd from 'antd';
import { keys, difference, omit } from 'lodash';

const compKeys = ['Layout', 'Sider', 'Footer', 'Content', 'Header'];

const omitByKey = (obj, comKey) => {
  return keys(obj).reduce((acc, item) => {
    if(!comKey.includes(item.split('_')[0])){
      return {...acc, [item]: obj[item]}
    }
    return {};
  }, {})
};

export const schemaAndComponents = () => {
  const schema = [];
  const rdom = {};
  return function recursive(data){
    for(let item in data) {
      if (compKeys.includes(item.split('_')[0])) {
        rdom[item] = omitByKey(data[item], compKeys);
        schema.push(item);
        recursive(data[item]);
      }
    }
      return { rdom, schema }
  }
};