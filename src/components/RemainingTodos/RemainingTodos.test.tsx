import { render, screen } from '@testing-library/react';

import React from 'react';
import RemainingTodos from './RemainingTodos';
import { createRenderer } from 'react-test-renderer/shallow';

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

const defaultComponent = <RemainingTodos todos={todos} />;

describe('<RemainingTodos />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("remaining in component should be equal to 1", () => {
    const { getByTestId } = render(defaultComponent);
    const remainingText = getByTestId("remaining-text");
    
    expect(remainingText).toBeInTheDocument();
    expect(remainingText).toHaveTextContent("Осталось: 1")
  })
})