import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import TechListRedux from '~/components/TechListRedux';

jest.mock('react-redux');

describe('TechListRedux component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ['Node.js', 'React JS']
      })
    );

    const { getByText, getByTestId, debug } = render(<TechListRedux />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('React JS'));
  });
});
