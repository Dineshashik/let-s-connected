'use client';
import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: inter.style.fontFamily,
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '19px',
            textTransform: 'none',
            color: '#425466',
            margin: '8px 0px',
            '@media (max-width:899px)': {
                fontSize: '14px',
            },
            '@media (max-width:599px)': {
                fontSize: '12px',
            },
        },
        h1: {
            fontSize: '4rem',
            fontWeight: 700,
            lineHeight: '4.8rem',
            '@media (max-width:1200px)': {
                fontSize: '3rem',
                lineHeight: '3.5rem',
            },
            '@media (max-width:899px)': {
                fontSize: '2.5rem',
                lineHeight: '2.5rem',
            },
            '@media (max-width:599px)': {
                fontSize: '1.5rem',
                lineHeight: '2rem',
            },
        },
        h2: {
            fontSize: '3.5rem',
            fontWeight: 600,
            lineHeight: '4.23rem',
            color: '#0A2540',
            '@media (max-width:1200px)': {
                fontSize: '3rem',
                lineHeight: '3.2rem',
            },
            '@media (max-width:899px)': {
                fontSize: '2rem',
                lineHeight: '2.5rem',
            },
            '@media (max-width:599px)': {
                fontSize: '1.5rem',
                lineHeight: '2rem',
            },

        },
        h3: {
            fontSize: '2.25rem',
            fontWeight: 600,
            lineHeight: '2.6rem',
            color: '#0A2540',
            '@media (max-width:899px)': {
                fontSize: '1.8rem',
                lineHeight: '2.25rem',
            },
            '@media (max-width:599px)': {
                fontSize: '1.3rem',
                lineHeight: '1.5rem',
            },
        },
        h4: {
            fontSize: '1.313rem',
            fontWeight: 600,
            lineHeight: '1.58rem',
            color: '#0A2540',
            '@media (max-width:899px)': {
                fontSize: '1rem',
                lineHeight: '1.2rem',
            },
            '@media (max-width:599px)': {
                fontSize: '12px',
                lineHeight: '1rem',
            },

        },
        h6: {
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: '1.21rem',
            color: '#0A2540',
            '@media (max-width:599px)': {
                fontSize: '12px',
                lineHeight: '1rem',
            },
        },
    },
    palette: {
        primary: {
            main: '#635BFF',
            light: '#2FB4F7'
        },
        secondary: {
            main: '#635BFF',
            light: '#425466'
        },
        info: {
            main: '#F6F9FC',
            light: '#FFFFFF'
        }
    },
});

export default theme;
