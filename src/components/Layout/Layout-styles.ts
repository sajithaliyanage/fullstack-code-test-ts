import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
}));

export const StyledChildContainer = styled(Container)(() => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
