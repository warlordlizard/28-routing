'use strict';

import React from 'react';
import NoteForm from '../noteform';
import './_notelist.scss';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <section className='note-list'>
        <ul>
          {this.props.notes.map((item) => 
            <li key={item.id}>
              <button  className='remove' onClick={() => this.props.removeNote(item)}>X</button>
              <p>- {item.content}</p>
              <NoteForm 
                note={item}
                submitTitle='update' 
                handleSubmit={(note) => {
                  note.id = item.id;
                  this.props.updateNote(note);
                }} />
                
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default NoteList;