import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { notification } from "antd";

import {
  getOrderListRequest,
  getOrderListSuccess,
  getOrderListFailure,
  orderProductRequest,
  orderProductSuccess,
  orderProductFailure,
} from "redux/slicers/order.slice";

function* getOrderListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:4000/orders");
    yield put(getOrderListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getOrderListFailure({ error: "Lỗi" }));
  }
}

function* orderProductSaga(action) {
  try {
    const { data } = action.payload;
    const result = yield axios.post("http://localhost:4000/orders", data);
    yield notification.success({ message: "Thanh toán thành công" });
    yield put(orderProductSuccess({ data: result.data }));
  } catch (e) {
    yield put(orderProductFailure({ error: "Lỗi" }));
  }
}

export default function* orderSaga() {
  yield takeEvery(getOrderListRequest.type, getOrderListSaga);
  yield takeEvery(orderProductRequest.type, orderProductSaga);
}
