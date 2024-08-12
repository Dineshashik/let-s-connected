'use client';
import { styled, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const MenuTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
}));
const MenuItemText = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  marginTop: '20px',
  cursor: 'pointer',
  '&:hover': {
    opacity: '70%',
    textDecoration: 'underline',
  },
}));

const InstaIcon = styled(InstagramIcon)(({ theme }) => ({
  marginLeft: '2rem',
  cursor: 'pointer',
  color: theme.palette.secondary.light,
  [theme.breakpoints.down('md')]: {
    margin: '0px 8px',
  },
  '&:hover': {
    opacity: '70%',
  },
}));
const YoutubeIcon = styled(YouTubeIcon)(({ theme }) => ({
  marginLeft: '2rem',
  color: theme.palette.secondary.light,
  [theme.breakpoints.down('md')]: {
    margin: '0px 8px',
  },
  '&:hover': {
    opacity: '70%',
  },
}));
const TwitIcon = styled(TwitterIcon)(({ theme }) => ({
  marginLeft: '2rem',
  color: theme.palette.secondary.light,
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    margin: '0px 8px',
  },
  '&:hover': {
    opacity: '70%',
  },
}));
const FacebookIcon = styled(FacebookRoundedIcon)(({ theme }) => ({
  marginLeft: '2rem',
  cursor: 'pointer',
  color: theme.palette.secondary.light,
  [theme.breakpoints.down('md')]: {
    margin: '0px 8px',
  },
  '&:hover': {
    opacity: '70%',
  },
}));

const FooterDeatilsText = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export {
  MenuTitle,
  MenuItemText,
  FacebookIcon,
  InstaIcon,
  YoutubeIcon,
  TwitIcon,
  FooterDeatilsText,
};
