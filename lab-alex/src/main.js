'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/landing';
import Dashboard from './components/dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={() => <Dashboard app={this.getApp()} />} />
          </section>
        </BrowserRouter>  
        <div>
          <p>stuff goes here</p>
        </div>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));