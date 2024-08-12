'use client';
import {
  AppBar,
  Button,
  Box,
  styled,
  Stack,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const NavbarWrapper = styled(AppBar)(() => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  padding:"0 50px"
}));

const MenuWrapper = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MenuItemWrapper = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.info.light,
  display: 'block',
  fontWeight: '600',
  textTransform: 'none',
  padding: '6px 16px',

  [theme.breakpoints.down('lg')]: {
    padding: '6px 8px',
  },

  '&:hover': {
    opacity: '80%',
    textDecoration: 'underline'
  },
}));

const LogoImage = styled(Image)(({ theme }) => ({
  paddingLeft: '16px',
  [theme.breakpoints.down('lg')]: {
    width: '150px',
    height: '30px',
    paddingLeft: '0px',
  
    
  },
}));

const DrawerMenuIcon = styled(MenuIcon)(({ theme }) => ({
  display: 'none',
  paddingRight: '16px',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const DrawerListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const ButtonWrapper = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const DrawerListWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export {
  NavbarWrapper,
  MenuItemWrapper,
  MenuWrapper,
  LogoImage,
  DrawerMenuIcon,
  DrawerListItemButton,
  ButtonWrapper,
  DrawerListWrapper,
};
