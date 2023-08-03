import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chapterList: {
    data: [],
    loading: false,
    error: null,
  },
  chapterDetail: {
    data: {},
    loading: false,
    error: null,
  },
};

export const chapterSlice = createSlice({
  name: "chapter",
  initialState,
  reducers: {
    getChapterListRequest: (state, action) => {
      state.chapterList.loading = true;
      state.chapterList.error = null;
    },
    getChapterListSuccess: (state, action) => {
      const { data } = action.payload;
      state.chapterList.loading = false;
      state.chapterList.data = data;
    },
    getChapterListFailure: (state, action) => {
      const { error } = action.payload;
      state.chapterList.loading = false;
      state.chapterList.error = error;
    },
    getChapterDetailRequest: (state, action) => {
      state.chapterDetail.loading = true;
      state.chapterDetail.error = null;
    },
    getChapterDetailSuccess: (state, action) => {
      const { data } = action.payload;
      state.chapterDetail.loading = false;
      state.chapterDetail.data = data;
    },
    getChapterDetailFailure: (state, action) => {
      const { error } = action.payload;
      state.chapterDetail.loading = false;
      state.chapterDetail.error = error;
    },
    // updateChapter
    updateChapterDetailRequest: (state, action) => {
      state.chapterDetail.loading = true;
      state.chapterDetail.error = null;
    },
    updateChapterDetailSuccess: (state, action) => {
      const { data } = action.payload;
      state.chapterDetail.loading = false;
      state.chapterDetail.data = { ...state.chapterDetail.data, ...data };
    },
    updateChapterDetailFailure: (state, action) => {
      const { error } = action.payload;
      state.chapterDetail.loading = false;
      state.chapterDetail.error = error;
    },
    clearChapterRequest: (state) => {
      state.chapterDetail.data = {};
    },
  },
});

export const {
  getChapterListRequest,
  getChapterListSuccess,
  getChapterListFailure,
  getChapterDetailRequest,
  getChapterDetailSuccess,
  getChapterDetailFailure,
  updateChapterDetailRequest,
  updateChapterDetailSuccess,
  updateChapterDetailFailure,
  clearChapterRequest,
} = chapterSlice.actions;

export default chapterSlice.reducer;
