package com.todo.todo;

import com.todo.todo.model.Todo;
import com.todo.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class TodoApplication implements CommandLineRunner{
    @Autowired
    TodoRepository todoRepository;


    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        /*Todo todo = new Todo();
        todo.setDone(false);
        todo.setUsername("mohamad");
        todo.setTargetDate(new Date());
        todo.setTodo("Learn reactive programming");
        todo.setTitle("Learn");
        todoRepository.save(todo);


        Todo todo1 = new Todo();
        todo1.setDone(false);
        todo1.setUsername("mohamad");
        todo1.setTargetDate(new Date());
        todo1.setTodo("Learn microservices");
        todo1.setTitle("Learn");
        todoRepository.save(todo1);


        Todo todo2 = new Todo();
        todo2.setDone(false);
        todo2.setUsername("mohamad");
        todo2.setTargetDate(new Date());
        todo2.setTodo("Learn react js");
        todo2.setTitle("Learn");
        todoRepository.save(todo2);

        Todo todo3 = new Todo();
        todo3.setDone(false);
        todo3.setUsername("mohamad");
        todo3.setTargetDate(new Date());
        todo3.setTodo("Learn Linux");
        todo3.setTitle("Learn");
        todoRepository.save(todo3);*/
    }
}
