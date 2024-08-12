'use client';
import React, { useEffect, useState } from 'react';
import {
  HeaderWrapper,
  PricingSubTitleWrapper,
  PricingTitleWrapper,
} from './style';
import Navbar from '@/components/common/navbar';
import PricingCard from '@/components/common/pricing-card';
import { Grid, Stack, Typography } from '@mui/material';
import { PricingData } from './data';
import { ContainerWrapper } from '@/components/common/ui';
import GetStarted from '@/components/home/get-started';
import Footer from '@/components/common/footer';
import { api } from '@/utils/axiosInstance';
import { getSubscriptionContent } from '@/utils/apiDefinition';
import { toast } from 'react-toastify';

const PricingPage = () => {
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
      <HeaderWrapper>
        <Navbar />
        <ContainerWrapper>
          <PricingTitleWrapper mx={2} align='center'>
            Subscription Plans
          </PricingTitleWrapper>
          <PricingSubTitleWrapper mx={2} align='center'>
            Choose between the free demo access for an initial glimpse into the
            platform&apos;s capabilities and the full access to kickstart your
            journey to success with Let&#39;s Connect right away
          </PricingSubTitleWrapper>
          <Grid container spacing={2} mt={3}>
            {/* {PricingData.map((item) => (
              <Grid
                item
                xs={12}
                md={6}
                key={item.name}
              >
                <PricingCard data={item} />
              </Grid>
            ))} */}
            <Grid item xs={12} md={6} key={freeContent.name}>
              <PricingCard data={freeContent} />
            </Grid>
            <Grid item xs={12} md={6} key={premiumContent.name}>
              <PricingCard data={premiumContent} />
            </Grid>
          </Grid>
        </ContainerWrapper>
      </HeaderWrapper>
      <GetStarted />
      <Footer />
    </>
  );
};

export default PricingPage;
