'use strict';

import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddNote(this.state);
  }

  render() {
    return(
      <form className='NoteForm' onSubmit={this.handleSubmit}>
        <input
          name='text'
          value={this.state.content}
          type='text'
          onChange={this.handleChange}
          required='true' />
        <button type='submit'>Add</button>
      </form>  
    );
  }
}

export default NoteForm;