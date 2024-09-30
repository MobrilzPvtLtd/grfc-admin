import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createNewCategory = createAsyncThunk(
  "category/createNewCategory",
  async ({ formData, token }, { rejectWithValue }) => {
    console.log("Received formData in thunk:", formData);
    console.log("Received token in thunk:", token); // Check if token is received correctly
    try {
      const response = await api.addCategory(formData, token); // Ensure you're using the token
      return response.data; // Assuming response contains data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCategoryrSlice = createSlice({
  name: "category",
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
    [createNewCategory.pending]: (state) => {
      state.loading = true;
    },
    [createNewCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [createNewCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
