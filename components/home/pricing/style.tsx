'use client';
import { Box, Typography, styled } from '@mui/material';

const PricingMainWrapper = styled(Box)(() => ({
  background: 'linear-gradient(90deg, #00DDFF 0%, #FF00D4 100%)',
}));

const PricingTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.light,
  textAlign: 'center',
}));

const PricingSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.light,
  textAlign: 'center',
  fontWeight: 400,
  fontSize: '1rem',
  marginBottom: '3rem',

  [theme.breakpoints.down('md')]: {
    marginBottom: '1.5rem',
  },
}));

const PricingBottomText = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.light,
  fontStyle: 'italic',
  textAlign: 'center',
  fontWeight: 400,
  fontSize: '1rem',
  width: '60%',
  padding: '0px auto',

  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
}));

export { PricingMainWrapper, PricingTitle, PricingSubTitle, PricingBottomText };
