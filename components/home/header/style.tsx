'use client';
import { Box, Container, styled, Typography } from '@mui/material';
import Image from 'next/image';

const HeaderWrapper = styled(Box)(() => ({
  position: 'relative',
  backgroundImage: 'url("/assets/images/hero2.webp")',
  backgroundSize: 'cover', // Ensures the image covers the entire area
  backgroundPosition: 'center', // Centers the image
  backgroundRepeat: 'no-repeat', // Prevents the image from repeating
  backgroundColor: 'rgba(0, 0, 0, 0.9)',

  // background: 'linear-gradient(182.9deg, #FF00D4 -62.29%, #00DDFF 156.97%)',
   // Add dark overlay
  //  '&::before': {
  //   content: '""',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity for darker/lighter effect
  //   // zIndex: 1,
  // },

  // // Ensure that the content inside HeaderWrapper is above the overlay
  // '& > *': {
  //   position: 'relative',
  //   // zIndex: 1,
  // }
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.light,
  // wordBreak: "break-word"
  wordWrap: 'break-word',
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 600,
  lineHeight: '30px',
  wordWrap: 'break-word',
  // wordBreak: "break-word"
  color: theme.palette.info.light,
  margin: '36px 0px',
  [theme.breakpoints.down('md')]: {
    lineHeight: '20px',
  },
}));

const TitleWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  width: '60%',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    width: '100%',
  },
}));

const MainWrapper = styled(Container)(({ theme }) => ({
  paddingTop: '80px',
  paddingBottom: '15%',
  [theme.breakpoints.down('md')]: {
    paddingBottom: '60px',
    paddingTop: '0px',
  },
}));

const HeaderImage = styled(Image)(({ theme }) => ({
  objectFit: 'contain',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
}));

const HeaderCurveImageWrapper = styled(Box)(({ theme }) => ({
  display: 'block',
  position: 'absolute',
  width: '100%',
  bottom: '-5px',
}));

export {
  Title,
  SubTitle,
  HeaderWrapper,
  MainWrapper,
  TitleWrapper,
  HeaderImage,
  HeaderCurveImageWrapper,
};
