import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import TechListRedux from '~/components/TechListRedux';

import { addTech } from '~/store/modules/tech/actions';

jest.mock('react-redux');

describe('TechListRedux component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ['Node.js', 'React JS']
      })
    );

    const { getByText, getByTestId } = render(<TechListRedux />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('React JS'));
  });

  it('should add new tech', () => {
    const { getByText, getByTestId, getByLabelText } = render(
      <TechListRedux />
    );

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'React JS' } });
    fireEvent.submit(getByTestId('tech-form'));

    console.log(dispatch.mock.calls);

    expect(dispatch).toHaveBeenCalledWith(addTech('React JS'));
  });
});
