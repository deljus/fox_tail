import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import 'moment/locale/ru';
import MainProvider from './MainProvider';
import store from './core/store';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <LocaleProvider locale={ru_RU}>
        <Route path="*" component={MainProvider}/>
      </LocaleProvider>
    </BrowserRouter>
  </Provider>
);