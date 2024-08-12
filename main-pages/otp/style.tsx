'use client';
import { Box, Card, Stack, Typography, styled } from '@mui/material';
import Link from 'next/link';

const OtpPageWrapper = styled(Box)(() => ({
  position: 'relative',
  background: 'linear-gradient(90deg, #00DDFF 0%, #FF00D4 100%)',
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const PricingCardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.info.light,
  borderRadius: '50px',
  margin: 'auto auto',
  minHeight: 'calc(100% - 8px)',
  maxWidth: '540px',
}));

const PricingTopSection = styled(Stack)(({ theme }) => ({
  background: 'linear-gradient(180deg, #DEEAF6 50%, #FFFFFF 100%)',
  paddingBottom: '2rem',
}));
const TypeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  margin: '12px 0px',
}));

const TypeTextWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.info.light,
  boxShadow: '4px 8px 64px 0px #00000029',
  borderRadius: '0px 0px 30px 30px',
  marginLeft: '10%',
  marginRight: '10%',
  marginBottom: '2rem',
}));

const RadioButtonWrapper = styled(Stack)(({ theme }) => ({
  boxShadow: '4px 8px 16px 0px #635BFF1A',
  border: '1px solid #DEEAF6',
}));

const FormWrapper = styled('form')(({ theme }) => ({
  margin: '36px',
  [theme.breakpoints.down('md')]: {
    margin: '16px',
  },
}));

const ForgotPasswordText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'absolute',
  right: '0',
  bottom: '-29px',
}));

const LinkWrapper = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: '600',
  textDecoration: 'none',
}));

const ResendOtp = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: '600',
  textDecoration: 'none',
  cursor: 'pointer',
}));

export {
  OtpPageWrapper,
  PricingCardWrapper,
  TypeText,
  PricingTopSection,
  TypeTextWrapper,
  RadioButtonWrapper,
  FormWrapper,
  ForgotPasswordText,
  LinkWrapper,
  ResendOtp,
};
