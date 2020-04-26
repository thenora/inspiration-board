import React from 'react';
import NewCardForm from '../NewCardForm';
import { render, cleanup } from '@testing-library/react'

describe(NewCardForm, () => {
  test('testing NewCardForm', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
        onInputChange={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});