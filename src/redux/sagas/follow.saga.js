import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import {
  getFollowListRequest,
  getFollowListSuccess,
  getFollowListFailure,
  followProductRequest,
  followProductSuccess,
  followProductFailure,
  unFollowProductRequest,
  unFollowProductSuccess,
  unFollowProductFailure,
} from "redux/slicers/follow.slice";

function* getFollowListSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.get("http://localhost:4000/follows", {
      params: {
        userId: userId,
        _expand: "comic",
      },
    });
    yield put(getFollowListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getFollowListFailure({ error: "Lỗi" }));
  }
}

function* followProductSaga(action) {
  try {
    const result = yield axios.post(
      "http://localhost:4000/follows",
      action.payload
    );
    yield put(followProductSuccess({ data: result.data }));
  } catch (e) {
    yield put(followProductFailure({ error: "Lỗi" }));
  }
}

function* unFollowProductSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`http://localhost:4000/follows/${id}`);
    yield put(unFollowProductSuccess({ id: id }));
  } catch (e) {
    yield put(unFollowProductFailure({ error: "Lỗi" }));
  }
}

export default function* followSaga() {
  yield takeEvery(getFollowListRequest.type, getFollowListSaga);
  yield takeEvery(followProductRequest.type, followProductSaga);
  yield takeEvery(unFollowProductRequest.type, unFollowProductSaga);
}
