import React, { Component } from 'react';
import axios from 'axios'
import Note from './Note'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loggedIn: false
        }
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    setUsername(e){
        this.setState({
            username : e.target.value
        })
    }

    setPassword(e){
        this.setState({
            password : e.target.value
        })
    }

    loginUser(){
        axios({
            method : "post",
            url : "http://localhost:3001/user/login",
            data : {
                username : this.state.username,
                password : this.state.password
            },
            withCredentials: true
        })
        .then((res) => {
            this.setState({
                loggedIn : true
            })
            this.props.checkLogin(this.state.loggedIn)
        })
        .catch(error => {
            alert("user not found")
        })
    }

    render() {
        var showing = !this.state.loggedIn
        return (
            <div>
                <div style = {{display : (showing ? 'block' : 'none')}} className = "login" >
                <form>
                    <input type="text" placeholder = "Username" onChange={this.setUsername} /> <br/><br/>
                    <input type="password" placeholder = "Password" onChange={this.setPassword} /> <br/><br/>
                    <button type="button" disabled = {this.state.loggedIn} onClick={this.loginUser}> Login </button>
                </form>
                </div>
                    {this.state.loggedIn ?  <Note loggedIn = {this.state.loggedIn}/> : null}
            </div>
        )
    }
}

export default Login