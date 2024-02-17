import { createSlice } from '@reduxjs/toolkit';

import { getUsers } from './thunks';
import { UsersState } from '../../types/usersState';

const initialState: UsersState = {
  page: 1,
  pageSize: 10,
  users: [],
  noResults: false,
  error: null,
  isBusy: false,
  isMoreLoading: true,
  isScrolled: false,
};

const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updatePagination: (state) => {
      state.page += 1;
      state.isScrolled = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isBusy = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users =
          state.page !== 1 ? state.users.concat(action.payload.data) : action.payload.data;
        state.isMoreLoading = state.page !== action.payload.totalPages;
        state.isScrolled = false;
        state.isBusy = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isBusy = false;
        state.isScrolled = false;
      });
  },
});

export const { updatePagination } = usersReducer.actions;
export default usersReducer.reducer;
