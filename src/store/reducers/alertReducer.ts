import { SET_ALERT, AlertState, AlertAction } from '../types';

const initialState: AlertState = {
  message: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: AlertAction) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};
