import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (stage, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action?.date);
    default:
      break;
  }
};

export default authReducer;
