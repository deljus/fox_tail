import * as Antd from 'antd';
import { keys, difference, omit, transform, isEqual, isObject } from 'lodash';
import queryString from 'query-string';

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

export const compose = (...fns) =>
  fns.reduce((prevFn, nextFn) =>
      (...args) => nextFn(prevFn(...args)),
    value => value
  );

export function differenceObj(object, base) {
  function changes(object, base) {
    return transform(object, function (result, value, key) {
      if (!isEqual(value, base[key])) {
        result[key] = (isObject(value) && isObject(base[key])) ? changes(value, base[key]) : value;
      }
    });
  }

  return changes(object, base);
}

export function urlConverter(template, base, get = null) {
  for (const key in base) {
    template = template.replace(`:${key}`, base[key]);
  }
  if (get) {
    const getKey = Object.keys(get).reduce((acc, key) => {
      if (get[key]) {
        acc[key] = get[key];
      }
      return acc;
    }, {});

    template = `${template}?${queryString.stringify(getKey)}`;
  }

  return template;
}

export const schemaAndComponents = schemaAndComponents1();