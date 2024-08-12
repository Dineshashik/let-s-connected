'use client';
import { Box, styled } from '@mui/material';
const IdeaCurveImageWrapper = styled(Box)(() => ({
  display: 'flex',
  position: 'absolute',
  width: '100%',
  top: '-1px',
}));
const IdeasMainWrapper = styled(Box)(() => ({
  // backgroundColor: '#DEEAF6',
  position: 'relative',
  paddingTop: '5%',
}));

export { IdeasMainWrapper, IdeaCurveImageWrapper };
