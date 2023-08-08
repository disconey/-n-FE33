import { createSlice } from "@reduxjs/toolkit";
import qs from "qs";
import { light } from "themes";

const locationSearch = qs.parse(window.location.search, {
  ignoreQueryPrefix: true,
});
const initialState = {
  theme: light,
  filterParams: {
    categoryId: locationSearch.categoryId
      ? locationSearch.categoryId.map((id) => parseInt(id))
      : [],
    keyword: locationSearch.keyword || "",
    sort: locationSearch.sort || undefined,
    status: locationSearch.statusId || undefined,
    chapter: locationSearch.chapterId || undefined,
  },
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      const { theme } = action.payload;
      state.theme = theme;
    },
    setFilterParams: (state, action) => {
      state.filterParams = action.payload;
    },
    clearFilterParams: (state) => {
      state.filterParams = {
        categoryId: [],
        keyword: "",
        sort: undefined,
      };
    },
  },
});

export const { setTheme, clearFilterParams, setFilterParams } =
  commonSlice.actions;

export default commonSlice.reducer;
