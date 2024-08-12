'use client';
import { Card, Box, Stack, styled, Typography } from '@mui/material';

const PricingCardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.info.light,
  borderRadius: '50px',
  margin: '8px 16px',
  minHeight:'calc(100% - 8px)'
}));

const TypeTextWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.info.light,
  boxShadow: '4px 8px 64px 0px #00000029',
  borderRadius: '0px 0px 30px 30px',
  marginLeft: '10%',
  marginRight: '10%',
  marginBottom: '2rem',
}));

const TypeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  margin: '12px 0px',
}));

const PricingTopSection = styled(Stack)(({ theme }) => ({
  background: 'linear-gradient(180deg, #DEEAF6 50%, #FFFFFF 100%)',
  paddingBottom: '2rem',
}));

const PricingDetailsWrapper = styled(Stack)(({ theme }) => ({
  padding: '1.5rem 2rem',
}));

export {
  PricingCardWrapper,
  TypeTextWrapper,
  PricingTopSection,
  TypeText,
  PricingDetailsWrapper,
};
