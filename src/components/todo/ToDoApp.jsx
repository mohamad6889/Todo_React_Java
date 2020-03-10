import React, { Component } from 'react';
import './ToDoApp.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationRoute from './AuthenticationRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListToDosComponent from './ListToDosComponent.jsx'
import HeaderComponent from './HeaderComponent'

class ToDoApp extends Component {
    render() {
        return(
            <div className="ToDoApp">
                <Router>
                    <>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={HomeComponent} />
                            <Route path="/register" component={RegisterComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticationRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticationRoute path="/todos" component={ListToDosComponent} />
                            <AuthenticationRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent}></Route>
                        </Switch> 
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

class HomeComponent extends Component {
    


    render() {
        return (
            <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </>
        )
    }
}

class RegisterComponent extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
            </div>
        )
    }
}



class ErrorComponent extends Component {
    render() {
        return(
            <div>
                <h2>An error occurred!</h2>
                <Link to="/">Go to Home Page</Link>
            </div>
        )
    }   
}

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <div className="container">WELCOM {this.props.match.params.name}</div>
            </>
        )
    }
}

  
    class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserves @Mohammad Amani</span>
            </footer>
        )
    }
  }


  class LogoutComponent extends Component {
    render() {
        return (
            <div className="container">
                <h1>You are Logged Out</h1>
                <div className="jumbotron bg-dark">
                Thanks for Using ToDo :)
                </div>
            </div>
        )
    }
  }
  





export default ToDoApp