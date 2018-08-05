import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Header, Footer, Content } = Layout;

const LHSLCF = ({ header, footer, sider, content }) => (
  <Layout>
    <Header>{ header }</Header>
    <Layout>
      <Sider>{ sider }</Sider>
      <Content>{ content }</Content>
    </Layout>
    <Footer>{ footer }</Footer>
  </Layout>
);

LHSLCF.propTypes = {
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

export default LHSLCF;