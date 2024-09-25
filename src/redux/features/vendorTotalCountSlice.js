import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { totalCount } from '../api'


export const fetchVendorCount = createAsyncThunk(
    "/accounts/users-count",
    async() => {
      const response = await totalCount();
      return response.data;
    }
  );

export const VendorCountDetails = createSlice({
    name: "vendorCounts",
    initialState: { data: null, loading: false, error:null},
    reducers: {},
    extraReducers: {
      // eslint-disable-next-line no-unused-vars
      [fetchVendorCount.pending]: (state, action) => {
        state.loading = true;
      },
      [fetchVendorCount.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
      [fetchVendorCount.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });