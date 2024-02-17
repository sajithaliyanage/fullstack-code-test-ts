import { Cancel as CancelIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { StyledListItem } from './NoResults-styles';

const NoResults = (): JSX.Element => {
  return (
    <StyledListItem>
      <CancelIcon fontSize="large" />
      <Typography variant="overline">-- No users found --</Typography>
    </StyledListItem>
  );
};

export default NoResults;
