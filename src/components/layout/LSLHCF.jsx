import React from 'react';
import { Layout, Header, Footer, Content, Sider } from '../connectVisualLibrary';
import PropTypes from 'prop-types';

const LHSRCF = ({ header, footer, sider, content }) => (
  <Layout>
    <Sider>{ sider }</Sider>
    <Layout>
      <Header>{ header }</Header>
      <Content>{ content }</Content>
      <Footer>{ footer }</Footer>
    </Layout>
  </Layout>
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