"use client";
import { Accordion, styled } from "@mui/material";

const AccordionWrapper = styled(Accordion)(() => ({
  boxShadow: "4px 8px 16px 0px #635BFF1A",
  border: "none",
  "&::before": {
    height: "0px",
  },
}));

export { AccordionWrapper };
