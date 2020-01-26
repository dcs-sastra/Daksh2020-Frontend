import actions from '../actions/index';


export const userReducer = (state = { authStatus: false }, action) => {

  switch (action.type) {
    case actions.LOGIN:
      return { ...state, authStatus: true, data: action.data }
    case actions.AUTHSTATE:
      return { ...state, authStatus: action.data }
    case actions.LOGOUT:
      return { authStatus: false }
    default: return state;
  }
}
