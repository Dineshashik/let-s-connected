import { CustomButton } from '@/components/common/ui';

const InvestorsData = [
  {
    // id: 0,
    // title:
    //   'Join a Vibrant and Growing Community of Investors and Founders',
    // details:
    //   'Join a growing community of investors and founders, connect with the unique ecosystem,build strong business relationships and foster collaboration and innovation for a brighter founderial future.',
    // imageUrl: '/assets/images/investor-entr.svg',
    type: (
      <>
        <CustomButton
          color="skyblue"
          xsWidth="80%"
          mdWidth="60%"
          lgWidth="45%"
        >
          Apply Now as Investor
        </CustomButton>
        <CustomButton
          color="blue"
          xsWidth="80%"
          mdWidth="70%"
          lgWidth="55%"
        >
          Apply Now as Founder
        </CustomButton>
      </>
    ),
  },
  {
    // id: 1,
    // title: 'For Investors',
    // details:
    //   'Discover founders that match your preferences. Utilize advanced filters to find your ideal match, access relevant project details for informed decisions and connect with preferred founders to form strategic partnerships.',
    // imageUrl: '/assets/images/investor.svg',
    type: (
      <CustomButton
        color="skyblue"
        xsWidth="80%"
        mdWidth="60%"
        lgWidth="45%"
      >
        Apply Now as Investor
      </CustomButton>
    ),
  },
  {
    // id: 2,
    // title: 'For Founders',
    // details:
    //   'Present your vision to a wide range of potential investors seeking promising projects. Use our intuitive platform with advanced search functions and filters to connect with investors who align with your goals. Provide project details, funding amount and purpose to drive your idea forward with strategic partnerships.',
    // imageUrl: '/assets/images/founders.svg',
    type: (
      <CustomButton
        color="blue"
        xsWidth="80%"
        mdWidth="70%"
        lgWidth="60%"
      >
        Apply Now as Founder
      </CustomButton>
    ),
  },
];

export { InvestorsData };
