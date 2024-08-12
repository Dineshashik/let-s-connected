'use client';
import { styled, Stack, Box, Typography } from '@mui/material';
import Image from 'next/image';

const CardWrapper = styled(Stack)(({ theme }) => ({
  padding: '72px 48px',
  boxShadow: '4px 8px 16px 0px #635BFF1A',
  border: '1px solid #DEEAF6',
  borderRadius: '30px',
  position: 'relative',
  margin: '8px 16px',
  background:"#F6F9FC",
  height: '68%',
  alignItems: 'space-between',
  [theme.breakpoints.down('sm')]: {
    padding: '48px 24px',
  },
}));

const IconWrapper = styled(Box)(() => ({
  background: 'linear-gradient(135deg, #CFE2F4 0%, #F6F9FC 100%)',

  padding: '39px',
  borderRadius: '100px',
}));

const CardBadge = styled(Image)(() => ({
  position: 'absolute',
  top: '-8px',
  left: '-8px',
}));

const CardTitle = styled(Typography)(() => ({
  textAlign: 'center',
  marginTop: '24px',
  marginBottom: '14px',
  
}));

export { CardTitle, CardBadge, CardWrapper, IconWrapper };
