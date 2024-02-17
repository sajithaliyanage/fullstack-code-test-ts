import { ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItem = styled(ListItem)(() => ({
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'absolute',
  margin: 'auto auto',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}));
