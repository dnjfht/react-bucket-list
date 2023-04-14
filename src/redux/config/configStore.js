import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import widgets from "../modules/widgets";

const middlewares = [thunk];
// 미들웨어들도 하나로 묶어줘야 힘.

const rootReducer = combineReducers({
  widgets: widgets,
});

const enhancer = applyMiddleware(...middlewares);
// reducer 말고 옵셔널하게 추가하는 애들의 모음.
// 여기 미들웨어를 적용해 넣을 거임.

const store = createStore(rootReducer, enhancer);
export default store;
