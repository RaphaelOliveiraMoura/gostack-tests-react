import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('TechList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText } = render(<TechList />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'React JS' } });
    fireEvent.submit(getByTestId('tech-form'));

    expect(getByTestId('tech-list')).toContainElement(getByText('React JS'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });

  it('should store techs in storage', () => {
    let { getByText, getByTestId, getByLabelText } = render(<TechList />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'React JS' } });
    fireEvent.submit(getByTestId('tech-form'));

    cleanup();

    ({ getByText, getByTestId, getByLabelText } = render(<TechList />));

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'techs',
      JSON.stringify(['React JS'])
    );
    expect(getByTestId('tech-list')).toContainElement(getByText('React JS'));
  });
});
