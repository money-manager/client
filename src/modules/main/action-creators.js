import {
  INIT_PAGE,
  CLEAN_PAGE,
} from './action-types';


export const initPage = payload => {
  return {
    type: INIT_PAGE,
    payload,
  };
};

export const cleanPage = payload => {
  return {
    type: CLEAN_PAGE,
    payload,
  };
};
