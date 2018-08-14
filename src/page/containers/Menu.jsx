import React from 'react';
import { Menu as BaseMenu } from 'antd';
import { Link } from 'react-router-dom';
import { map, keys, isArray } from 'lodash';
import PropTypes from 'prop-types';

const items = ({ name, url }) => (
  <BaseMenu.Item>
    <Link to={ url } >
      { name }
      </Link>
  </BaseMenu.Item>);

const Menu = ({ urls, ...rest }) => (
  <BaseMenu { ...rest } >
    { map(urls, items ) }
  </BaseMenu>
);

export default Menu;