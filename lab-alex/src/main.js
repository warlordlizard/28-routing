'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/landing';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/' component={Landing} />
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