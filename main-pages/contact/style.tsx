"use client";
import theme from "@/theme";
import { styled, Stack } from "@mui/material";

const CardWrapper = styled(Stack)(() => ({
  padding: "24px",
  boxShadow: "4px 8px 16px 0px #635BFF1A",
  border: "1px solid #DEEAF6",
  borderRadius: "30px",
  position: "relative",
  margin: "8px 16px",
  height: "68%",
  alignItems: "space-between",
  [theme.breakpoints.down("md")]: {
    padding: "16px",
  },
}));

const FormWrapper = styled("form")(({ theme }) => ({
  margin: "36px",
  [theme.breakpoints.down("md")]: {
    margin: "16px",
  },
}));

export { CardWrapper, FormWrapper };
