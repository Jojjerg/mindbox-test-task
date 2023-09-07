import type { ITodo, TodoContextType } from "../@types/todo";
import { createContext, useContext, useState } from "react";

import type { PropsWithChildren } from "react";
import React from "react";

export const TodoContext = createContext<TodoContextType | null>(null);

const url = "https://jsonplaceholder.typicode.com/todos/?_limit=8";

const TodoProvider = ({ children }: PropsWithChildren<{}>) => {
  const [todos, setTodos] = useState<TodoContextType['todos']>([]);
  const [filter, setFilter] = useState<TodoContextType['filter']>("All");

  const getTodos = () => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((todos) => setTodos(todos));
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      userId: Math.random(),
      id: Math.random(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        if (todo.completed) {
          todo.completed = false;
        } else {
          todo.completed = true;
        }
        setTodos([...todos]);
      }
    });
  };

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo: ITodo) => !todo.completed));
  };

  const changeFilter = (filter: TodoContextType['filter']) => {
    setFilter(filter);
  };

  const contextValue = {
    todos,
    filter,
    getTodos,
    addTodo,
    updateTodo,
    deleteCompletedTodos,
    changeFilter,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext)
  
  if(!context) throw new Error("useTodoContext must be used inside the TodoProvider")

  return context
}

export default TodoProvider;
