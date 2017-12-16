import { all } from 'redux-saga/effects';

import mainSagas from 'modules/main/sagas';

export default function* () {
  yield all([
    mainSagas(),
  ]);
};
