import React, {Component} from 'react'
import axios from 'axios'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : ""
        }
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.sendUser = this.sendUser.bind(this)
    }

    setUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    setPassword(e){
        this.setState({
            password: e.target.value
        })
    }


    sendUser(){
        axios({
            method: "post",
            url : "http://localhost:3001/user/register",
            data : {
                username: this.state.username,
                password: this.state.password
            }
        })
        .then(() => {
            this.setState({
                username : "",
                password : ""
            })
            alert("register successful")
        })
        .catch(error => {
            alert("username should be unique and password must be minimum of 6 characters")
        })
    }


    render(){
        return(
            <div className = "register">
                <form>
                    <input type = "text" placeholder = "Username" autoFocus = "autofocus" onChange = {this.setUsername} /> <br/><br/>
                    <input type = "password" placeholder = "Password" onChange = {this.setPassword} /> <br/><br/>
                    <button type = "button" onClick = {this.sendUser}> Register </button>
                </form> 
            </div>
        )
    }

}


export default Register