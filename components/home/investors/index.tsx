import CustomCarousel from "@/components/common/carousel";
import CustomerCard from "@/components/common/customer-card";
import { ContainerWrapper, CustomButton } from "@/components/common/ui";
import { getVibrant } from "@/utils/apiDefinition";
import { api } from "@/utils/axiosInstance";
import { Box, Stack, Typography } from "@mui/material";
import {
  useMotionValueEvent,
  useScroll,
  useTransform
} from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  BoxImageTextWrapper,
  InvestorsImageLargeBox,
  InvestorsMainWrapper,
  InvestorsSmallImage,
  InvestorsTextWrapper,
  TextWrapper
} from "./style";

interface DataType {
  title: string;
  details: string;
  imageUrl: string;
  type: React.ReactNode;
}

const Investors = () => {
  const router = useRouter();
  const [investorContent, setInvestorContent] = useState<any>();
  const [active, setActive] = useState(0);
  const section = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: section,
  });

  const scrollSectionValue: any = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0, 1, 3]
  );
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActive(Math.floor(scrollSectionValue.current));
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res: any = await api.get(getVibrant);
        if (res.data) {
          res.data.section1["image"]["static_image_url"] =
            "/assets/images/investors_and_founders_img.png";
          res.data.section2["content"] = {
            header: "For Founders",
            description:
              "Create a profile, upload your pitch deck and let our AI analyze your data. Receive automated suggestions to improve your pitch and find the perfect match for your startup.",
            buttonText: "For Founders",
            redirectPath: "/founders",
            properties: [
              {
                title: "Create your Profile",
                imgPath: "/assets/icon/createProfile.svg",
              },
              {
                title: "Upload your Pitch Deck",
                imgPath: "/assets/icon/uploadPitchDeck.svg",
              },
              {
                title: "Let our AI analyze your Data",
                imgPath: "/assets/icon/aiIcon.svg",
              },
              {
                title: "Receive Improvement Suggestions for your Pitch",
                imgPath: "/assets/icon/improvementSuggestion.svg",
              },
              {
                title: "Find the Perfect Match",
                imgPath: "/assets/icon/findMatch.svg",
              },
            ],
          };
          res.data.section3["content"] = {
            header: "For Investors",
            description:
              "Create a profile, set your investment preferences and swipe through Startup profiles. Review AI-powered analytics and find the perfect match for your investment.",
            buttonText: "For Investors",
            redirectPath: "/investors",
            properties: [
              {
                title: "Create your Profile",
                imgPath: "/assets/icon/createProfile.svg",
              },
              {
                title: "Set your Investment Preferences",
                imgPath: "/assets/icon/investmentPreference.svg",
              },
              {
                title: "Swipe through Startup Profiles",
                imgPath: "/assets/icon/swipeProfile.svg",
              },
              {
                title: "Review AI-powered Startup Analytics",
                imgPath: "/assets/icon/reviewAi.svg",
              },
              {
                title: "Find the Perfect Match",
                imgPath: "/assets/icon/findMatch.svg",
              },
            ],
          };
          setInvestorContent(res.data);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
    fetchData();
  }, []);

  const handleInvestorClick = () => {
    router.push(`/signup?role=INVESTOR`);
  };

  const handleFounderClick = () => {
    router.push(`/signup?role=FOUNDER`);
  };

  const InvestorsData = [
    {
      type: (
        <>
          <CustomButton
            color="gradient"
            xsWidth="80%"
            mdWidth="60%"
            lgWidth="45%"
            onClick={handleInvestorClick}
          >
            Apply Now as Investor
          </CustomButton>
          <CustomButton
            color="gradient"
            xsWidth="80%"
            mdWidth="70%"
            lgWidth="55%"
            onClick={handleFounderClick}
          >
            Apply Now as Founder
          </CustomButton>
        </>
      ),
    },
    {
      type: (
        <CustomButton
          color="skyblue"
          xsWidth="80%"
          mdWidth="60%"
          lgWidth="45%"
          onClick={handleInvestorClick}
        >
          For Investors
        </CustomButton>
      ),
    },
    {
      type: (
        <CustomButton
          color="blue"
          xsWidth="80%"
          mdWidth="60%"
          lgWidth="45%"
          onClick={handleFounderClick}
        >
          For Founders
        </CustomButton>
      ),
    },
  ];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const InvestorsContentData = [
    investorContent?.section2,
    investorContent?.section3,
  ];

  // useEffect(() => {
  //   const videoURL = InvestorsContentData[active]?.image?.image_url;
  //   if (videoRef.current && active === 0) {
  //     const source = document.createElement('source');
  //     source.setAttribute('src', videoURL);
  //     source.setAttribute('type', 'video/mp4');
  //     videoRef.current.appendChild(source);
  //     videoRef.current.play();
  //   }
  // }, [videoURL, active]);

  return (
    <InvestorsMainWrapper ref={section} sx={{ position: "relative" }}>
      <Box>
        <ContainerWrapper>
          <Stack direction={{ xs: "column", md: "row" }} pl={2} pr={2}>
            {/* This Elements correponds to animations, for time being we are using images, Later will switch to animations, at that time need to use this */}
            {/* <BoxImageTextWrapper>
              {InvestorsContentData.map((data, index) => (
                <div key={index}>
                  {data?.image?.image_url && (
                    <motion.div
                      initial={{ opacity: 0.5, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      // transition={{ duration: 3 }}
                      key={index}
                    >
                      <InvestorsSmallVideo>
                        <video
                          width="100%"
                          height="100%"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source
                            src={data?.image?.image_url}
                            type="video/mp4"
                          />
                        </video>
                      </InvestorsSmallVideo>
                    </motion.div>
                  )}
                  <InvestorsTextWrapper>
                    <TextWrapper variant="h2">{data?.heading_text}</TextWrapper>
                    <TextWrapper
                      px={{ xs: 1, sm: 1, md: 0 }}
                      width={{ md: "80%", lg: "70%" }}
                    >
                      {data?.sub_text}
                    </TextWrapper>
                    <Stack
                      alignItems={{ xs: "center", md: "start" }}
                      direction={{ xs: "column", lg: "row" }}
                      spacing={2}
                      mt={4}
                    >
                      {InvestorsData[index].type}
                    </Stack>
                  </InvestorsTextWrapper>
                </div>
              ))}
            </BoxImageTextWrapper>
            {InvestorsContentData.map((data, index) => {
              return (
                index === active && (
                  <motion.div
                    initial={{ opacity: 0.5, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    key={index}
                  >
                    <InvestorsVideoLarge>
                      <video
                        width="100%"
                        height="100%"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={data?.image?.image_url} type="video/mp4" />
                      </video>
                    </InvestorsVideoLarge>
                  </motion.div>
                )
              );
            })} */}
            {/* </InvestorsImageWrapper> */}
            <BoxImageTextWrapper>
              <InvestorsSmallImage>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={investorContent?.section1?.image?.static_image_url}
                    alt="investors and founders img"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </InvestorsSmallImage>
              <InvestorsTextWrapper>
                <TextWrapper variant="h2">
                  {investorContent?.section1?.heading_text}
                </TextWrapper>
                <TextWrapper
                  px={{ xs: 1, sm: 1, md: 0 }}
                  width={{ md: "80%", lg: "70%" }}
                >
                  {investorContent?.section1?.sub_text}
                </TextWrapper>
                <Stack
                  alignItems={{ xs: "center", md: "start" }}
                  direction={{ xs: "column", lg: "row" }}
                  spacing={2}
                  mt={4}
                >
                  {InvestorsData[0].type}
                </Stack>
              </InvestorsTextWrapper>
            </BoxImageTextWrapper>
            <InvestorsImageLargeBox>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <Image
                  src={investorContent?.section1?.image?.static_image_url}
                  alt="investors and founders img"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </InvestorsImageLargeBox>
          </Stack>
          <CustomCarousel totalItems={2}>
            {InvestorsContentData.length > 0 ? (
              InvestorsContentData.map((item: any) => (
                <React.Fragment key={item?._id}>
                  <CustomerCard data={item?.content} key={item?._id} />
                </React.Fragment>
              ))
            ) : (
              <Typography variant="h6">No Project Found</Typography>
            )}
          </CustomCarousel>
        </ContainerWrapper>
      </Box>
    </InvestorsMainWrapper>
  );
};

export default Investors;
