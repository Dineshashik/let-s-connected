import { Stack, Grid, Box, Typography } from "@mui/material";
import { ContainerWrapper } from "../ui";
import Image from "next/image";
import { FooterMenuData } from "./data";
import {
  MenuTitle,
  MenuItemText,
  InstaIcon,
  FacebookIcon,
  YoutubeIcon,
  TwitIcon,
  FooterDeatilsText,
} from "./style";
import { useEffect, useState } from "react";
import { api } from "@/utils/axiosInstance";
import { getFooter } from "@/utils/apiDefinition";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const [footerContent, setFooterContent] = useState<any>();
  useEffect(() => {
    async function fetchFooter() {
      try {
        const response = await api.get<any>(getFooter);
        if (response.success) {
          setFooterContent(response.data);
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Somthing went wrong");
      }
    }

    fetchFooter();
  }, []);

  return (
    <ContainerWrapper>
      <Stack
        direction={{ xs: "column", md: "row" }}
        pl={{ xs: 2, md: 2, lg: 2 }}
        pr={{ xs: 2, md: 2, lg: 2 }}
        spacing={10}
      >
        <Stack
          width={{ xs: "100%" }}
          direction="column"
          alignItems={{ xs: "center", md: "start" }}
        >
          <Image
            // src="/assets/icon/logo.svg"
            src="/assets/images/letsconnect-gradient.svg"
            alt="logo"
            width={192}
            height={30}
          />
          <FooterDeatilsText width={{ xs: "80%", md: "70%" }} mt={2}>
            {footerContent?.section2?.about_company}
            {/* Matchudo, developed by Oakstreet27 Partners, is a business
            matchmaking platform dedicated to fostering connections between
            founders and investors in the Middle East in a new and innovative
            way. */}
          </FooterDeatilsText>
        </Stack>
        <Grid container sx={{ marginLeft: "40%" }} spacing={{ md: 2 }}>
          {FooterMenuData.map((item) => (
            <Grid item xs={6} md={6} key={item.id} gap={3}>
              <Stack
                direction="column"
                alignItems={{ xs: "center", md: "end" }}
              >
                <Box>
                  <MenuTitle variant="h6">{item.title}</MenuTitle>
                  {item.menuItem.map((text) => (
                    <MenuItemText
                      key={text.name}
                      onClick={() => router.push(text.link)}
                    >
                      {text.name}
                    </MenuItemText>
                  ))}
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Stack
        pl={{ xs: 2, md: 2, lg: 2 }}
        pr={{ xs: 2, md: 2, lg: 2 }}
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginTop: "5rem" }}
      >
        <Typography>© 2024 Let&#39;s Connect. All Rights Reserved.</Typography>
        <Box mt={{ xs: 2, md: 0 }}>
          <InstaIcon
            onClick={() => window.open(footerContent?.section2?.social_media?.instagram, '_blank')}
          />
          <FacebookIcon
            onClick={() => window.open(footerContent?.section2?.social_media?.facebook, '_blank')}
          />
          <YoutubeIcon
            onClick={() => window.open(footerContent?.section2?.social_media?.youtube, '_blank')}
          />
          <TwitIcon
            onClick={() => window.open(footerContent?.section2?.social_media?.twitter, '_blank')}
          />
        </Box>
      </Stack>
    </ContainerWrapper>
  );
};

export default Footer;
