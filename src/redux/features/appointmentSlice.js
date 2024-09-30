import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api'; // Assuming your API helper is set up for backend requests

// Initial state
const initialState = {
  appointments: [],
  loading: false,
  error: null,
};

// Async thunk for fetching appointments (GET request)
export const fetchAppointments = createAsyncThunk(
  'appointments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAppointments(); // Assumes you have this in your API helper
      console.log(response, "response from slice file")
      return response.data; // Assuming the response contains a data field with appointments
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    // You can add synchronous actions here if needed (e.g., updating status, filtering, etc.)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appointmentsSlice.reducer;
