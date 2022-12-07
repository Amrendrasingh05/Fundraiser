import { combineReducers } from "redux";
import user from "./user";
import event from "./event";
import product from "./product";



export default combineReducers({
  user,
  event,
  product
});
