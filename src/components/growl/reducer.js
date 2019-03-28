import {GROWL_MESSAGE} from '../../types/growlTypes';

const initialState = {
  message: {
    text: 'hi'
  }
};

export function growlReducer(state = initialState, action) {
  switch (action.type) {
    case GROWL_MESSAGE:
      console.log(action);
      return { ...state, message: action.message };
    default:
      return state;
  }
}
