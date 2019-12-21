import { runSaga } from 'redux-saga';
import { getTechsSuccess } from '~/store/modules/tech/actions';
import { getTechs } from '~/store/modules/tech/sagas';

describe('Techs saga', () => {
  it('should be able to fetch techs', async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['React JS']));
  });
});
