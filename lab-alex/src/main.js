'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  render() {
    return (
      <div>
        <p>stuff goes here</p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));