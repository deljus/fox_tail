import React from 'react';
import { Menu as BaseMenu, MenuItem } from '../connectVisualLibrary';
import { map, ui } from 'lodash';
import PropTypes from 'prop-types';

const MenuItems = ({ link, text, ...rest }) =>
  <MenuItem { ...rest }>{text}</MenuItem>;

const Menu = ({ items, ...rest }) => (
  <BaseMenu { ...rest } >
    { map(items, MenuItems) }
  </BaseMenu>
);

Menu.propTypes = {

};

export default Menu;