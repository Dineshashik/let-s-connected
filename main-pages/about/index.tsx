'use client';
import SignupNavbar from '@/components/common/signup-navbar';
import CardLeftImage from '@/components/common/card-left-image';
import CardRightImage from '@/components/common/card-right-image';
import CardBottom from '@/components/common/card-bottom';
import GetStarted from '@/components/home/get-started';
import Footer from '@/components/common/footer';
import { TypeH1 } from './style';

interface CardLeftImageData {
  image: string;
  h3: string;
  h5: string;
  h6: string;
}

const AboutPage: React.FC = () => {
  const tempData: CardLeftImageData[] = [
    {
      image: '/assets/images/about-image-1.svg',
      h3: '',
      h5: "The ultimate AI-powered revolutionary platform matching Investors with Startups.",
      h6: "At Let's Connect, we are all about empowerment, driven by our passion for facilitating connections between Founders and Investors with the power of AI, accelerating innovation by increasing the number of successful startups globally and offering Investors unique opportunities to invest in and benefit from startups’ success stories.",
    },
    {
      image: '/assets/images/about-image-2.svg',
      h3: '',
      h5: "Believing firmly in the transformative power of partnerships.",
      h6: "Let's Connect brings together Investors, Founders, Innovators and Visionaries. Whether you are a Founder seeking funding for your projects or an Investor scouting for new investment opportunities, eager to discover the next unicorn, our platform is designed to significantly facilitate connections that  fuel growth and drive innovation.",
    },
    {
      image: '/assets/images/about-image-3.svg',
      h3: '',
      h5: "At the core of Let's Connect's mission is a commitment to propelling Founders’ and Investors’ endeavors forward with the power of AI.",
      h6: "We firmly believe that by facilitating strong, strategic partnerships, we can increase the number of success stories worldwide and make a lasting impact on the startup ecosystem.",
    },
    {
      image: '/assets/images/about-image-4.svg',
      h3: "Together, let's build a world where great ideas flourish, partnerships thrive, and innovation knows no bounds.",
      h5: '',
      h6: '',
    },
  ];

  return (
    <>
      <SignupNavbar type={'founder'} />
      <TypeH1
        variant="h1"
        align="center"
      >
        Welcome to Let&#39;s Connect{' '}
      </TypeH1>
      <CardLeftImage data={tempData[0]} />
      <CardRightImage data={tempData[1]} />
      <CardLeftImage data={tempData[2]} />
      <CardBottom data={tempData[3]} />
      <GetStarted />
      <Footer />
    </>
  );
};

export default AboutPage;
