import { ITodo, TodoContextType } from "../../@types/todo";
import { render, screen } from "@testing-library/react";

import React from "react";
import TodosFilter from "./TodosFilter";
import { createRenderer } from "react-test-renderer/shallow";

const renderer = createRenderer();

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];

let filter = "All";

const deleteCompletedTodos = () => {
  return todos.filter((todo: ITodo) => !todo.completed);
};

const changeFilter = (newFilter: TodoContextType["filter"]) => {
  filter = newFilter;
  return filter;
};

const defaultComponent = (
  <TodosFilter
    todos={todos}
    changeFilter={changeFilter}
    deleteCompletedTodos={deleteCompletedTodos}
  />
);

describe("<TodosFilter />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
