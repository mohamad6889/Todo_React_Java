import React, { Component } from 'react';
import './ToDoApp.css'
import AuthenticationService from './AuthenticationService'



class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username : 'mohamad',
            password : '',
            loginFailed : false,
            loginSuccssed : false
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleNameChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loginClicked() {
        if((this.state.username === "mmm" || this.state.username==="mohamad" || this.state.username==="ma68") && this.state.password === "pass") {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            
            

        }
        else {
            this.setState({loginSuccssed:false})
            this.setState({loginFailed:true})
        }
    }

    
    render() {
        return(
            <div className="container">
                {this.state.loginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                <div className="username">
                Username: <input type="text" value={this.state.username} onChange={this.handleNameChange} className="usernameInput" name="username"></input>
                </div>
                <div className="password">
                Password: <input type="password" value={this.state.password} onChange={this.handleNameChange} className="passwordInput" name="password"></input>
                </div>
                {this.state.loginFailed && <div><h6>Invalid Credential</h6></div>}
                <div className="loginBtn">
                    <button type="submit" className="a" onClick={this.loginClicked}>LOGIN</button>
                </div>
                <div className="registerLink">
                Not a User Yet?<a href="/register" className="regLink">Register Here</a>
                </div>
            </div>
        )
    }
}


export default LoginComponent
