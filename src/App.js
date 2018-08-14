import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import 'moment/locale/ru';
import Page from './page';
import store from './core/store';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LocaleProvider locale={ru_RU}>
        <Page />
      </LocaleProvider>
    </BrowserRouter>
  </Provider>
);



