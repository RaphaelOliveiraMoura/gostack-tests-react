import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '~/services/api';

import { getTechsSuccess, getTechsFailure } from '~/store/modules/tech/actions';
import { getTechs } from '~/store/modules/tech/sagas';

const apiMock = new MockAdapter(api);

describe('Techs saga', () => {
  it('should be able to fetch techs', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/techs').reply(200, ['React JS']);

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['React JS']));
  });

  it('should  fail when api return a error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/techs').reply(500);

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsFailure());
  });
});
