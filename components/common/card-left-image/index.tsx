import React from "react";
import { Grid, Box } from "@mui/material";
import { TextWrapper, TypeH5, TypeH6 } from "./style";
import { ContainerWrapper } from "../ui";
import Image from "next/image";

interface CardLeftImageData {
  image: string;
  h5: string;
  h6: string;
}

const CardLeftImage: React.FC<{ data: CardLeftImageData }> = ({ data }) => {
  return (
    <ContainerWrapper>
      <Grid container spacing={2}>
        {/* Left Side (Image) */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              // boxShadow: 2,
              borderRadius: "24px",
              float: "left",
            }}
          >
            <Image
              src={data.image}
              alt="Your Image"
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "auto",
              }}
              width={100}
              height={100}
            />
          </Box>
        </Grid>
        {/* Right Side (Text) */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <TextWrapper>
            <TypeH5 variant="h5">{data.h5}</TypeH5>
            <TypeH6 variant="h6">{data.h6}</TypeH6>
          </TextWrapper>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
};

export default CardLeftImage;
