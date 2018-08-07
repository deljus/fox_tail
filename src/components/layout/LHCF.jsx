import React from 'react';
import { Layout, Header, Footer, Content } from '../connect';
import PropTypes from 'prop-types';

const LHCF = ({ header, footer, content, ...rest }) => { console.log(rest); return(
  <Layout {...rest} >
    <Header>{ header }</Header>
    <Content>{ content }</Content>
    <Footer>{ footer }</Footer>
  </Layout>
)};

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