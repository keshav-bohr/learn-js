import React , {Component} from 'react'
import axios from 'axios'

class UpdateNote extends Component{
    constructor(props){
        super(props)
        this.state = {
            updatedBody: this.props.body
        }
        this.updateNoteInDb = this.updateNoteInDb.bind(this);
        this.setUpdatedBody = this.setUpdatedBody.bind(this);
    }

    updateNoteInDb(){
        axios({
            method : "patch",
            url : "http://localhost:3001/note/update",
            data : {
                title : this.props.title,
                body : this.state.updatedBody
            },
            withCredentials: true
        })
        .then(res => {
            this.props.getNotes();
            alert("note updated")
        })
        .catch(error => {
            alert("some internal error occured")
        })
    }

    setUpdatedBody(e){
        this.setState({
            updatedBody: e.target.value
        })
    }

    render(){
        return (
            <div className = "update-note">
                <form>
                    <label >{this.props.title} </label>
                    <input type = "text" value = {this.state.updatedBody} onChange = {this.setUpdatedBody} />
                    <button type = "button" onClick = {this.updateNoteInDb}> Update Note </button>
                </form>
            </div>
        )
    }
}

export default UpdateNote