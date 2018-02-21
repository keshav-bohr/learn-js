import React, {Component} from 'react'
import axios from 'axios'


class Logout extends Component{
    constructor(props){
        super(props)
        this.logoutFromDb = this.logoutFromDb.bind(this);
    }

    logoutFromDb(){
        axios({
            method: "post",
            url: "http://localhost:3001/user/logout",
            withCredentials: true
        })
        .then(res => {
            alert("logged out successfully")
        })
        .catch(error => {
            alert("something went wrong");
        })
    }

    render(){
        return(<div>
            {this.logoutFromDb()}
            </div>)
    }
}

export default Logout