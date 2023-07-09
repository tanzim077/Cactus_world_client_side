/*
 * Filename: /home/tanzim/WorkStation/showcase project/cactus-world/frontend/Cactus_world_client_side/src/features/slices/userSlice.jsx
 * Path: /home/tanzim/WorkStation/showcase project/cactus-world/frontend/Cactus_world_client_side
 * Created Date: Sunday, July 9th 2023, 2:36:19 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignInAPI, SignUpAPI } from "../../api/usersAPI/userAPI";

const initialState = {
  isLoading: false,
  error: null,
  users: [],
  user: {},
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await SignUpAPI(data);
      return response;
    } catch (error) {
      return rejectWithValue({ message: error.response.data.message });
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await SignInAPI(data);
      return response;
    } catch (error) {
      return rejectWithValue({ message: error.response.data.message });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
