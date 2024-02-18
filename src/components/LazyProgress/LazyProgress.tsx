import { LoaderDiv, StyledDiv } from './LazyProgress-styles';

export const LazyProgress = (): JSX.Element => {
  return (
    <LoaderDiv>
      <StyledDiv></StyledDiv>
      <StyledDiv></StyledDiv>
      <StyledDiv></StyledDiv>
    </LoaderDiv>
  );
};

export default LazyProgress;
