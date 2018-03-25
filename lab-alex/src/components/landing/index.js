'use strict';

import './_landing.scss';
import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return(
      <div className='landing'>
        <header>
          <h4>note keeper</h4>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul> 
          </nav>
        </header>
        <div>
          <p>Use this app to handle your tasks!</p>
          <p>click the dashboard link above</p>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default Landing;