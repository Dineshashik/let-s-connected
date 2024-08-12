import { ContainerWrapper, CustomButton } from '@/components/common/ui';
import { Typography, Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  GetStartedButtonWrapper,
  GetStartedWrapper,
  GetStartedCurveImageWrapper,
} from './style';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { api } from '@/utils/axiosInstance';
import { getFooterContent } from '@/utils/apiDefinition';

const GetStarted = () => {
  const [getStartedContent, setGetStartedContent] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      try {
        const res: any = await api.get(getFooterContent);
        if (res.data) {
          setGetStartedContent(res?.data?.section1);
        }
      } catch (error) {
        toast.error('Something went wrong');
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <GetStartedWrapper>
        <ContainerWrapper>
          <Stack
            direction="column"
            alignItems="center"
            pl={{ xs: 2, md: 0 }}
            pr={{ xs: 2, md: 0 }}
            pt={{ xs: 2, md: 5 }}
            pb={{ xs: 2, md: 5 }}
          >
            <Typography
              variant="h2"
              align="center"
            >
              {/* Ready to take the next Step with */}
              {getStartedContent?.heading_text?.replace("Let's Connect?", "")}
              <span className='gradient-text'> Let&apos;s Connect?</span>
              {/* <span style={{ color: '#635BFF' }}> Matchudo?</span> */}
            </Typography>
            <Typography
              width={{ xs: '90%', md: '50%' }}
              align="center"
            >
              {/* Join our platform today and unlock endless opportunities for
              collaboration, growth, and success. */}
              {getStartedContent?.sub_text}
            </Typography>
            <GetStartedButtonWrapper
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              width={{ xs: '90%', sm: '70%', md: '50%' }}
            >
              <CustomButton
                color="gradient"
                xsWidth="100%"
                mdWidth="45%"
                onClick={() => router.push(`/signup?role=INVESTOR`)}
              >
                Apply Now as Investor
              </CustomButton>
              <CustomButton
                color="gradient"
                xsWidth="100%"
                mdWidth="55%"
                onClick={() => router.push(`/signup?role=FOUNDER`)}
              >
                Apply Now as Founder
              </CustomButton>
            </GetStartedButtonWrapper>
          </Stack>
        </ContainerWrapper>
        {/* <GetStartedCurveImageWrapper>
          <Image
            src="/assets/images/bg-header.svg"
            alt="curve"
            width={1000}
            height={300}
            style={{ width: '100%', height: '100%' }}
          />
        </GetStartedCurveImageWrapper> */}
      </GetStartedWrapper>
    </>
  );
};

export default GetStarted;
