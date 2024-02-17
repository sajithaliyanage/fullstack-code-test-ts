import { ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItemText = styled(ListItemText)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& .MuiListItemText-primary': {
    fontWeight: 'bold',
    fontSize: 16,
  },
}));

export const avatarStyles = {
  width: 80,
  height: 80,
  marginRight: 2,
};
