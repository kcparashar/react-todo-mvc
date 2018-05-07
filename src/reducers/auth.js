import {
  SIGN_IN,
  SIGN_OUT,
} from '../constants/ActionTypes'

const INITIAL_STATE = {
  uid: null
};

function auth(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SIGN_IN : 
      return {
          uid: action.uid 
      }

    case SIGN_OUT:
      return INITIAL_STATE;

    default:
      return state
  }
}

export default auth;

