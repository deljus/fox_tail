import React from 'react';
import { Layout, Header, Footer, Content, Sider } from '../connectVisualLibrary';
import PropTypes from 'prop-types';

const LHSRCF = ({ header, footer, sider, content }) => (
  <Layout>
    <Header>{ header }</Header>
    <Layout>
      <Content>{ content }</Content>
      <Sider>{ sider }</Sider>
    </Layout>
    <Footer>{ footer }</Footer>
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