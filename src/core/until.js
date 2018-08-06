import * as Antd from 'antd';
import { keys, difference, omit } from 'lodash';

const clearWidget = (data) => {
  return keys(data).reduce((acc, item) => {
    if(!data[item].widget){
      return {...acc, [item]: data[item]}
    }
    return acc;
  }, {})
};

const schemaAndComponents1 = () => {
  const schema = {};
  const rdom = {};
  return function recursive(data){

    if (data.widget && data.id) {
      rdom[`${data.widget}#${data.id}`] = clearWidget(data);
    }

    for(let key in data) {
        if(data[key].widget && data[key].id)
        recursive(data[key]);
    }

    return { rdom, schema: data }
  }
};

export const schemaAndComponents = schemaAndComponents1();