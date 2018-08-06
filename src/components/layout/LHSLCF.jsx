import React from 'react';
import { Layout, Header, Footer, Content, Sider } from '../connectVisualLibrary';
import PropTypes from 'prop-types';

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