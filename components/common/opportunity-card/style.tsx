'use client';
import { Box, Card, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';

const OpportunityCardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.info.light,
  boxShadow: '4px 8px 16px 0px #635BFF1A',
  borderRadius: '24px',
  margin: '16px 16px',
}));

const OpportunityCardImage = styled(Image)(({ theme }) => ({
  borderRadius: '16px 16px 0px 0px',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  objectFit: 'cover',
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  height: '230px',
  position: 'relative',
  border: '8px solid white',
}));

const LocationText = styled(Typography)(({ theme }) => ({
  marginBottom: '0px',
  marginLeft: '8px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: 400,
  color: theme.palette.secondary.light,
}));

const CardBottomTextWrapper = styled(Stack)(({ theme }) => ({
  borderTop: '1px solid #DEEAF6',
  marginTop: '24px',
}));

const TextWrapper = styled(Stack)(({ theme }) => ({
  marginTop: '16px',
  width: '50%',
  justifyContent: 'center',
}));

export {
  LocationText,
  ImageWrapper,
  OpportunityCardImage,
  OpportunityCardWrapper,
  CardBottomTextWrapper,
  TextWrapper,
};
