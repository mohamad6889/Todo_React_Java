import React, { Component } from 'react';
import './ToDoApp.css'
import TodoDataService from './TodoDataService'
import AuthenticationService from './AuthenticationService'
import {withRouter} from 'react-router-dom'




class ListToDosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos : [],
            message : null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }


    componentDidMount() {
        this.refreshTodos()
    }


    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.deleteTodo(username, id)
        .then(response => {
            this.setState({message : 'Todo Deleted'})
            this.refreshTodos()
        }
        
        )

    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.readAllTodos(username)
        .then(response => this.setState({todos : response.data}))
    }




    render() {
    
        return(
            <div className="container">
                <h2>Todos List</h2>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <button className="newTodoBtn">New Todo</button>

                <table className="jumbotron bg-dark container">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Todo</th>
                            <th>Done</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.todo}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate}</td>
                                    <td><button className="editBtn">Edit</button></td>
                                    <td><span> </span></td>
                                    <td><button className="delBtn" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        )
    }
}


export default ListToDosComponent
