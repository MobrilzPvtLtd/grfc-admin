import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {vendorReport} from '../api'


export const fetchVendorReport = createAsyncThunk(
    "/account/vendor",
    async() => {
      const response = await vendorReport();
      return response.data;
    }
  );

export const VendorReportDetails = createSlice({
    name: "vendorReports",
    initialState: { data: null, loading: false, error:null},
    reducers: {},
    extraReducers: {
      // eslint-disable-next-line no-unused-vars
      [fetchVendorReport.pending]: (state, action) => {
        state.loading = true;
      },
      [fetchVendorReport.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
      [fetchVendorReport.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });