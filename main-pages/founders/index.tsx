"use client";
import SignupNavbar from "@/components/common/signup-navbar";
import CardLeftImage from "@/components/common/card-left-image";
import CardRightImage from "@/components/common/card-right-image";
import CardBottom from "@/components/common/card-bottom";
import GetStarted from "@/components/home/get-started";
import Footer from "@/components/common/footer";
import { Typography } from "@/components/common/ui";

interface CardLeftImageData {
  image: string;
  h3: string;
  h5: string;
  h6: string;
}

const FoundersPage: React.FC = () => {
  const tempData: CardLeftImageData[] = [
    {
      image: "/assets/images/founders-image-1.svg",
      h3: "",
      h5: "Access to a Vast and Diverse Network of Investors",
      h6: "Connect with a diverse community of Investors eager to fuel innovative ventures like yours. Whether you are seeking seed funding or strategic partnerships, Let's Connect provides unparalleled access to a wide range of Investors with diverse expertise and investment preferences.",
    },
    {
      image: "/assets/images/founders-image-2.svg",
      h3: "",
      h5: "Showcase Your Ideas and Projects",
      h6: "Stand out from the crowd and attract Investor interest by showcasing your startup's unique ideas and projects. With the power of AI and fully customizable profiles, you can highlight your team's expertise, market potential, traction, and key milestones, effectively communicating why your startup is a promising investment opportunity.",
    },
    {
      image: "/assets/images/founders-image-3.svg",
      h3: "",
      h5: "Effortless Investor Discovery",
      h6: "Easily discover potential Investors who align with your startup's vision and objectives. Let's Connect offers intuitive search and filtering options, enabling you to identify Investors who are actively seeking opportunities in your industry or niche. With a user-friendly interface and comprehensive search functionality, finding the right Investors for your startup has never been easier.",
    },
    {
      image: "/assets/images/founders-image-4.svg",
      h3: "",
      h5: "Streamlined Fundraising Process",
      h6: "Say goodbye to endless emails, cold calls and fruitless networking events. Let's Connect streamlines your fundraising process, allowing you to efficiently connect with Investors who are genuinely interested in your startup. Find or be found by Investors utilizing specific filters based on criteria such as investment stage, industry focus, and geographic location, ensuring a targeted outreach and maximizing your chances of securing funding.",
    },
    {
      image: "/assets/images/about-image-4.svg",
      h3: "Are you ready to take your startup to new heights? Join Let's Connect today!",
      h5: "",
      h6: "",
    },
  ];
  return (
    <>
      <SignupNavbar type={"founder"} />
      <Typography variant={"h3"} mt={5} textAlign="center">
        Navigate the Path to Success of Your Startup with Let&#39;s Connect
      </Typography>
      <Typography m={3} textAlign="center">
        Let&#39;s Connect is here to serve as an ultimate launchpad for your startup’s
        success. Here’s why:
      </Typography>
      <CardLeftImage data={tempData[0]} />
      <CardRightImage data={tempData[1]} />
      <CardLeftImage data={tempData[2]} />
      <CardRightImage data={tempData[3]} />
      <CardBottom data={tempData[4]} />
      <GetStarted />
      <Footer />
    </>
  );
};

export default FoundersPage;
