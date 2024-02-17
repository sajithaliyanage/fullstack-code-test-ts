import { Typography } from '@mui/material';
import { StyledListItem } from './NoMoreData-styles';

const NoMoreData = (): JSX.Element => {
  return (
    <StyledListItem>
      <Typography variant="overline">-- No more users --</Typography>
    </StyledListItem>
  );
};

export default NoMoreData;
