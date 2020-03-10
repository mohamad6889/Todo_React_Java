import React, { Component } from 'react';
import './ToDoApp.css'
import {Link, withRouter} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'



class HeaderComponent extends Component {

    render() {
        const isLoggedIn = AuthenticationService.isUserLoggedIn();
        
        
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand"><Link to="/">ToDo Apllication</Link></div>
                        <ul className="navbar-nav">
                            {isLoggedIn && <li className="nav-link"><Link className="nav-link" to="/todos">ToDos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isLoggedIn && <li className="nav-link"><Link className="nav-link" to="/register">Register</Link></li>}
                            {!isLoggedIn && <li className="nav-link"><Link className="nav-link" to="/login">Login</Link></li>}
                            {isLoggedIn && <li className="nav-link"><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
                
            </>
        )
    }
  }


  export default withRouter(HeaderComponent)
