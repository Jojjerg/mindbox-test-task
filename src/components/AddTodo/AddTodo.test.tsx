import React, { FormEvent } from 'react';
import { fireEvent, getAllByTestId, render, screen } from '@testing-library/react';

import AddTodo from './AddTodo';
import { ITodo } from '../../@types/todo';
import { act } from 'react-test-renderer';
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
    completed: false,
  },
];

const addTodo = (title: string) => {
  const newTodo: ITodo = {
    userId: Math.random(),
    id: Math.random(),
    title: title,
    completed: false,
  };
  
  todos.push(newTodo);

  return todos
};

const defaultComponent = <AddTodo addTodo={addTodo}/>;

describe('<AddTodo />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('add todo button is clickable', async () => {
    const { getByTestId } = render(defaultComponent);
    const addButton = getByTestId('add-button');

    await act(async () => {
      fireEvent.click(addButton);
    });

    expect(getByTestId('add-button')).toBeVisible();
  });

  it('a valid form data submit', async () => {
    const { getByTestId } = render(defaultComponent);

    expect(getByTestId('title-input')).toBeInTheDocument();
  });

  it("should add new todo", async () => {
    const { getByTestId } = render(defaultComponent);

    const input = getByTestId('title-input');
    const addButton = getByTestId('add-button');

    expect(input).toBeInTheDocument()
    expect(addButton).toHaveAttribute('disabled')

    await act(async () => {
      fireEvent.change(input, { target: { value: "walk dog" }});

      fireEvent.click(addButton)
    })
    
    expect(input).toHaveValue("walk dog");
    expect(addButton).not.toHaveAttribute('disabled')

    // addTodo("walk dog")
    // expect(todos.length).toEqual(3)
  })
})