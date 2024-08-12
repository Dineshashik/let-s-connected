'use client';
import React, { useState } from 'react';
import {
  LinkWrapper,
  OtpPageWrapper,
  PricingCardWrapper,
  PricingTopSection,
  ResendOtp
} from './style';
import { ContainerWrapper, CustomButton } from '@/components/common/ui';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import OTPInput from 'react-otp-input';
import { api } from '@/utils/axiosInstance';
import { authResendOtp, authVerifyOtp } from '@/utils/apiDefinition';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();
  const onSubmit = async () => {
    try {
      setIsLoading(true)
      const email = localStorage.getItem('user_email');
      const res = await api.post<any>(authVerifyOtp, {
        email,
        otp: +otp,
      });
      if (res.success && res.message) {
        toast.success(res.message);
        router.push('/signin');
        setIsLoading(false)
      }
    } catch (error: any) {
      setIsLoading(false)
      toast.error(error.response.data.message);
    }
  };

  const handleResendOtp = async () => {
    try {
      const email = localStorage.getItem('user_email');
      const res = await api.post<any>(authResendOtp, {
        email,
      });
      if (res?.success && res?.message) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      setIsLoading(false)
      toast.error(error?.response?.message);
    }
  }
  
  return (
    <OtpPageWrapper>
      <ContainerWrapper>
        <Box px={2}>
          <PricingCardWrapper>
            <PricingTopSection direction="column">
              <Stack
                direction="row"
                justifyContent="center"
                my={4}
              >
                <Image
                  // src="/assets/icon/logo.svg"
                  src="/assets/images/letsconnect-gradient.svg"
                  alt="logo"
                  width={192}
                  height={30}
                />
              </Stack>

              <Stack>
                <Typography
                  variant="h4"
                  align="center"
                  mx={2}
                >
                  Enter your OTP
                </Typography>
                <Typography
                  align="center"
                  mx={2}
                >
                  Enter OTP to verify your email
                </Typography>
              </Stack>
            </PricingTopSection>
            <Stack
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              spacing={5}
              mx={{ xs: 2, md: 3, lg: 6 }}
            >
              <OTPInput
                value={otp}
                onChange={(value) => setOtp(value)}
                numInputs={6}
                shouldAutoFocus
                renderSeparator={<span>-</span>}
                inputStyle={{
                  borderRadius: '8px',
                  width: 'calc(100% / 6)',
                  height: '50px',
                  fontSize: '24px',
                  border: '1px solid #DEEAF6',
                  color: '#425466',
                  fontWeight: '600',
                  outline: 'none',
                  textAlign: 'center',
                }}
                renderInput={(props: any) => <input {...props} />}
              />
              <CustomButton
                color="blue"
                icon="default"
                onClick={onSubmit}
                isLoading={isLoading}
                loadingText='Verifying...'
              >
                Verify OTP
              </CustomButton>
            </Stack>
            <Typography
              mt={0}
              px={{ xs: 2, md: 4 }}
              py={{ xs: 4, md: 2 }}
              align="center"
            >
              Didn&apos;t receive OTP?{' '}
              <ResendOtp onClick={handleResendOtp}>Resend OTP</ResendOtp>
            </Typography>
            <Typography
              mt={1}
              px={{ xs: 2, md: 4 }}
              py={{ xs: 4, md: 6 }}
              align="center"
            >
              Don&apos;t have an account?{' '}
              <LinkWrapper href="/signup">Sign up</LinkWrapper>
            </Typography>
          </PricingCardWrapper>
        </Box>
      </ContainerWrapper>
    </OtpPageWrapper>
  );
};

export default OtpPage;
