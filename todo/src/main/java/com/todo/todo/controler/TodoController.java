package com.todo.todo.controler;

import com.todo.todo.model.Todo;
import com.todo.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    @Autowired
    TodoRepository todoRepository;

    @GetMapping(path = "/users/{username}/todos")
    public List<Todo> getAllUserTodos(@PathVariable (value = "username") String username){
        return todoRepository.findTodoByUsername(username);
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public void delTodo(@PathVariable(value = "username") String username, @PathVariable(value = "id") Long id) {

        Todo todo = todoRepository.findTodoByUsernameAndId(username, id);
        todoRepository.delete(todo);

    }
}
