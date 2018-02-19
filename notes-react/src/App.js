import React, { Component } from 'react';
import './App.css';
// import Note from './FunctionNotes';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes : [],
      note : ''
    }
    this.createNote = this.createNote.bind(this);
    this.addNote = this.addNote.bind(this);
  }


  createNote(event){
    this.setState({
      note: event.target.value
    })
  }

  addNote(event){
    this.setState({
      notes : this.state.notes.concat(this.state.note)
    })
  }


  render() {
    return (
      <div>
        <form >
          <input type = "text" name = "noteContent" value = {this.state.note} onChange = {this.createNote}></input>
          <button type = "button" onClick = {this.addNote}>create a note</button>
          <p>{this.state.note || <br/>} </p>
        </form>        
          {
            this.state.notes.map((element,index) => {
              return <h1 key = {index}> {element}</h1> 
            })
          }

      </div>
    );
  }

}

export default App;
