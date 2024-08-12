'use client';
import { styled, Typography, Container, Grid } from '@mui/material';

const FeaturedTitle = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '0.8em',
  textAlign: 'center',
  marginBottom: '64px',
  color: '#A1AEBC',
  textTransform: 'uppercase',
  wordWrap: 'break-word',
}));

const ImageWrapper = styled(Grid)(() => ({
  margin: '50px auto',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
}));

export { FeaturedTitle, ImageWrapper };
