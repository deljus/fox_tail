import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { Menu, BreadCrumb, Widgets } from '../containers';

const { Header, Footer, Content, Sider } = Layout;

const FullSiderLeft = ({ header, footer, urls, ...rest }) => (
  <Layout>
    <Sider>
      <Menu urls={ urls } />
    </Sider>
    <Layout>
      <Header>{ header }</Header>
      <Content>
        <BreadCrumb urls={ urls } />
        <Widgets/>
      </Content>
      <Footer>{ footer }</Footer>
    </Layout>
  </Layout>
);

FullSiderLeft.propTypes = {
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

export default FullSiderLeft;