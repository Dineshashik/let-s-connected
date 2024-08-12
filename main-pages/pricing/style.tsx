'use client';
import { Box, Typography, styled } from '@mui/material';

const HeaderWrapper = styled(Box)(() => ({
  position: 'relative',
  // background: 'linear-gradient(182.9deg, #FF00D4 -62.29%, #00DDFF 156.97%)',
  backgroundImage: `url('/assets/images/signup-bg.svg')`,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: "100vw",
}));

const PricingTitleWrapper = styled(Typography)(({ theme }) => ({
  fontSize: '56px',
  fontWeight: '600',
  lineHeight: '67.77px',
  color: theme.palette.info.light,
  [theme.breakpoints.down('md')]: {
    fontSize: '36px',
  },
}));

const PricingSubTitleWrapper = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '21px',
  color: theme.palette.info.light,
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
}));

export { HeaderWrapper, PricingTitleWrapper, PricingSubTitleWrapper };
