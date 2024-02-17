import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './users/reducerSlice';
import themeReducer from './theme/reducerSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
