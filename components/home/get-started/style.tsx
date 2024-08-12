'use client';
import { styled, Stack, Box } from '@mui/material';

const GetStartedWrapper = styled(Box)(() => ({
  position: 'relative',
  // backgroundColor: '#DEEAF6',
  // paddingBottom: '5%',
}));

const GetStartedButtonWrapper = styled(Stack)(() => ({
  marginTop: '1.5rem',
}));

const GetStartedCurveImageWrapper = styled(Box)(() => ({
  position: 'absolute',
  width: '100%',
  bottom: '-5px',
}));

export {
  GetStartedButtonWrapper,
  GetStartedWrapper,
  GetStartedCurveImageWrapper,
};
