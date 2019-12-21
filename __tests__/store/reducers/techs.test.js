import reducer, { INITIAL_STATE } from '~/store/modules/tech/reducer';
import * as Techs from '~/store/modules/tech/actions';

describe('Techs reducer', () => {
  it('ADD_TECH', () => {
    const state = reducer(INITIAL_STATE, Techs.addTech('React JS'));

    expect(state).toStrictEqual(['React JS']);
  });
});
