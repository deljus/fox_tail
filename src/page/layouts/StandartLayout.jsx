import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Menu from '../containers/Menu';

const { Header, Footer, Content } = Layout;

const StandartLayout = ({ urls, footer, content, ...rest }) => { console.log(rest); return(
  <Layout {...rest} >
    <Header>
      <Menu urls={ urls } />
    </Header>
    <Content>{ content }</Content>
    <Footer>{ footer }</Footer>
  </Layout>
)};

StandartLayout.propTypes = {
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

export default StandartLayout;