import axios from 'axios'

class TodoDataService {

    readAllTodos(name) {
        return axios.get(`http://localhost:8081/users/${name}/todos`)
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8081/users/${name}/todos/${id}`)
    }

}


export default new TodoDataService()