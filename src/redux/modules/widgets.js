// action value
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const REMOVE = "bucket/REMOVE";
const COMPLETED = "bucket/COMPLETED";

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

export const completedWidget = (payload) => {
  return {
    type: COMPLETED,
    payload: payload,
  };
};

// initialState
const initialState = {
  list: [
    { text: "영화관 가기", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "수영 배우기", completed: false },
  ],
};

// reducer
const widgets = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return state;
    case CREATE: {
      const new_bucket_list = [...state.list, action.payload];
      return { list: new_bucket_list };
    }
    case REMOVE: {
      const new_bucket_list = state.list.filter((_, idx) => {
        return action.payload !== idx;
      });
      return { list: new_bucket_list };
    }
    case COMPLETED: {
      const new_bucket_list = state.list.map((bucket, index) => {
        if (parseInt(action.payload) === index) {
          return { ...bucket, completed: true };
        } else {
          return bucket;
        }
      });
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
};

export default widgets;
