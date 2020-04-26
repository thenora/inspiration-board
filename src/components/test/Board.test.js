import React from 'react';
import Board from '../Board';
import { render, cleanup } from '@testing-library/react'

describe('Board', () => {

  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName="nora-antonia"
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});