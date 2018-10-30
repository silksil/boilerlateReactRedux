import { FETCH_DUMMY } from '../types';

export const fetchDummy = () => async dispatch => {
    const res = 'Redux is working';

    dispatch({ type: FETCH_DUMMY, payload: res });
};
