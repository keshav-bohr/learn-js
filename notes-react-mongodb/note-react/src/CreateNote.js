import React, {Component} from 'react'
import axios from 'axios'


class CreateNote extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            body : ""
        }
        this.createNote = this.createNote.bind(this)
        this.setBody = this.setBody.bind(this)
        this.setTitle = this.setTitle.bind(this)
    }

    createNote(){
        axios({
            method: "post",
            url: "http://localhost:3001/note/create",
            data: {
                title: this.state.title,
                body : this.state.body
            },
            withCredentials: true
        })
        .then(res => {
            this.setState({
                title: "",
                body: ""
            })
            this.props.getNotes();
        })
        .catch(error => {
            alert('some error occurred while creating a note')
        })
    }

    setTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    setBody(e){
        this.setState({
            body: e.target.value
        })
    }

    render(){
        return(
            <div className = "create-note"><br/>
                <form>
                    <input type = "text" placeholder = "Title" value = {this.state.title} onChange = {this.setTitle}/><br/><br/>
                    <input type = "text" placeholder = "Body" value = {this.state.body} onChange = {this.setBody}/><br/><br/>
                    <button type = "button" onClick = {this.createNote}> Create A Note </button>
                </form>
            </div>
        )
    }
}


export default CreateNote