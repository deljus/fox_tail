import React from 'react';
import { Menu as BaseMenu } from 'antd';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const MenuItems = ({ key, link, text }) => <BaseMenu.Item key="1">nav 1</BaseMenu.Item>;

const Menu = ({ items, ...rest }) => (
  <BaseMenu { ...rest } >
    { map(items, MenuItems) }

  </BaseMenu>
);

LHSRCF.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  sider: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
};

export default LHSRCF;