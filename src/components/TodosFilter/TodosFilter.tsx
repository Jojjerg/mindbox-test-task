import type { IFilter, ITodo } from "../../@types/todo";

import DeleteCompletedButton from "../DeleteCompletedTodosButton/DeleteCompletedTodosButton";
import Filters from "../Filters/Filters";
import React from "react";
import RemainingTodos from "../RemainingTodos/RemainingTodos";

type TodosFilterProps = {
  todos: ITodo[];
  changeFilter: (filter: IFilter) => void;
  deleteCompletedTodos: () => void;
}

const TodosFilter: React.FC<TodosFilterProps> = ({ todos, changeFilter, deleteCompletedTodos }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 w-full bg-[#282828] border border-transparent border-t-zinc-600 rounded-b-md">
      <RemainingTodos todos={todos}/>
      <Filters changeFilter={changeFilter}/>
      <DeleteCompletedButton deleteCompletedTodos={deleteCompletedTodos} />
    </div>
  );
};

export default TodosFilter;
