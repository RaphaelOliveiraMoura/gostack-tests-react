import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('TechList component', () => {
  it('should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText } = render(<TechList />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'React JS' } });
    fireEvent.submit(getByTestId('tech-form'));

    fireEvent.click(getByText('Adicionar'));

    expect(getByTestId('tech-list')).toContainElement(getByText('React JS'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });
});