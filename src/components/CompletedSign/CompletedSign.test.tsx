import { render, screen } from '@testing-library/react';

import CompletedSign from './CompletedSign';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

const renderer = createRenderer();

const defaultComponent = <CompletedSign />;

describe('<CompletedSign />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(defaultComponent)
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
})