import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const backgroundColors = {
  backgroundColor: '#7FB800',
};

const pulseAnimation = keyframes({
  '0%': { transform: 'scale(.1)', opacity: 0, ...backgroundColors },
  '50%': { opacity: 0.2, ...backgroundColors },
  '100%': { transform: 'scale(.4)', opacity: 0, ...backgroundColors },
});

export const StyledDiv = styled('div')(() => ({
  borderRadius: '50%',
  position: 'absolute',
  margin: 'auto auto',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 200,
  height: 200,
  '&:nth-of-type(1), &:nth-of-type(2)': {
    animation: `${pulseAnimation} 2s infinite`,
  },
  '&:nth-of-type(2)': {
    animationDelay: '.3s',
  },
  '&:nth-of-type(3)': {
    width: 15,
    height: 15,
    ...backgroundColors,
  },
}));

export const LoaderDiv = styled('div')(() => ({
  backgroundColor: '#ffffff',
  zIndex: 1,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}));
