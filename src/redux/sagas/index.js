import { fork } from "redux-saga/effects";

import productSaga from "./product.saga";
import chapterSaga from "./chapter.saga";
import categorySaga from "./category.saga";
import authSaga from "./auth.saga";
import reviewSaga from "./review.saga";
import orderSaga from "./order.saga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(productSaga);
  yield fork(chapterSaga);
  yield fork(categorySaga);
  yield fork(reviewSaga);
  yield fork(orderSaga);
}
