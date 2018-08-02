import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Header';
import ArticleView from './components/ArticleView';
import Editor from './components/Editor';
import SignInWith from './components/SignInWith';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const pathname = window.location.pathname;

    return (
      <div>
        {!pathname.includes('editor') ? <Header/>: ''}
        <SignInWith />
        <Switch>
          <Route exact path='/' component={Feed}/>
          <Route exact path='/profile/:id' component={Profile}/>
          <Route exact path='/articleView/:id' component={ArticleView}/>
          <Route exact path='/editor' component={Editor}/>
          <Route exact path='**' component={Feed}/>
        </Switch>
      </div>
    );
  }
}

export default App;
