import { render, screen } from "@testing-library/react";

import App from "./App";
import React from "react";
import TodoProvider from "./context/TodoContext";
import { act } from "react-test-renderer";
import { createRenderer } from "react-test-renderer/shallow";

const renderer = createRenderer();

const defaultComponent = (
  <TodoProvider>
    <App />
  </TodoProvider>
);

const url = "https://jsonplaceholder.typicode.com/todos/";

describe("<App />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("header renders correctly", () => {
    const { getByTestId } = render(defaultComponent);
    expect(getByTestId("header")).toBeVisible();
  })

  it("todosCard renders correctly", () => {
    const { getByTestId } = render(defaultComponent);
    expect(getByTestId("todos-card")).toBeVisible();
  })
});
