'use client';
import React, { useState } from 'react';
import {
  ContainerWrapper,
  CustomButton,
  InputField,
} from '@/components/common/ui';
import { Box, Stack, Typography } from '@mui/material';
import { FieldValues, Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ForgotPasswordText,
  FormWrapper,
  LinkWrapper,
  PricingCardWrapper,
  PricingTopSection,
  SignInPageWrapper,
} from './style';
import Image from 'next/image';
import { api } from '@/utils/axiosInstance';
import { authSignin } from '@/utils/apiDefinition';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { setCookie } from 'cookies-next';

interface FormData {
  email: string;
  password: string;
}
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(8, 'Password must be at least 8 characters long.'),
  })
  .required();

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await api.post<any>(authSignin, data);
      if (res.success && res.message) {
        setCookie('userData', JSON.stringify(res.data));

        toast.success(res.message);
        router.push(
          `${
            process.env.NEXT_PUBLIC_REDIRECT_URL
          }/${res.data.role.toLowerCase()}?token=${res.data.token}`
        );
        setIsLoading(false);
      }
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <SignInPageWrapper>
        <ContainerWrapper>
          <Box px={2}>
            <PricingCardWrapper>
              <PricingTopSection>
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
                    Sign in to your account
                  </Typography>
                  <Typography
                    align="center"
                    mx={2}
                  >
                    Sign In to continue.
                  </Typography>
                </Stack>
              </PricingTopSection>
              <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <InputField
                  name="email"
                  label="Email"
                  type="email"
                  register={register}
                  errors={errors}
                  placeholder="Email Address"
                />
                <Box
                  py={1}
                  sx={{ position: 'relative' }}
                >
                  <ForgotPasswordText
                    onClick={() => router.push('/forget-password')}
                    sx={{ cursor: 'pointer' }}
                  >
                    Forgot Password?
                  </ForgotPasswordText>
                </Box>
                <InputField
                  name="password"
                  label="Password"
                  type="password"
                  register={register}
                  errors={errors}
                  placeholder="Password"
                />
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
                    icon="default"
                    type="submit"
                    isLoading={isLoading}
                    loadingText="Signin..."
                  >
                    Continue
                  </CustomButton>
                </Stack>
              </FormWrapper>
              <Typography
                mt={8}
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
      </SignInPageWrapper>
    </>
  );
};

export default SignInPage;
