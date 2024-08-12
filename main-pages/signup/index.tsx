"use client"
import React, { useEffect, useState } from 'react';
import {
  ContainerWrapper,
  CustomButton,
  InputField,
} from '@/components/common/ui';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
  Theme,
} from '@mui/material';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { api } from '@/utils/axiosInstance';
import { authSignup } from '@/utils/apiDefinition';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import {
  FormWrapper,
  FounderInvestorTopSection,
  LinkWrapper,
  PricingCardWrapper,
  PricingTopSection,
  SignUpPageWrapper,
} from './style';

interface SignupFormData {
  first_name: string;
  last_name: string;
  company_name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    company_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(8, 'Password must be at least 8 characters long.'),
  })
  .required();

const SignUpPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [termsChecked, setTermsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const searchParams = useSearchParams();
  const role = searchParams.get('role') || '';
  
  useEffect(() => {
    setUserType(role);
  }, [role]);

  const onSubmit = async (data: any) => {
    if (!termsChecked) {
      toast.error('You must agree to the Terms of Service to sign up.');
      return;
    }

    const reqData = {
      ...data,
      role: userType,
    };
    localStorage.setItem('user_email', data.email);

    try {
      setIsLoading(true);
      const res = await api.post<any>(authSignup, reqData);
      if (res.success && res.message) {
        toast.success(res.message);
        router.push('/otp');
        setIsLoading(false);
      }
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <SignUpPageWrapper>
      <ContainerWrapper>
        {!userType ? (
          <Grid container spacing={2} p={{ xs: 4 }}>
            <Grid item xs={12} md={6}>
              <PricingCardWrapper>
                <FounderInvestorTopSection justifyContent="center" direction="row">
                  <Image
                    src="/assets/icon/signup-founder.svg"
                    alt="investor-icon"
                    height={isTablet ? 120 : 160}
                    width={isTablet ? 120 : 160}
                  />
                </FounderInvestorTopSection>
                <Stack mx={{ xs: 4, md: 8 }} mt={{ xs: 2, md: 4 }} mb={{ xs: '36px', md: '105px' }}>
                  <Typography fontSize={36} variant="h4" align="center">
                    I am an Investor
                  </Typography>
                  <Typography align="center" mt={2} mb={3}>
                    Get access to an extensive database of verified startups to invest in and expand your investment portfolio.
                  </Typography>
                  <CustomButton
                    icon="default"
                    color="blue"
                    onClick={() => setUserType('INVESTOR')}
                  >
                    Join as Investor
                  </CustomButton>
                </Stack>
              </PricingCardWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
              <PricingCardWrapper>
                <FounderInvestorTopSection justifyContent="center" direction="row">
                  <Image
                    src="/assets/icon/signup-investor.svg"
                    alt="founder-icon"
                    height={isTablet ? 120 : 160}
                    width={isTablet ? 120 : 160}
                  />
                </FounderInvestorTopSection>
                <Stack mx={{ xs: 4, md: 8 }} mt={{ xs: 2, md: 4 }} mb={{ xs: '36px', md: '105px' }}>
                  <Typography fontSize={36} variant="h4" align="center">
                    I am a Founder
                  </Typography>
                  <Typography align="center" mt={2} mb={3} ml="auto" mr="auto" width="90%">
                    Get access to an extensive database of verified investors and take your startup to new heights.
                  </Typography>
                  <CustomButton
                    icon="default"
                    color="blue"
                    onClick={() => setUserType('FOUNDER')}
                  >
                    Join as Founder
                  </CustomButton>
                </Stack>
              </PricingCardWrapper>
            </Grid>
          </Grid>
        ) : (
          <Box px={2}>
            <PricingCardWrapper>
              <PricingTopSection>
                <Stack direction="row" justifyContent="center" my={4}>
                  <Image
                    // src="/assets/icon/logo.svg"
                    src="/assets/images/letsconnect-gradient.svg"
                    alt="logo"
                    width={192}
                    height={30}
                  />
                </Stack>
                <Stack>
                  <Typography variant="h4" align="center" mx={2}>
                    Create your account
                  </Typography>
                  <Typography align="center" mx={2}>
                    Sign Up to continue.
                  </Typography>
                </Stack>
              </PricingTopSection>
              <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      name="first_name"
                      label="First Name"
                      type="text"
                      register={register}
                      errors={errors}
                      placeholder="First Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      name="last_name"
                      label="Last Name"
                      type="text"
                      register={register}
                      errors={errors}
                      placeholder="Last Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      name="company_name"
                      label="Company Name"
                      type="text"
                      register={register}
                      errors={errors}
                      placeholder="Company Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      name="email"
                      label="Email"
                      type="text"
                      register={register}
                      errors={errors}
                      placeholder="Email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      name="password"
                      label="Password"
                      type="password"
                      register={register}
                      errors={errors}
                      placeholder="Password"
                    />
                  </Grid>
                </Grid>

                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent='center' 
                  gap="20px"
                  width={"100%"}
                  // mx={{ xs: 2, md: 4 }}
                  my={3}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={termsChecked}
                        onChange={() => setTermsChecked(!termsChecked)}
                        color="primary"
                      />
                    }
                    style={{ justifyContent: 'flex-start' }}
                    label="By ticking this box, I confirm that I have read and agree to the Terms of Service."
                  />
                  <CustomButton
                    color="blue"
                    xsWidth="100%"
                    smWidth="70%"
                    mdWidth="40%"
                    lgWidth="40%"
                    icon="default"
                    type="submit"
                    isLoading={isLoading}
                    loadingText="Creating..."
                  >
                    Create Account
                  </CustomButton>
                </Stack>
              </FormWrapper>
              <Typography
                mt={2}
                px={{ xs: 2, md: 4 }}
                pb={{ xs: 2, md: 6 }}
                align="center"
              >
                Have an account?
                <LinkWrapper href="/signin"> Sign in</LinkWrapper>
              </Typography>
            </PricingCardWrapper>
          </Box>
        )}
      </ContainerWrapper>
    </SignUpPageWrapper>
  );
};

export default SignUpPage;
