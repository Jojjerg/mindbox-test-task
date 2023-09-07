import { render, screen } from '@testing-library/react';

import { ITodo } from "../../@types/todo";
import React from "react";
import TodosList from "./TodosList";
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

const updateTodo = (id: number) => {
  todos.filter((todo: ITodo) => {
    if (todo.id === id) {
      if (todo.completed) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
      return [...todos];
    }
  });
};

const defaultComponent = (filter: string) => <TodosList todos={todos} filter={filter} updateTodo={updateTodo} />;

describe("<TodosList />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(defaultComponent("All"));
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("should have 8 todos", () => {
    const { getAllByTestId } = render(defaultComponent("All"))
    expect(getAllByTestId('todo').length).toEqual(8)
  })

  it("should have 6 active todos", () => {
    const { getAllByTestId } = render(defaultComponent("Active"))
    expect(getAllByTestId('todo').length).toEqual(6)
  })

  it("should have 2 completed todos", () => {
    const { getAllByTestId } = render(defaultComponent("Completed"))
    expect(getAllByTestId('todo').length).toEqual(2)
  })
});
