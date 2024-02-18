import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, PaletteOptions } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { RootState } from '../../store/store';
import { updateTheme } from '../../store/theme/reducerSlice';
import { StyledDiv } from './ThemeMode-styles';
import { THEME_MODES } from '../../utils/common';

const ThemeMode = (): JSX.Element => {
  const dispatch = useDispatch<ThunkDispatch<RootState, object, Action<string>>>();
  const themeMode: PaletteOptions = useSelector((state: RootState) => state.theme.palette);

  const changeThemeHandler = (): void => {
    dispatch(updateTheme());
  };

  return (
    <StyledDiv>
      <IconButton onClick={() => changeThemeHandler()} color="inherit">
        {themeMode.mode === THEME_MODES.DARK_MODE ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </StyledDiv>
  );
};

export default ThemeMode;
