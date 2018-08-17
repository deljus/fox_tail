import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Menu from '../containers/Menu';
import { WidgetsFactory } from '../containers';

const { Header, Footer, Content } = Layout;

const StandartLayout = ({ urls, footer, ...rest }) => { console.log(rest); return(
  <Layout   className="layout" style={{ minHeight: '100vh' }}>
    <Header>
      <Menu
        urls={ urls }
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px' }}/>
    </Header>
    <Content style={{ padding: '0 50px' }} >
      <div style={{ margin: 24 }}>
        <WidgetsFactory pathname={rest.pathname} />
      </div>
    </Content>
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