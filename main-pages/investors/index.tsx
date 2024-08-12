'use client';
import SignupNavbar from '@/components/common/signup-navbar';
import CardLeftImage from '@/components/common/card-left-image';
import CardRightImage from '@/components/common/card-right-image';
import CardBottom from '@/components/common/card-bottom';
import GetStarted from '@/components/home/get-started';
import Footer from '@/components/common/footer';
import { Typography } from '@/components/common/ui';

interface CardLeftImageData {
  image: string;
  h3: string;
  h5: string;
  h6: string;
}

const InvestorsPage: React.FC = () => {
  const tempData: CardLeftImageData[] = [
    {
      image: '/assets/images/investors-image-1.svg',
      h3: '',
      h5: 'Access to a Vast and Diverse Range of Startups',
      h6: "Explore a vast and diverse range of startups spanning various industries and sectors. Let's Connect provides a dedicated fully AI-powered platform for startups to showcase their businesses, giving you access to a wide array of investment opportunities. As an Investor, you have the freedom to explore and evaluate startups based on your investment preferences and objectives.",
    },
    {
      image: '/assets/images/investors-image-2.svg',
      h3: '',
      h5: 'Fully AI-powered Analytics, Advanced Search and Filtering Options',
      h6: "Streamline your investment search with our proprietary AI-powered analysis tools, advanced search and filtering options. Narrow down your search based on criteria such as industry focus, funding stage, geographic location and more, allowing you to pinpoint investment opportunities that match your specific investment criteria and preferences.",
    },
    {
      image: '/assets/images/investors-image-3.svg',
      h3: '',
      h5: 'Comprehensive Startup Profiles',
      h6: "Dive deep into detailed startup profiles that provide valuable insights into each opportunity. From market potential and competitive landscape to team expertise and traction, Let's Connect fully equips you with the information you need to conduct your due diligence and make informed investment decisions.",
    },
    {
      image: '/assets/images/investors-image-4.svg',
      h3: '',
      h5: 'Efficient Communication and Collaboration',
      h6: "Connect with Founders and initiate conversations directly through the platform. Let's Connect facilitates efficient communication and collaboration, enabling you to engage with Founders, ask questions and ultimately conduct due diligence, all within a secure and user-friendly environment.",
    },
    {
      image: '/assets/images/investors-image-5.svg',
      h3: '',
      h5: 'Exclusive Access to Investment Opportunities',
      h6: "Gain access to investment opportunities that are not available elsewhere. Let's Connect provides a platform for startups at various stages of growth, providing you exclusive access to potential investment opportunities and the chance to invest early in promising ventures.",
    },
    {
      image: '/assets/images/about-image-4.svg',
      h3: 'Are you ready to unlock a new world of investment opportunities? Join Let\'s Connect today!',
      h5: '',
      h6: '',
    },
  ];
  return (
    <>
      <SignupNavbar type={'founder'} />
      <Typography
        variant={'h3'}
        mt={5}
        textAlign="center"
      >
        Discover Your Next Investment Opportunities with Let&#39;s Connect
      </Typography>
      <Typography
        m={3}
        textAlign="center"
      >
        Let&#39;s Connect is your gateway to unlocking a world of innovative startups and
        promising ventures globally. Here is why you should join us:
      </Typography>
      <CardLeftImage data={tempData[0]} />
      <CardRightImage data={tempData[1]} />
      <CardLeftImage data={tempData[2]} />
      <CardRightImage data={tempData[3]} />
      <CardLeftImage data={tempData[4]} />
      <CardBottom data={tempData[5]} />
      <GetStarted />
      <Footer />
    </>
  );
};

export default InvestorsPage;
