import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { users } from "../api";

export const customerDetails = createAsyncThunk("/users", async () => {
  const response = await users();
  return response;
});

export const customerListSlice = createSlice(
  {
  name: "customers",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [customerDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [customerDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [customerDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
}
);

export default customerListSlice.reducer;
