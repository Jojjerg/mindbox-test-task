import { ITodo } from "../../@types/todo";
import React from "react";
import Todo from "../Todo/Todo";

type ListProps = {
  todos: ITodo[],
  filter: string,
  updateTodo: (id: number) => void
}

const TodosList: React.FC<ListProps> = ({ todos, filter, updateTodo }) => {
  const noFilterTodos = 
    filter === "All" &&
    todos.map((todo: ITodo) => (
      <Todo
        key={todo.id}
        userId={todo.userId}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        updateTodo={updateTodo}
      />
    ));

  const completedTodos =
    filter === "Completed" &&
    todos
      .filter((todo: ITodo) => todo.completed)
      .map((todo: ITodo) => (
        <Todo
          key={todo.id}
          userId={todo.userId}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          updateTodo={updateTodo}
        />
      ));

  const activeTodos =
    filter === "Active" &&
    todos
      .filter((todo: ITodo) => !todo.completed)
      .map((todo: ITodo) => (
        <Todo
          key={todo.id}
          userId={todo.userId}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          updateTodo={updateTodo}
        />
      ));

  return (
    <div>
      {!todos.length ? (
        <p>Список пуст</p>
      ) : (
        <>
          {noFilterTodos}

          {completedTodos}

          {activeTodos}
        </>
      )}
    </div>
  );
};

export default TodosList;
