import { Stack, styled } from "@mui/material";

const ButtonWrapper = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export { ButtonWrapper };
