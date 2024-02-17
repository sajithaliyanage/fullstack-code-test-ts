import { createSlice } from '@reduxjs/toolkit';
import { THEME_MODES } from '../../utils/common';
import { ThemeState } from '../../types/themeState';

const initialState: ThemeState = {
  palette: {
    mode: THEME_MODES.LIGHT_MODE,
  },
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state) => {
      state.palette.mode =
        state.palette.mode === THEME_MODES.LIGHT_MODE
          ? THEME_MODES.DARK_MODE
          : THEME_MODES.LIGHT_MODE;
    },
  },
});

export const { updateTheme } = themeReducer.actions;

export default themeReducer.reducer;
