import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {vendorDetails} from '../api'


export const fetchUsersDetails = createAsyncThunk("/vendors/vendordetails",
    async (id, { rejectWithValue }) => {
      const response = await vendorDetails(id);
      return response.data;
    }
  );

export const UsersDetails = createSlice({
    name: "VendorDetailsWithId",
    initialState: { data: null, loading: false, error:null},
    reducers: {},
    extraReducers: {
      // eslint-disable-next-line no-unused-vars
      [fetchUsersDetails.pending]: (state, action) => {
        state.loading = true;
      },
      [fetchUsersDetails.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
      [fetchUsersDetails.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });