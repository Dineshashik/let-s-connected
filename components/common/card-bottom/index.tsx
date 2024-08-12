import React from "react";
import { Box, Stack, Theme, useMediaQuery } from "@mui/material";
import { ContainerWrapper, CustomButton, Typography } from "../ui";
import { ButtonWrapper } from "./style";
import { useRouter } from "next/navigation";

interface CardLeftImageData {
  image: string;
  h3: string;
}

const CardBottom: React.FC<{ data: CardLeftImageData }> = ({ data }) => {
  const router = useRouter();
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <ContainerWrapper>
      <Box
        sx={
          isTablet
            ? {
                backgroundColor: "#0A4F94",
                position: "relative",
                width: "100%",
                height: "305px",
              }
            : {
                position: "relative",
                width: "100%",
                height: "405px",
              }
        }
      >
        <Box
          sx={
            isTablet
              ? {
                  position: "absolute",
                  textAlign: "center",
                  alignItems: "center",
                  display: "flex",
                  height: "100%",
                }
              : {
                  position: "absolute",
                  top: "30%",
                  left: "5%",
                  width: "50%",
                  zIndex: 1,
                }
          }
        >
          <Typography variant={"h3"} color="white">
            {data.h3}
          </Typography>

          <ButtonWrapper direction="row" pr={{ md: 2 }} pt={{ md: 2 }}>
            <CustomButton
              color="transparent"
              variant="text"
              onClick={() => router.push("/signin")}
            >
              Login
            </CustomButton>
            <Stack justifyContent="center">
              <CustomButton
                color="white"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </CustomButton>
            </Stack>
          </ButtonWrapper>
        </Box>
        <Box
          sx={
            isTablet
              ? { display: "none", backgroundColor: "blue" }
              : {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${data.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  zIndex: 0,
                }
          }
        />
      </Box>
    </ContainerWrapper>
  );
};

export default CardBottom;
