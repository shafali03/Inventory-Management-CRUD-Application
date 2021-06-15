import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (form, history) => async (dispatch) => {
  try {
    // sign user in
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (form, history) => async (dispatch) => {
  try {
    // sign up the user
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
