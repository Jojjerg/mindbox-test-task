import type { IFilter, ITodo } from "../../@types/todo";

import AddTodo from "../AddTodo/AddTodo";
import React from "react";
import TodosFilter from "../TodosFilter/TodosFilter";
import TodosList from "../TodosList/TodosList";

type CardProps = {
  todos: ITodo[];
  filter: IFilter;
  addTodo: (title: string) => void;
  updateTodo: (id: number) => void;
  deleteCompletedTodos: () => void;
  changeFilter: (filter: IFilter) => void;
};

const TodosCard: React.FC<CardProps> = ({
  todos,
  filter,
  addTodo,
  updateTodo,
  deleteCompletedTodos,
  changeFilter,
}) => {
  return (
    <div data-testid="todos-card" className="flex flex-col gap-4 w-[1000px] h-max rounded-md shadow-lg bg-[#282828]">
      <AddTodo addTodo={addTodo} />
      <TodosList todos={todos} filter={filter} updateTodo={updateTodo} />
      <TodosFilter todos={todos} changeFilter={changeFilter} deleteCompletedTodos={deleteCompletedTodos} />
    </div>
  );
};

export default TodosCard;
