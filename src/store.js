import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import productReducer from "redux/slicers/product.slice";
import chapterReducer from "redux/slicers/chapter.slice";
import categoryReducer from "redux/slicers/category.slice";
import commonReducer from "redux/slicers/common.slice";
import authReducer from "redux/slicers/auth.slice";
import reviewReducer from "redux/slicers/review.slice";
import historyReducer from "redux/slicers/history.slice";
import orderReducer from "redux/slicers/order.slice";

import rootSaga from "redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    product: productReducer,
    chapter: chapterReducer,
    category: categoryReducer,
    common: commonReducer,
    auth: authReducer,
    review: reviewReducer,
    history: historyReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
