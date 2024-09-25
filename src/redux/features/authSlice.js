import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const loginAdmin = createAsyncThunk(
  "/login/1",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.login(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logoutAdmin = createAsyncThunk(
  "/accounts/admin-logout",
  async ({ rejectWithValue }) => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const response = await api.logout(authToken);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
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
    [loginAdmin.pending]: (state) => {
      state.loading = true;
    },
    [loginAdmin.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [loginAdmin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [logoutAdmin.pending]: (state) => {
      state.loading = true;
    },
    [logoutAdmin.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [logoutAdmin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default authSlice.reducer;
