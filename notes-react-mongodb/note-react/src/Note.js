import React, {Component} from 'react'
import axios from 'axios'
import DeleteNote from './DeleteNote'
import CreateNote from './CreateNote'
import UpdateNote from './UpdateNote'

class Note extends Component{
    constructor(props){
        super(props)
        this.state = {
            notes : [],
            deleteTitle : "",
            updateTitle: "",
            updateBody : "",
            createNote : true,
            updateNote: false
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
                    deleteTitle : "",
                    updateTitle : "",
                    createNote : true,
                    updateNote: false
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
   

    updateClickedNote(title,body){
        this.setState({
            createNote : false,
            updateNote: true,
            updateTitle : title,
            updateBody : body
        })
    }

    render(){
        return(
            <div> 
                <div>
                {
                    this.state.notes.map((element, index) => {
                        return (<div  key = {index} >
                                    <div onClick = {this.updateClickedNote.bind(this, element.title, element.body)} className = "list-note">
                                        <h1> Title : {element.title} </h1> 
                                        <h2> Body : {element.body} </h2>
                                    </div> 
                                    <button type = "button" onClick = {this.deleteNote.bind(this, element.title)}> Delete </button>
                                </div>)
                    })
                }
                </div>
                {this.state.deleteTitle ? <DeleteNote getNotes = {this.retreiveNotesFromDb} title = {this.state.deleteTitle} loggedIn = {this.state.loggedIn}/> : null}
                {this.state.updateNote ? <UpdateNote getNotes = {this.retreiveNotesFromDb} title = {this.state.updateTitle} body = {this.state.updateBody}/> : null}
                {this.state.createNote ? <CreateNote getNotes = {this.retreiveNotesFromDb}/> : null}
            </div>
        )
    }
}

export default Note