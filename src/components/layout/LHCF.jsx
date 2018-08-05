import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Header, Footer, Content } = Layout;

const LHCF = ({ header, footer, content }) => (
  <Layout>
    <Header>{ header }</Header>
    <Content>{ content }</Content>
    <Footer>{ footer }</Footer>
  </Layout>
);

LHCF.propTypes = {
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
};

export default LHCF;