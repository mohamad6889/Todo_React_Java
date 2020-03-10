package com.todo.todo.repository;

import com.todo.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    public List<Todo> findTodoByUsername(String username);
    public Todo findTodoByUsernameAndId(String username, Long id);
}
