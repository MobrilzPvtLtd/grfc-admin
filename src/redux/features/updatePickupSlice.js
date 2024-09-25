/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import {
  createSlice,
  createAsyncThunk,
  applyMiddleware,
} from "@reduxjs/toolkit";
import * as api from "../api";

export const orderInitialData = {
  pickup_id: "",
  vendor_id: "",
  order_request_items: [{ items_id: "", quantity: "" }],
};

export const paySuccessful = createAsyncThunk(
  "orders/order/",
  async ({data,id}, { rejectWithValue }) => {
    try {
      const response = await api.paySuccess(data,id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const payTransact = createAsyncThunk(
  "orders/Transaction/",
  async ({data}, { rejectWithValue }) => {
    try {
      const response = await api.payTransaction(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const pickupUpdate = createAsyncThunk(
  "orders/api/pickup-requests/",
  async ({ id, updateData }, { rejectWithValue }) => {
    const authToken = localStorage.getItem("AuthToken");
    try {
      const response = await api.updatePickupRequest(id, updateData, authToken);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addOrder = createAsyncThunk(
  "orders/order/",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await api.createOrder(formData);
      return response;
    } catch (e) {
      return rejectWithValue(e?.response?.data);
    }
  }
);
const pickupSlice = createSlice({
  name: "pickupUpdate",
  initialState: {
    data: null,
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pickupUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(pickupUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
      })
      .addCase(pickupUpdate.rejected, (state, action) => {
        state.loading = false;
        state.data = { ...action.payload, headers: undefined };
      })
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
        state.data = { ...action.payload, headers: undefined };
      });
  },
});

export default pickupSlice.reducer;
