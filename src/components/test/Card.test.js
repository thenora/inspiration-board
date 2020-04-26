import React from 'react';
import Card from '../Card';
import { render, cleanup } from '@testing-library/react'

describe('Card', () => {
  test('card loads properly', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        text="howdy"
        emojiName=""

      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});
