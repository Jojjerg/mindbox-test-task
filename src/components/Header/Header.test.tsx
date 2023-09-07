import { render, screen } from "@testing-library/react";

import Header from "./Header";
import React from "react";
import { createRenderer } from "react-test-renderer/shallow";

const renderer = createRenderer();

const defaultComponent = <Header />;

describe("<Header />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("header-text renders correctly", () => {
    const { getByTestId } = render(defaultComponent);
    expect(getByTestId("header-text")).toBeVisible();
  })
});