import { takeLatest } from 'redux-saga/effects';

import {
  INIT_PAGE,
  CLEAN_PAGE,
} from './action-types';

function* initPage(action) {};

function* cleanPage(action) {};

export default function* mainSagas() {
  yield takeLatest(INIT_PAGE, initPage);
  yield takeLatest(CLEAN_PAGE, cleanPage);
};
