'use client';
import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

const InvestorsMainWrapper = styled(Box)(({ theme }) => ({
  // background: theme.palette.info.main,
  background: theme.palette.info.light,
  position: 'relative',
}));

const InvestorsImage = styled(Image)(() => ({
  top: '0px',
  left: '0px',
  objectFit: 'contain',
}));

const InvestorsImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  height: '300px',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const BoxImageTextWrapper = styled(Box)(({ theme }) => ({
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const InvestorsTextWrapper = styled(Box)(({ theme }) => ({
  padding: '20% 0px',
  width: '80%',
  [theme.breakpoints.down('md')]: {
    padding: '5% 0px 10% 0px',
    width: '100%',
  },
}));

const InvestorsImageLarge = styled(Image)(({ theme }) => ({
  // position: 'sticky',
  // top: '10%',
  width: '600px',
  height: '600px',
  [theme.breakpoints.down('lg')]: {
    width: '400px',
    height: '400px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const InvestorsVideoLarge = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: '10%',
  width: '600px',
  height: '600px',
  [theme.breakpoints.down('lg')]: {
    width: '400px',
    height: '400px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const InvestorsImageLargeBox = styled(Box)(({ theme }) => ({
  // position: 'sticky',
  // top: '10%',
  width: '730px',
  height: '600px',
  [theme.breakpoints.down('lg')]: {
    width: '400px',
    height: '400px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const InvestorsSmallVideo = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: '10%',
  width: '600px',
  height: '600px',
  marginRight: 'auto',
  marginLeft: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '300px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const InvestorsSmallImage = styled(Box)(({ theme }) => ({
  width: '630px',
  height: '600px',  
  marginRight: 'auto',
  marginLeft: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '330px',
    height: '300px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const TextWrapper = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));
export {
  InvestorsMainWrapper,
  InvestorsImage,
  InvestorsTextWrapper,
  InvestorsImageWrapper,
  InvestorsImageLarge,
  InvestorsImageLargeBox,
  TextWrapper,
  BoxImageTextWrapper,
  InvestorsVideoLarge,
  InvestorsSmallVideo,
  InvestorsSmallImage
};
