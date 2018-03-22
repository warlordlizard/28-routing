'use strict';

import './_dashboard.scss';
import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../noteform';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    //note.title = user created
    this.props.app.setState(state => ({
      notes: [...state.notes, note],
    }));
  }

  //removeNote(note)

  render() {
    return(
      <div className='dashboard'>
        <h2>Create A Note</h2>
        <NoteForm handleAddNote={this.addNote} />
      </div>
    );
  }
}

export default Dashboard;