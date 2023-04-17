import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

// action value
// firestore에서 데이터를 가져오기 위해서.
const LOAD = "bucket/LOAD";

const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const REMOVE = "bucket/REMOVE";
const COMPLETED = "bucket/COMPLETED";
const LOADED = "bucket/LOADED";

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

export const is_loaded = (payload) => {
  return {
    type: LOADED,
    payload: payload,
  };
};

// middlewares
export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db, "bucket"));
    console.log(bucket_data);

    let bucket_list = [];

    bucket_data.forEach((doc) => {
      console.log(doc.data());
      bucket_list.push({ id: doc.id, ...doc.data() });
    });

    console.log(bucket_list);

    dispatch(loadWidgets(bucket_list));
  };
};

export const addBucketFB = (payload) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "bucket"), payload);
    const _bucket = await getDoc(docRef);
    const bucket = { id: _bucket.id, ..._bucket.data() };
    dispatch(createWidget(bucket));

    // 추가한 데이터 중 id를 가져와서 bucket_data 만들기.
    // const bucket_data = { id: docRef.id, ...payload };
    // // 마지막으로 액션 일으키기 (수정해달라고 요청)
    // dispatch(createWidget(bucket_data));
  };
};

export const updateBucketFB = (payload) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "bucket", payload);
    await updateDoc(docRef, { completed: true });

    // completedWidget에서 bucket_index를 필요로 했으므로 여기서도 bucket_index를 구해야 함.
    // bucketList 싹 다 가져와야 함. => 두 번째 인자로 넣을 수 있는 getState 이용.

    console.log(getState().widgets);
    const _bucket_list = getState().widgets.list;
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === payload;
    });

    console.log(bucket_index);

    dispatch(completedWidget(bucket_index));
  };
};

export const deleteBucketFB = (payload) => {
  return async function (dispatch, getState) {
    if (!payload) {
      window.alert("ID가 없어요!");
      return;
    }
    const deleteRef = doc(db, "bucket", payload);
    await deleteDoc(deleteRef);

    // completedWidget에서 bucket_index를 필요로 했으므로 여기서도 bucket_index를 구해야 함.
    // bucketList 싹 다 가져와야 함. => 두 번째 인자로 넣을 수 있는 getState 이용.

    console.log(getState().widgets);
    const _bucket_list = getState().widgets.list;
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === payload;
    });

    console.log(bucket_index);

    dispatch(removeWidget(bucket_index));
  };
};

// initialState
const initialState = {
  is_loaded: false,
  list: [
    { text: "영화관 가기", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "수영 배우기", completed: false },
  ],
};

// reducer
const widgets = (state = initialState, action) => {
  switch (action.type) {
    // 파이어스토어에서 넘어온 데이터를 그대로 넣어주는 역할.
    case LOAD: {
      return { list: action.payload, is_loaded: true };
    }
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
