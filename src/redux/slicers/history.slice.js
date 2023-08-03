import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historyList: JSON.parse(localStorage.getItem("historyList")) || [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistoryRequest: (state, action) => {
      const { data } = action.payload;
      let newHistoryList = [...state.historyList];
      const existProductIndex = state.historyList.findIndex(
        (item) => item.productId === data.productId
      );
      if (existProductIndex !== -1) {
        const newProduct = {
          ...state.historyList[existProductIndex],
          chapterId: data.chapterId,
          chapterName: data.chapterName,
        };
        newHistoryList.splice(existProductIndex, 1, newProduct);
      } else {
        newHistoryList = [data, ...state.historyList];
      }

      localStorage.setItem("historyList", JSON.stringify(newHistoryList));
      state.historyList = newHistoryList;
    },
    deleteHistoryRequest: (state, action) => {
      const { productId } = action.payload;
      const newHistoryList = state.historyList.filter(
        (item) => item.productId !== productId
      );
      localStorage.setItem("historyList", JSON.stringify(newHistoryList));
      state.historyList = newHistoryList;
    },
  },
});

export const { addToHistoryRequest, deleteHistoryRequest } =
  historySlice.actions;

export default historySlice.reducer;
