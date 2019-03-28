import React, { Component } from 'react';
import store from '../configureStore';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../containers/home/index';
import NotFoundPage from '../containers/error/index';
import LoginPage from '../containers/login/index';
import { BrowserRouter, Redirect } from 'react-router-dom';
import GrowlComponent from '../components/growl/index';
import HeaderComponent from '../components/header/index';
import NotificationContainer from '../containers/notifications/index';

import './style.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GrowlComponent />
        <BrowserRouter>
          <Switch>
            <Route exact path="/(login)" component={LoginContainer} />
            <Route component={DefaultContainer} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={LoginPage} />
  </div>
);

const DefaultContainer = () => (
  <div className="appContainer">
    <HeaderComponent />
    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/notifications" component={NotificationContainer} />
  </div>
);
