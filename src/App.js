import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { map, uniqueId } from 'lodash';
import { initialize } from './core/actions';
import { didMountInit } from './hocs';
import WidgetFactory from './WidgetFactory';
import 'moment/locale/ru';
import Layouts from './page';
import store from './core/store';
import ru_RU from 'antd/lib/locale-provider/ru_RU';
import DependencyWatch from './DependencyWatch';

const Routes = ({ urls }) =>
  map(urls, item =>
    <Route
           key={uniqueId('route')}
           exact
           path={item.url}
           component={WidgetFactory}
    />
  );

const NotFound = () => 'Not Found';

const AppLayout = ({ layout, urls }) => (
    <BrowserRouter>
      <Switch>
        <Layouts
        type={layout}
        urls={urls}>
        <Routes
          urls={urls}
        />
        <Route
          path="*"
          component={NotFound} />
        </Layouts>
      </Switch>

    </BrowserRouter>
);

const mapDispatchToProps = {
  initialize
};

const mapStateToProps = state => ({
  ...state.page
});

const Application = connect(
  mapStateToProps, 
  mapDispatchToProps
)(didMountInit(AppLayout));

export default () => (
  <Provider store={store}>
    <LocaleProvider locale={ru_RU}>
      <Fragment><Application/><DependencyWatch/>
      </Fragment>

    </LocaleProvider>
  </Provider>
)


