import { combineReducers, createStore } from "redux";
import widgets from "../modules/widgets";

const rootReducer = combineReducers({
  widgets: widgets,
});
const store = createStore(rootReducer);
export default store;
