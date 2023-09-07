import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import TodosCard from "./components/TodosCard/TodosCard";
import { useTodoContext } from "./context/TodoContext";

const App = () => {
  const {
    getTodos,
    addTodo,
    updateTodo,
    deleteCompletedTodos,
    changeFilter,
    todos,
    filter,
  } = useTodoContext();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Header />
      <TodosCard
        todos={todos}
        filter={filter}
        addTodo={addTodo}
        updateTodo={updateTodo}
        changeFilter={changeFilter}
        deleteCompletedTodos={deleteCompletedTodos}
      />
    </div>
  );
};

export default App;
