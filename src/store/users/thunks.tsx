import axios from 'axios';
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';

import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { RequestProps, UserData } from '../../types/usersState';

export const getUsers: AsyncThunk<UserData, RequestProps, AsyncThunkConfig> = createAsyncThunk(
  'users/getUsers',
  async ({ page, pageSize }: RequestProps, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}&per_page=${pageSize}`
      );
      const responseData = response.data;
      if (responseData.total > page * pageSize) {
        responseData.pagination = {
          next: page + 1,
          prev: page > 1 ? page - 1 : null,
        };
      } else {
        responseData.pagination = {
          next: null,
        };
      }
      return responseData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
