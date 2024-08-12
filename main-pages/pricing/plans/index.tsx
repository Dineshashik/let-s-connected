'use client';
import React, { useState } from 'react';
import {
  PricingCardWrapper,
  PricingPlanHeaderWrapper,
  PricingTopSection,
  RadioButtonWrapper,
  TypeText,
  TypeTextWrapper,
} from './style';
import Navbar from '@/components/common/navbar';
import { ContainerWrapper, CustomButton } from '@/components/common/ui';
import { Box, Divider, Grid, Radio, Stack, Typography } from '@mui/material';
import GetStarted from '@/components/home/get-started';
import Footer from '@/components/common/footer';

const PricingPlanPage = () => {
  const [selectedValue, setSelectedValue] = useState('3');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <>
      <PricingPlanHeaderWrapper>
        <Navbar />
        <ContainerWrapper>
          <Box px={2}>
            <PricingCardWrapper>
              <PricingTopSection>
                <TypeTextWrapper>
                  <TypeText
                    variant="h4"
                    align="center"
                  >
                    Select a Plan
                  </TypeText>
                </TypeTextWrapper>
                <Stack>
                  <Typography
                    variant="h3"
                    align="center"
                    mx={2}
                  >
                    Subscription Plans
                  </Typography>
                  <Typography
                    align="center"
                    mx={2}
                  >
                    Choose any one you want
                  </Typography>
                </Stack>
              </PricingTopSection>
              <Stack
                m={{ xs: 2, md: 4 }}
                spacing={3}
              >
                <RadioButtonWrapper
                  direction="row"
                  p={{ xs: 2, md: 4 }}
                >
                  <Radio
                    checked={selectedValue === '12'}
                    onChange={() => handleRadioChange('12')}
                    value={selectedValue}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': '12' }}
                  />
                  <Box>
                    <Typography
                      variant="h4"
                      fontSize={24}
                    >
                      3 Month
                    </Typography>
                    <Typography>
                      Note: Renews automatically every 3 months if not canceled.
                    </Typography>
                  </Box>
                </RadioButtonWrapper>
                <RadioButtonWrapper
                  direction="row"
                  p={{ xs: 2, md: 4 }}
                >
                  <Radio
                    checked={selectedValue === '3'}
                    onChange={() => handleRadioChange('3')}
                    value={selectedValue}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': '3' }}
                  />
                  <Box>
                    <Typography
                      variant="h4"
                      fontSize={24}
                    >
                      6 Month | 10% Off
                    </Typography>
                    <Typography>
                      Note: Renews automatically every 6 months if not canceled.
                    </Typography>
                  </Box>
                </RadioButtonWrapper>
                <RadioButtonWrapper
                  direction="row"
                  p={{ xs: 2, md: 4 }}
                >
                  <Radio
                    checked={selectedValue === '6'}
                    onChange={() => handleRadioChange('6')}
                    value={selectedValue}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': '6' }}
                  />
                  <Box>
                    <Typography
                      variant="h4"
                      fontSize={24}
                    >
                      12 Month | 20% Off
                    </Typography>
                    <Typography>
                      Note: Renews automatically every 12 months if not
                      canceled.
                    </Typography>
                  </Box>
                </RadioButtonWrapper>
              </Stack>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                m={{ xs: 2, md: 4 }}
                py={3}
              >
                <CustomButton
                  color="blue"
                  xsWidth="100%"
                  smWidth="70%"
                  mdWidth="40%"
                  lgWidth="30%"
                >
                  Continue
                </CustomButton>
              </Stack>
            </PricingCardWrapper>
          </Box>
        </ContainerWrapper>
      </PricingPlanHeaderWrapper>
      <GetStarted />
      <Footer />
    </>
  );
};

export default PricingPlanPage;
