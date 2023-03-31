// action value
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const REMOVE = "bucket/REMOVE";

// action creator
export const loadWidgets = (payload) => {
  return {
    type: LOAD,
    payload: payload,
  };
};

export const createWidget = (payload) => {
  return {
    type: CREATE,
    payload: payload,
  };
};

export const updateWidget = (payload) => {
  return {
    type: UPDATE,
    payload: payload,
  };
};

export const removeWidget = (payload) => {
  return {
    type: REMOVE,
    payload: payload,
  };
};

// initialState
const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// reducer
const widgets = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return state;
    case CREATE:
      const new_bucket_list = [...state.list, action.payload];
      return { list: new_bucket_list };
    default:
      return state;
  }
};

export default widgets;
