import React, {Component} from 'react'
import axios from 'axios'

class DeleteNote extends Component{
    constructor(props){
        super(props)
        this.deleteNoteFromDb = this.deleteNoteFromDb.bind(this)
    }

    deleteNoteFromDb(noteTitle){
        axios({
            method: "delete",
            url: "http://localhost:3001/note/delete",
            data : {
                title : noteTitle
            },
            withCredentials: true
        })
        .then(res => {
            this.props.getNotes()
            alert("note deleted")
        })
        .catch(error => {
            alert("note could not be deleted")
        })
    }


    render(){
        return(
            <div>
                {this.props.title ? this.deleteNoteFromDb(this.props.title) : null}
            </div>
        )
    }
}

export default DeleteNote