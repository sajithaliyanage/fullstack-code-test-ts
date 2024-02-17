import { AppBar, Typography } from '@mui/material';

import { StyledDiv } from './Header-styles';

const Header = (): JSX.Element => {
  return (
    <StyledDiv>
      <AppBar position="relative" color="transparent" elevation={0}>
        <Typography variant="h6" noWrap component="div" align="center">
          Users
        </Typography>
      </AppBar>
    </StyledDiv>
  );
};

export default Header;
