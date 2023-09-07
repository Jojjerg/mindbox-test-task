import { ITodo } from "../../@types/todo";
import React from "react";

const RemainingTodos = ({ todos }: {todos: ITodo[] }) => {
  const remaining = todos ? todos.filter((todo) => !todo.completed).length : '0';

  return (
    <div>
      <span data-testid="remaining-text">Осталось: {remaining}</span>
    </div>
  );
};

export default RemainingTodos;
