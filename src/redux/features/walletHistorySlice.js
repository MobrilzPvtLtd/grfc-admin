import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { walletHistory } from "../api";

export const transWalletHistory = createAsyncThunk("transactions/wallet-history/", async (formData,{ rejectWithValue }) => {
  const response = await walletHistory(formData);
  return response;
});

export const walletHistorySlice = createSlice(
  {
  name: "walletHistory",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [walletHistory.pending]: (state, action) => {
      state.loading = true;
    },
    [walletHistory.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [walletHistory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
}
);

export default walletHistorySlice.reducer;
