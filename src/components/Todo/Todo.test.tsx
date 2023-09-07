import { fireEvent, render, screen } from "@testing-library/react";

import { ITodo } from "../../@types/todo";
import React from "react";
import Todo from "./Todo";
import { act } from "react-test-renderer";
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

const defaultComponent = (
  <Todo
    userId={todos[1].userId}
    id={todos[1].id}
    title={todos[1].title}
    completed={todos[1].completed}
    updateTodo={updateTodo}
  />
);

describe("<Todo />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("completed-sign renders correctly", () => {
    const { getByTestId } = render(defaultComponent);
    expect(getByTestId("completed-sign")).toBeInTheDocument();
  });

  it("title text equal to", () => {
    const { getByTestId } = render(defaultComponent);
    expect(getByTestId("title-text")).toHaveTextContent(
      "quis ut nam facilis et officia qui"
    );
  });

  it("button text equal to", () => {
    const { getByTestId } = render(defaultComponent);
    expect(getByTestId("button-text")).toHaveTextContent("Отменить");
  });

  it("update button works correctly", async () => {
    const { getByTestId } = render(defaultComponent);
    const updateButton = getByTestId("update-button");

    expect(updateButton).toBeVisible();

    await act(async () => {
      fireEvent.click(updateButton);
    });
  });
});
