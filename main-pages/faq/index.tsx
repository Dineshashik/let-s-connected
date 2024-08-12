'use client';
import SignupNavbar from '@/components/common/signup-navbar';
import GetStarted from '@/components/home/get-started';
import Footer from '@/components/common/footer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, ContainerWrapper } from '@/components/common/ui';
import { AccordionSummary, AccordionDetails, Stack } from '@mui/material';
import { AccordionWrapper } from './style';

interface AccordionData {
  name: string;
  description: string;
}

const FaqPage = () => {
  const tempData: AccordionData[] = [
    {
      name: 'How does Let\'s Connect work?',
      description:
        'Let\'s Connect is an innovative matchmaking platform that aims to efficiently connect Founders and Investors globally. Founders have the ability to create comprehensive profiles where they can showcase their projects, upload supporting documents such as pitch presentations, business plans and more. Investors can search and explore these profiles by using various filters to find Founders that align with their specific investment criteria. Through Let\'s Connect, Founders and Investors can effortlessly connect, communicate, collaborate and cultivate successful partnerships.',
    },
    {
      name: 'Why is Let\'s Connect an ideal platform for Founders?',
      description:
        'Let\'s Connect presents Founders with a distinctive opportunity to enhance visibility, attract potential Investors, and broaden their network. By providing essential details such as project description, industry, funding stage and funding requirements, Founders can capture the attention of Investors and differentiate themselves effectively. Furthermore, Founders can also proactively search for Investors by using various filters and contact them directly on the platform.',
    },
    {
      name: 'Why is Let\'s Connect an ideal platform for Investors?',
      description:
        'Let\'s Connect offers Investors exclusive access to Founders worldwide across all industries. The platform offers advanced filtering capabilities, enabling Investors to refine their search based on their specific investment criteria and preferences. With Let\'s Connect, Investors can efficiently identify, assess, and connect with Founders, optimizing their investment endeavors while saving valuable time and resources.',
    },
    {
      name: 'Can Investors communicate directly with Founders on the platform, and vice versa?',
      description:
        'Yes, both Founders and Investors have the ability to initiate direct communication with each other directly through the Let\'s Connect platform. This direct communication process facilitates efficient interactions, allowing both Investors and Founders to ask questions, request additional information and express interest in potential partnership opportunities.',
    },
    {
      name: 'Will Founders have access to view other Founders on the platform, or will Investors be able to see other Investors?',
      description:
        'No, Let\'s Connect ensures the privacy of all users by implementing measures to prevent Founders from viewing other Founders and Investors from viewing other Investors on the platform. This strict separation between user types is maintained to safeguard sensitive information and maintain confidentiality. Founders can focus solely on showcasing their businesses to potential Investors, while Investors can concentrate on discovering and evaluating investment opportunities without concerns about visibility to competitors or peers.',
    },
    {
      name: 'Does Let\'s Connect assist Investors with Due Diligence or provide Investment Recommendations?',
      description:
        'No, Let\'s Connect does not provide assistance with Due Diligence to Investors, nor does the platform offer investment recommendations of any kind. The role of the Let\'s Connect platform is to provide comprehensive information and facilitate connections between Founders and Investors. It is the responsibility of Investors to conduct their own due diligence and make informed investment decisions based on their research, analysis and risk assessment.',
    },
    {
      name: 'Can Founders and Investors specify preferences for their matches?',
      description:
        'Yes, Founders and Investors have the flexibility to specify their preferences and criteria for their ideal matches on the Let\'s Connect platform. Both Founders and Investors can tailor their search criteria to find matches that best suit their investment or fundraising needs.',
    },
    {
      name: 'What types of Investors are on the Let\'s Connect platform?',
      description:
        'Let\'s Connect has a vast array of Investors among its subscribers, including angel investors, venture capitalists, corporate investors, family offices and HNWIs. This ensures that Founders have access to a broad spectrum of potential funding sources, each with unique investment preferences and expertise.',
    },
    {
      name: 'How does Let\'s Connect maintain quality standards for Founders and Investors on the platform?',
      description:
        'Let\'s Connect is dedicated to upholding the safety and integrity of its platform. All users undergo an approval process upon signing up, verifying their legitimacy as businesses. While Let\'s Connect takes measures to authenticate user profiles, including reviewing provided information, users are reminded to exercise due diligence and conduct their own assessments before entering into any transactions or partnerships. This commitment to verification and user empowerment helps foster a trustworthy and secure environment for all users.',
    },
    {
      name: 'What happens after a Founder and Investor connect on the platform?',
      description:
        'Once a connection is established between a Founder and an Investor on the Let\'s Connect platform, they can engage in further discussions, negotiations, and due diligence processes to assess the viability of a potential partnership. Let\'s Connect encourages open communication and collaboration between Founders and Investors to foster mutually beneficial relationships.',
    },
    {
      name: 'Is my information secure on the Let\'s Connect platform?',
      description:
        'At Let\'s Connect, safeguarding the security and confidentiality of your information is of highest importance. We employ industry-standard security protocols to protect your data against unauthorized access, loss or misuse. All data that you share is safeguarded within our secure platform.',
    },
    {
      name: 'Is there a mobile app available for the Let\'s Connect platform?',
      description:
        "Yes, in the near future, Let\'s Connect will offer a mobile app for both iOS and Android devices, providing users with convenient access to the platform's features and functionalities on the go. We will inform you as soon as the mobile app is available.",
    },
    {
      name: 'Is there a customer support team available to assist users?',
      description:
        'Yes, Let\'s Connect has a dedicated customer support team available to assist users with any inquiries, technical issues or concerns they may have.',
    },
    {
      name: 'How can users provide feedback or suggestions for improving the platform?',
      description:
        "Let\'s Connect values user feedback and actively encourages users to share their suggestions for improving the platform. Users can provide feedback via email or by submitting a respective contact form on the website. Additionally, Let\'s Connect periodically conducts surveys and user research to gather insights and suggestions for enhancing the platform's features, functionality and overall user experience and satisfaction.",
    },
  ];
  return (
    <>
      <SignupNavbar type={'founder'} />
      <ContainerWrapper>
        <Typography
          variant={'h3'}
          mt={5}
        >
          Frequently Asked Questions
        </Typography>
        <Stack
          spacing={2}
          mt={5}
        >
          {tempData.map((item, index) => (
            <AccordionWrapper
              elevation={0}
              key={index}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.description}</Typography>
              </AccordionDetails>
            </AccordionWrapper>
          ))}
        </Stack>
      </ContainerWrapper>

      <GetStarted />
      <Footer />
    </>
  );
};

export default FaqPage;
