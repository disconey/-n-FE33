import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
  getProductDetailRequest,
  getProductDetailSuccess,
  getProductDetailFailure,
} from "redux/slicers/product.slice";

function* getProductListSaga(action) {
  try {
    const { categoryId, page, limit, sort, statusId, keyword } =
      action.payload || {};
    const sortData = sort && {
      _sort: sort.split(".")[0],
      _order: sort.split(".")[1],
    };

    const result = yield axios.get(`http://localhost:4000/comics`, {
      params: {
        _embed: ["chapters", "reviews", "follows"],
        _expand: ["category", "status"],
        _page: page,
        _limit: limit,
        statusId: statusId,
        categoryId: categoryId,
        ...sortData,
        q: keyword,
      },
    });
    yield put(
      getProductListSuccess({
        data: result.data,
        meta: {
          page: page,
          limit: limit,
          total: parseInt(result.headers["x-total-count"]),
        },
      })
    );
  } catch (e) {
    yield put(getProductListFailure("Đã có lỗi xảy ra!"));
  }
}
function* getProductDetailSaga(action) {
  try {
    const { id, page, limit } = action.payload || {};

    const result = yield axios.get(`http://localhost:4000/comics/${id}`, {
      params: {
        _expand: ["category", "status"],
        _embed: ["chapters", "follows", "reviews"],
        _page: page,
        _limit: limit,
      },
    });
    yield put(
      getProductDetailSuccess({
        data: result.data,
        meta: {
          page: page,
          limit: limit,
          total: parseInt(result.headers["x-total-count"]),
        },
      })
    );
  } catch (e) {
    yield put(getProductDetailFailure("Đã có lỗi xảy ra!"));
  }
}

export default function* productSaga() {
  yield takeEvery(getProductListRequest.type, getProductListSaga);
  yield takeEvery(getProductDetailRequest.type, getProductDetailSaga);
}
