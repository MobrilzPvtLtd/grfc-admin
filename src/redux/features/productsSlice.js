/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import {
    createSlice,
    createAsyncThunk,
    isRejectedWithValue,
  } from "@reduxjs/toolkit";
  import * as api from "../api";
  
  // asyncthunk for fetching scrap details
  export const fetchProcuct = createAsyncThunk("/products", async () => {
    const response = await api.getProducts();
    return response?.data;
  });
  
//   export const updateItemRate = createAsyncThunk(
//     "orders/api/item-rate/",
//     async ({ id, formData }, { rejectWithValue }) => {
//       try {
//         const response = await api.updateItem(id, formData);
//       } catch (e) {
//         return rejectWithValue(e);
//       }
//     }
//   );
  
  // create the scrap details slice
  export const productSlice = createSlice({
    name: "productDetails",
    initialState: { data: null, loading: false, error: null },
    reducers: {},
    extraReducers: {
      [fetchProcuct.pending]: (state, action) => {
        state.loading = true;
      },
      [fetchProcuct.fulfilled]: (state, action) => {
        state.loading = false;
        // Exclude the non-serializable headers and config properties
        const { headers, config, ...serializableData } = action.payload;
        state.data = serializableData;
      },
      [fetchProcuct.error]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    //   [updateItemRate.pending]: (state, action) => {
    //     state.loading = true;
    //   },
    //   [updateItemRate.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.data = action?.payload;
    //   },
    //   [updateItemRate.error]: (state, action) => {
    //     state.loading = false;
    //     state.data = { ...action.payload, headers: undefined };
    //   },
    },
  });
  