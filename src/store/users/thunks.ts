import axios from 'axios';
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';

import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { UserData } from '../../types/usersState';
import { RootState } from '../store';
import { wait } from '../../utils/common';
import { getAPIErrorMessage } from '../../utils/error';

export const getUsers: AsyncThunk<UserData, void, AsyncThunkConfig> = createAsyncThunk(
  'users/getUsers',
  async (_: void, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const { page, pageSize, isScrolled } = state.users;

      // Thunk delays for 2 seconds only if data is being loaded when scrolling,
      // to allow time for the UI to display skeleton loading component.
      if (isScrolled) {
        await wait(2000);
      }
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}&per_page=${pageSize}`
      );
      const responseData = response.data;
      responseData.totalPages = responseData.total_pages;
      return responseData;
    } catch (error) {
      return rejectWithValue(getAPIErrorMessage(error));
    }
  }
);
