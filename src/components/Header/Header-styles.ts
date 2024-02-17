import { styled } from '@mui/material/styles';

export const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '64px',
  backgroundColor: '#F1F1F1',
  borderBottom: '2px solid #E5E5E5',
  [`& .MuiTypography-root`]: {
    fontWeight: 600,
  },
}));
