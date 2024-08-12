'use client';
import { styled, Stack, Box } from '@mui/material';

const IdeaCardWrapper = styled(Stack)(({ theme }) => ({
  padding: '3rem',
  borderRadius: '30px',
  marginTop: '3rem',
  backgroundColor: theme.palette.info.light,
  [theme.breakpoints.down('md')]: {
    marginTop: '0px',
    padding: '1.5rem',
  },

  '&:hover': {
    boxShadow: '4px 8px 16px 0px #635BFF1A',
  },
}));

const CardTextWrapper = styled(Box)(({ theme }) => ({
  marginTop: '24px !important',
}));

const IdeaIconWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #CFE2F4 0%, #F6F9FC 100%)',
  padding: '39px',
  borderRadius: '100px',
  marginBottom: '1.5rem',
  [theme.breakpoints.down('md')]: {
    padding: '28px',
  },
}));

export { IdeaCardWrapper, IdeaIconWrapper, CardTextWrapper };
