import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  followList: {
    data: [],
    loading: false,
    error: null,
  },
  followProductData: {
    loading: false,
    error: null,
  },
  unFollowProductData: {
    loading: false,
    error: null,
  },
};

export const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    // getFollowList
    getFollowListRequest: (state, action) => {
      state.followList.loading = true;
      state.followList.error = null;
    },
    getFollowListSuccess: (state, action) => {
      const { data } = action.payload;
      state.followList.loading = false;
      state.followList.data = data;
    },
    getFollowListFailure: (state, action) => {
      const { error } = action.payload;
      state.followList.loading = false;
      state.followList.error = error;
    },
    // followProduct
    followProductRequest: (state, action) => {
      state.followProductData.loading = true;
      state.followProductData.error = null;
    },
    followProductSuccess: (state, action) => {
      state.followProductData.loading = false;
    },
    followProductFailure: (state, action) => {
      const { error } = action.payload;
      state.followProductData.loading = false;
      state.followProductData.error = error;
    },
    // unFollowProduct
    unFollowProductRequest: (state, action) => {
      state.unFollowProductData.loading = true;
      state.unFollowProductData.error = null;
    },
    unFollowProductSuccess: (state, action) => {
      state.unFollowProductData.loading = false;
    },
    unFollowProductFailure: (state, action) => {
      const { error } = action.payload;
      state.unFollowProductData.loading = false;
      state.unFollowProductData.error = error;
    },
  },
});

export const {
  getFollowListRequest,
  getFollowListSuccess,
  getFollowListFailure,
  followProductRequest,
  followProductSuccess,
  followProductFailure,
  unFollowProductRequest,
  unFollowProductSuccess,
  unFollowProductFailure,
} = followSlice.actions;

export default followSlice.reducer;
