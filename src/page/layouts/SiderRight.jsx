import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Menu from '../containers/Menu';

const { Header, Footer, Content, Sider } = Layout;

const SiderRight = ({ header, footer, urls, content }) => (
  <Layout>
    <Header>{ header }</Header>
    <Layout>
      <Content>{ content }</Content>
      <Sider>
        <Menu urls={ urls } />
      </Sider>
    </Layout>
    <Footer>{ footer }</Footer>
  </Layout>
);

SiderRight.propTypes = {
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

export default SiderRight;