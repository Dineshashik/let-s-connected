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
  ResetPasswordPageWrapper,
} from './style';
import Image from 'next/image';
import { api } from '@/utils/axiosInstance';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface FormData {
  password: string;
  confirm_password: string;
}
const schema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirm_password: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const ResetPasswordPage = ({
  searchParams,
}: {
  searchParams: {
    id: string;
    code: string;
  };
}) => {
  const { id, code } = searchParams;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await api.post<any>(`/auth/setPassword/${id}/${code}`, {
        password: data.password,
      });
      if (res.message) {
        toast.success(res.message);
        router.push('/signin');
        setIsLoading(false);
      }
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <ResetPasswordPageWrapper>
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
                    Reset Your Password
                  </Typography>
                  {/* <Typography
                    align="center"
                    mx={2}
                  >
                    Reset Your Password
                  </Typography> */}
                </Stack>
              </PricingTopSection>
              <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <InputField
                  name="password"
                  label="New Password"
                  type="password"
                  register={register}
                  errors={errors}
                  placeholder="New Password"
                />
                <InputField
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  register={register}
                  errors={errors}
                  placeholder="Confirm Password"
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
                    lgWidth="40%"
                    icon="default"
                    type="submit"
                    isLoading={isLoading}
                    loadingText="Resetting..."
                  >
                    Reset Password
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
      </ResetPasswordPageWrapper>
    </>
  );
};

export default ResetPasswordPage;
