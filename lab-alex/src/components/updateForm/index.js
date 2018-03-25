'use strict';

import './_updateform.scss';
import React from 'react';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    
    let content = props.note ? props.note.content : '';
    this.state = {content};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value, type} = e.target;

    if(type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value),
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return(
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          className='input'
          name='content'
          value=''
          type='text'
          onChange={this.handleChange}
          placeholder={this.state.content}
          required='true' />
        <button type='submit'>{this.props.submitTitle}</button>
      </form>  
    );
  }
}

export default UpdateForm;