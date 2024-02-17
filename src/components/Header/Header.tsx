import { AppBar, Typography } from '@mui/material';

import { StyledDiv, StyledInnerDiv } from './Header-styles';
import ThemeMode from '../ThemeMode';

const Header = (): JSX.Element => {
  return (
    <StyledDiv>
      <AppBar position="relative" color="transparent" elevation={0}>
        <StyledInnerDiv>
          <Typography variant="h6" noWrap component="div">
            Users
          </Typography>
          <ThemeMode />
        </StyledInnerDiv>
      </AppBar>
    </StyledDiv>
  );
};

export default Header;
