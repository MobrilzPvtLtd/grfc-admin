import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersList } from "../api";  // Assuming you have a service to fetch users


// Async thunk to fetch the users list
export const fetchUsersList = createAsyncThunk(
  "fetchUsers/fetch",
  async () => {
    const response = await usersList();
    return response.data;
  }
);


// Create the UsersList slice
export const UsersListSlice = createSlice({
  name: "UsersDetails",
  initialState: {
    data: [],          // Prefer an empty array to avoid null-related issues
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersList.pending, (state) => {
        state.loading = true;
        state.error = null;  // Reset error on new request
      })
      .addCase(fetchUsersList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export default UsersListSlice.reducer;
