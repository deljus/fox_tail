import React from 'react';
import { Layout } from 'antd';
import Menu from '../containers/Menu';
import PropTypes from 'prop-types';

const { Header, Footer, Content, Sider } = Layout;

const SiderLeft = ({ header, footer, urls, content }) => (
  <Layout>
    <Header>{ header }</Header>
    <Layout>
      <Sider>
        <Menu urls={ urls } />
      </Sider>
      <Content>{ content }</Content>
    </Layout>
    <Footer>{ footer }</Footer>
  </Layout>
);

SiderLeft.propTypes = {
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

export default SiderLeft;