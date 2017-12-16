import {
  INIT_PAGE,
  CLEAN_PAGE,
} from './action-types';

const initialState = {
  foo: 'bar',
};

export default function mainReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INIT_PAGE:
    case CLEAN_PAGE:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
