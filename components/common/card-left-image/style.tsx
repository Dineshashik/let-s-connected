"use client";
import { Padding } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

const TextWrapper = styled(Box)(({ theme }) => ({
  // paddingTop: "5rem",
  // paddingBottom: "5rem",
  paddingLeft: "5rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem !important",
  },
}));

const TypeH5 = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "43px",
  color: "#0A2540",
  marginBottom: "1rem",
  alignItems: "center",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 500,
    fontSize: "30px",
    lineHeight: "37px",
    textAlign: "center",
  },
}));

const TypeH6 = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#000000",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 300,
    fontSize: "10px",
    lineHeight: "13px",
    textAlign: "center",
  },
}));

export { TextWrapper, TypeH5, TypeH6 };
