'use client';
import React, { useState } from 'react';
import {
  ContainerWrapper,
  CustomButton,
  InputField,
} from '@/components/common/ui';
import { Box, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormWrapper,
  LinkWrapper,
  PricingCardWrapper,
  PricingTopSection,
  ForgetPasswordPageWrapper,
} from './style';
import Image from 'next/image';
import { api } from '@/utils/axiosInstance';
import { authForgetPassword } from '@/utils/apiDefinition';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface FormData {
  email: string;
}
const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const ForgetPasswordPage = () => {
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
      const res = await api.post<null>(authForgetPassword, data);

      if (res.message) {
        toast.success(res.message);
        setTimeout(() => {
          router.push('/signin');
        }, 1000);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <ForgetPasswordPageWrapper>
        <ContainerWrapper>
          <Box px={2}>
            <PricingCardWrapper>
              <PricingTopSection>
                <Stack direction='row' justifyContent='center' my={4}>
                  <Image
                    // src='/assets/icon/logo.svg'
                    src="/assets/images/letsconnect-gradient.svg"
                    alt='logo'
                    width={192}
                    height={30}
                  />
                </Stack>
                <Stack>
                  <Typography variant='h4' align='center' mx={2}>
                    Enter you email address
                  </Typography>
                  <Typography align='center' mx={2}>
                    To reset password enter your email address
                  </Typography>
                </Stack>
              </PricingTopSection>
              <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <InputField
                  name='email'
                  label='Email'
                  type='email'
                  register={register}
                  errors={errors}
                  placeholder='Email Address'
                />
                <Stack
                  direction='column'
                  alignItems='center'
                  justifyContent='center'
                  m={{ xs: 2, md: 4 }}
                  py={3}
                >
                  <CustomButton
                    color='blue'
                    xsWidth='100%'
                    smWidth='70%'
                    mdWidth='40%'
                    lgWidth='30%'
                    icon='default'
                    type='submit'
                  >
                    Continue
                  </CustomButton>
                </Stack>
              </FormWrapper>

              <Typography
                mt={8}
                px={{ xs: 2, md: 4 }}
                py={{ xs: 4, md: 6 }}
                align='center'
              >
                Don&apos;t have an account?{' '}
                <LinkWrapper href='/signup'>Sign up</LinkWrapper>
              </Typography>
            </PricingCardWrapper>
          </Box>
        </ContainerWrapper>
      </ForgetPasswordPageWrapper>
    </>
  );
};

export default ForgetPasswordPage;
