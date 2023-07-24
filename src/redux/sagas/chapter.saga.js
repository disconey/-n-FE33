import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  getChapterListRequest,
  getChapterListSuccess,
  getChapterListFailure,
  getChapterDetailRequest,
  getChapterDetailSuccess,
  getChapterDetailFailure,
} from "redux/slicers/chapter.slice";

function* getChapterListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:4000/chapters");
    yield put(getChapterListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getChapterListFailure("Đã có lỗi xảy ra!"));
  }
}
function* getChapterDetailSaga(action) {
  try {
    const { id } = action.payload || {};

    const result = yield axios.get(`http://localhost:4000/chapters/${id}`);
    yield put(getChapterDetailSuccess({ data: result.data }));
  } catch (e) {
    yield put(getChapterDetailFailure("Đã có lỗi xảy ra!"));
  }
}

export default function* chapterSaga() {
  yield takeEvery(getChapterListRequest.type, getChapterListSaga);
  yield takeEvery(getChapterDetailRequest.type, getChapterDetailSaga);
}
