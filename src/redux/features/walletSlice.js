import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { wallet } from "../api";

export const customerWallet = createAsyncThunk("/transaction/wallet", async () => {
  const response = await wallet();
  return response;
});

export const walletListSlice = createSlice(
  {
  name: "walletDetails",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [customerWallet.pending]: (state, action) => {
      state.loading = true;
    },
    [customerWallet.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [customerWallet.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
}
);

export default walletListSlice.reducer;
