import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { createTheme, PaletteOptions } from '@mui/material';
import { Theme } from '../types/themeState';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { setTheme } from '../store/theme/reducerSlice';

const useTheme = (): Theme => {
  const palette: PaletteOptions = useSelector((state: RootState) => state.theme.palette);
  const dispatch = useDispatch<ThunkDispatch<RootState, object, Action<string>>>();

  useEffect(() => {
    const theme: string | null = localStorage.getItem('THEME');
    if (theme) {
      dispatch(setTheme({ theme }));
    }
  }, [dispatch]);

  return createTheme({
    palette,
  });
};

export default useTheme;
