import React from 'react';
import { StyledChildContainer, StyledContainer } from './Layout-styles';
import Footer from '../Footer';
import Header from '../Header';

const Layout = (props: { children: React.ReactElement }): JSX.Element => {
  return (
    <StyledContainer maxWidth="md">
      <Header />
      <StyledChildContainer>{props.children}</StyledChildContainer>
      <Footer />
    </StyledContainer>
  );
};

export default Layout;
