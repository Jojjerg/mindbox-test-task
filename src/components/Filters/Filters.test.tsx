import { ITodo, TodoContextType } from "../../@types/todo";
import {
  fireEvent,
  getAllByTestId,
  render,
  screen,
} from "@testing-library/react";

import Filters from "./Filters";
import React from "react";
import { act } from "react-test-renderer";
import { createRenderer } from "react-test-renderer/shallow";

const renderer = createRenderer();

let filter = "All";

const changeFilter = (newFilter: TodoContextType["filter"]) => {
  return (filter = newFilter);
};

const defaultComponent = <Filters changeFilter={changeFilter} />;

describe("<Filters />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("filter should change", async () => {
    const { getAllByTestId } = render(defaultComponent);
    const filterButtons = getAllByTestId("filter-button");

    expect(filterButtons.length).toEqual(3);

    await act(async () => {
      fireEvent.click(filterButtons[0]);
    });

    expect(filter).toBe("All");

    await act(async () => {
      fireEvent.click(filterButtons[1]);
    });

    expect(filter).toBe("Active");

    await act(async () => {
      fireEvent.click(filterButtons[2]);
    });

    expect(filter).toBe("Completed");
  });
});
