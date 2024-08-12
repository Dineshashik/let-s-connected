import { Grid, Stack, Box, Typography } from '@mui/material';
import { ContainerWrapper, TitleWrapper } from '@/components/common/ui';
import OpportunityCard from '@/components/common/opportunity-card';
import {
  PricingMainWrapper,
  PricingTitle,
  PricingSubTitle,
  PricingBottomText,
} from './style';
import PricingCard from '@/components/common/pricing-card';
import CustomCarousel from '@/components/common/carousel';
import { PricingData } from './data';
import Image from 'next/image';
import { api } from '@/utils/axiosInstance';
import { getSubscriptionContent } from '@/utils/apiDefinition';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const breakpoint = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Pricing = () => {
  const [freeContent, setFreeContent] = useState<any>({});
  const [premiumContent, setPremiumContent] = useState<any>({});

  async function fetchSubscriptionContent(planType: string, setContent: any) {
    try {
      const response = await api.get<any>(
        `${getSubscriptionContent}?plan_type=${planType}`
      );
      if (response.success) {
        const newArray = Object.values(response?.data)?.filter(
          (obj) => typeof obj === 'object'
        );
        if (response?.data?.plan_type === 'FREE') {
          setContent({
            name: 'Demo Access',
            accessTime: 'Forever',
            features: newArray,
            price: 'Free',
          });
        } else {
          setContent({
            name: 'Full Access',
            accessTime: 'Monthly Price (including VAT)',
            features: newArray,
            price: `USD ${response?.data?.display_price}`,
          });
        }
        // console.log({ response });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
    }
  }

  useEffect(() => {
    fetchSubscriptionContent('PREMIUM', setPremiumContent);
    fetchSubscriptionContent('FREE', setFreeContent);
  }, []);

  return (
    <>
      <Box sx={{ position: 'relative', display: 'flex' }}>
        <Image
          src="/assets/images/subscription-curve.svg"
          alt="curve"
          width={1000}
          height={300}
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
      <PricingMainWrapper>
        <ContainerWrapper>
          <PricingTitle variant="h2">Subscription Plans</PricingTitle>
          <PricingSubTitle px={{ xs: 1, md: 2 }}>
            Choose between the free demo access for an initial glimpse into the
            platform&apos;s capabilities and the full access to kickstart your
            journey to success with Let&#39;s Connect right away
          </PricingSubTitle>
          <CustomCarousel breakpoint={breakpoint}>
            {/* {PricingData.map((item) => ( */}
            <PricingCard
              data={freeContent}
              key={freeContent.name}
            />
            <PricingCard
              data={premiumContent}
              key={premiumContent.name}
            />
            {/* ))} */}
          </CustomCarousel>
          <Stack
            mt={3}
            alignItems="center"
          >
            {/* <PricingBottomText>
              Discounts available for subscriptions of 6 months or more.
            </PricingBottomText> */}
          </Stack>
        </ContainerWrapper>
      </PricingMainWrapper>
    </>
  );
};

export default Pricing;
