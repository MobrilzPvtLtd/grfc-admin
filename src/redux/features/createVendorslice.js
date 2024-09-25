import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const vendorInitialState = {
  name: "",
  email: "",
  phone_number: "",
  pincode: "",
  is_vendor: true,
  password: "",
};

export const createNewVendor = createAsyncThunk(
  "/accounts/vendors/",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.addvendor(formData?.FormData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addVendorSlice = createSlice({
  name: "vendor",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [createNewVendor.pending]: (state) => {
      state.loading = true;
    },
    [createNewVendor.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [createNewVendor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
