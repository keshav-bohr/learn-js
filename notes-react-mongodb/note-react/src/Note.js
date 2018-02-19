import React, {Component} from 'react'
import axios from 'axios'
import DeleteNote from './DeleteNote'
import CreateNote from './CreateNote'

class Note extends Component{
    constructor(props){
        super(props)
        this.state = {
            notes : [],
            deleteTitle : "",
            createNote : true
        }
        this.deleteNote = this.deleteNote.bind(this)
        this.retreiveNotesFromDb = this.retreiveNotesFromDb.bind(this)
    }

    retreiveNotesFromDb(){
        if(this.props.loggedIn){
            axios({
                method: 'get',
                url: "http://localhost:3001/note/list",
                withCredentials: true
            })
            .then(notes => {
                this.setState({
                    notes : notes.data,
                    deleteTitle : ""
                })
            })
            .catch(error => {
                alert("no notes found")
            })
        }
        
    }

    componentDidMount(){
        this.retreiveNotesFromDb()
    }

    deleteNote(title){
        this.setState({
            deleteTitle : title
        })
    }
   

    render(){
        return(
            <div> 
                <div>
                {
                    this.state.notes.map((element, index) => {
                        return (<div className = "list-note" key = {index}>
                                    <h1> Title : {element.title} </h1> 
                                    <h2> Body : {element.body} </h2> 
                                    <button type = "button" key = {index} onClick = {this.deleteNote.bind(this, element.title)}> Delete </button>
                                </div>)
                    })
                }
                </div>
                {this.state.deleteTitle ? <DeleteNote getNotes = {this.retreiveNotesFromDb} title = {this.state.deleteTitle} loggedIn = {this.state.loggedIn}/> : null}
                {this.state.createNote ? <CreateNote getNotes = {this.retreiveNotesFromDb}/> : null}
            </div>
        )
    }
}

export default Note