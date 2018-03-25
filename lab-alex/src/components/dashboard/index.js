'use strict';

import './_dashboard.scss';
import React from 'react';
import uuid from 'uuid/v1';

import { Link } from 'react-router-dom';
import NoteForm from '../noteform';
import NoteList from '../notelist';

let renderIf = (test, component) => test ? component : undefined;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote  = this.updateNote.bind(this);
  }

  addNote(note) {
    let {app} = this.props;
    
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    app.setState(prevState => ({
      notes: prevState.notes.concat([note]),
    }));
  }

  removeNote(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter(item => {
        return item.id !==note.id;
      }),
    }));
  }

  updateNote(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map(item => {
        return item.id === note.id ? note : item;
      }),
    }));
  }

  render() {
    let {app} = this.props;
    return(
      <div className='dashboard'>
        <header>
          <h4>note keeper</h4>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul>
          </nav>
        </header>
        <section className='lower'>
          <h2>create a note.</h2>
          <NoteForm 
            handleSubmit={this.addNote} submitTitle='add note'/>
          <h2>notes.</h2>
          <NoteList 
            notes={app.state.notes} 
            removeNote={this.removeNote} 
            updateNote={this.updateNote} />
        </section>
        <footer></footer>
      </div>
    );
  }
}

export default Dashboard;