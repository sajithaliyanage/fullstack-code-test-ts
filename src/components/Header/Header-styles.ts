import { styled } from '@mui/material/styles';
import { THEME_MODES } from '../../utils/common';

export const StyledDiv = styled('div')((theme) => ({
  display: 'flex',
  flexGrow: 1,
  minHeight: '64px',
  backgroundColor: theme.theme.palette.mode === THEME_MODES.DARK_MODE ? '#333' : '#F1F1F1',
  borderBottom: '2px solid #E5E5E5',
  [`& .MuiAppBar-root`]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  [`& .MuiTypography-root`]: {
    fontWeight: 600,
    textAlign: 'center',
    width: '100%',
  },
}));

export const StyledInnerDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));
