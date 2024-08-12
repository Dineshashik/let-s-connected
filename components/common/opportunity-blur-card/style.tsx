'use client';
import { Box, Card, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';

const OpportunityCardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.info.light,
  boxShadow: '4px 8px 16px 0px #635BFF1A',
  borderRadius: '24px',
  margin: '16px 16px',
  paddingBottom:'25px'
}));

const OpportunityCardImage = styled(Image)(({ theme }) => ({
  borderRadius: '16px 16px 0px 0px',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  objectFit: 'cover',
  filter: 'blur(15px)',
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  height: '230px',
  position: 'relative',
  border: '8px solid white',
}));


const BlurImageIconWrapper=styled(Image)(({ theme }) => ({
  height:'220px',
  width:'320px',
  borderRadius: '100px',
  position:'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  [theme.breakpoints.down('md')]: {
    height: '120px',  // Adjust the height for mobile
    width: '120px',   // Adjust the width for mobile
  },
  [theme.breakpoints.down('sm')]: {
    height: '120px',  // Adjust the height for mobile
    width: '120px',   // Adjust the width for mobile
  },
}));

const BoxWrapper=styled(Box)(({ theme }) => ({
  borderRadius:'10px',
  padding:'15px',
  width:'90%',
  border: '1px solid #DEEAF6',
  margin:'auto',
 
}));
export {
  ImageWrapper,
  OpportunityCardImage,
  OpportunityCardWrapper,
  BlurImageIconWrapper,
  BoxWrapper
};
