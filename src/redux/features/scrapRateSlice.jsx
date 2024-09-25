/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import * as api from "../api";

// asyncthunk for fetching scrap details
export const fetchScrap = createAsyncThunk("/scraprates", async () => {
  const response = await api.pricelist();
  return response?.data;
});

export const updateItemRate = createAsyncThunk(
  "orders/api/item-rate/",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await api.updateItem(id, formData);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// create the scrap details slice
export const scrapSlice = createSlice({
  name: "scrapDetails",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: {
    [fetchScrap.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchScrap.fulfilled]: (state, action) => {
      state.loading = false;
      // Exclude the non-serializable headers and config properties
      const { headers, config, ...serializableData } = action.payload;
      state.data = serializableData;
    },
    [fetchScrap.error]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateItemRate.pending]: (state, action) => {
      state.loading = true;
    },
    [updateItemRate.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action?.payload;
    },
    [updateItemRate.error]: (state, action) => {
      state.loading = false;
      state.data = { ...action.payload, headers: undefined };
    },
  },
});
