import React from 'react';
import { Menu as BaseMenu, MenuItem, SubMenu } from '../connect';
import { map, keys, isArray } from 'lodash';
import PropTypes from 'prop-types';

const recursiveMenu = (items) => (
  keys(items).map(key => {
    if(isArray(items[key])){
      <SubMenu>{ recursiveMenu(items[key][1]) }</SubMenu>
    }
    <MenuItem>{ items[key] }</MenuItem>
  })
);

const Menu = ({ items, ...rest }) => (
  <BaseMenu { ...rest } >
    { recursiveMenu(items) }
  </BaseMenu>
);

Menu.propTypes = {

};

export default Menu;