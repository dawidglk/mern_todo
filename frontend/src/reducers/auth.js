import { authentication } from "../api";
import { loader } from "./loader";

const LOG_IN = "AUTH/LOG_IN";
const LOG_OUT = "AUTH/LOG_OUT";
const LOG_IN_ACCESS = "AUTH/ACCESS";

export const logInAction = (email, password) => (dispatch) => {
  dispatch(loader.add());

  //api
  authentication(email, password)
    .then((response) => {
      const { token } = response;

      dispatch(saveUserTokenAction(token));
      dispatch(accessLogInAction(true));
    })
    .catch(() => dispatch(accessLogInAction(false)))
    .finally(() => dispatch(loader.remove()));
};

export const logOutAction = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOG_OUT });
  dispatch(accessLogInAction(null));
};

const saveUserTokenAction = (token) => {
  localStorage.setItem("token", token);
  return {
    type: LOG_IN,
    token,
  };
};

const accessLogInAction = (access) => ({ type: LOG_IN_ACCESS, access });

const initialState = {
  isLogged: Boolean(localStorage.getItem("token")),
  token: localStorage.getItem("token"),
  access: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogged: true,
        token: action.token,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    case LOG_IN_ACCESS:
      return {
        ...state,
        access: action.access,
      };
    default:
      return state;
  }
};