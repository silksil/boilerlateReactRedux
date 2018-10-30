import { FETCH_DUMMY } from '../types';

export default function(state = '', action) {
  switch (action.type) {
    case FETCH_DUMMY:
      return action.payload;
    default:
      return state;
  }
}
