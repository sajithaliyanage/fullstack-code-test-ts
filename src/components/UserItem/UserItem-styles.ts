import { ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItemText = styled(ListItemText)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& .MuiListItemText-primary': {
    fontWeight: 'bold',
  },
}));

export const avatarStyles = {
  width: 60,
  height: 60,
  marginRight: 2,
};
