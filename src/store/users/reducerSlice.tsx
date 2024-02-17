import { createSlice } from '@reduxjs/toolkit';

import { getUsers } from './thunks';
import { UsersState } from '../../types/usersState';

const initialState: UsersState = {
  page: 1,
  pageSize: 10,
  users: [],
  noResults: false,
  pagination: {
    next: null,
    prev: null,
  },
  error: null,
  isBusy: false,
};

const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isBusy = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users =
          state.page !== 1 ? state.users.concat(action.payload.data) : action.payload.data;
        state.pagination = action.payload.pagination;
        state.isBusy = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isBusy = false;
      });
  },
});

export default usersReducer.reducer;
