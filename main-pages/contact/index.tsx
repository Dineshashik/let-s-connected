'use client';
import SignupNavbar from '@/components/common/signup-navbar';
import GetStarted from '@/components/home/get-started';
import Footer from '@/components/common/footer';
import Image from 'next/image';
import {
  Typography,
  InputField,
  TextareaInputField,
  ContainerWrapper,
  CustomButton,
} from '@/components/common/ui';
import { CardWrapper, FormWrapper } from './style';
import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { api } from '@/utils/axiosInstance';
import { toast } from 'react-toastify';
import { createSupportQuery } from '@/utils/apiDefinition';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await api.post<null>(createSupportQuery, data);
      if (res.message) {
        reset();
        toast.success(res.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <SignupNavbar type={'founder'} />
      <ContainerWrapper>
        <CardWrapper alignItems='center' direction='column'>
          <Grid container spacing={2}>
            {/* Left Side (Image) */}
            <Grid item xs={12} sm={6}>
              <Image
                src='/assets/images/contact-image-1.svg'
                width={100}
                height={100}
                alt='Your Image'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12} md={12}>
                <Box mx={{ xs: 2, md: 4 }}>
                  <Typography variant='h3'>Reach out to us today.</Typography>
                  <Typography variant='body1'>
                    We would love to hear from you. Concerns, queries or just
                    want to say hi?
                  </Typography>
                </Box>
              </Grid>
              <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} md={6}>
                    <InputField
                      name='firstName'
                      label='First Name'
                      type='text'
                      placeholder='First Name'
                      register={register}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputField
                      name='lastName'
                      label='Last Name'
                      type='text'
                      placeholder='Last Name'
                      register={register}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputField
                      name='email'
                      label='Email'
                      type='email'
                      placeholder='Email'
                      register={register}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputField
                      name='companyName'
                      label='Company Name'
                      type='text'
                      placeholder='Company Name'
                      register={register}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextareaInputField
                      name='message'
                      label='Message'
                      placeholder='Enter Message'
                      register={register}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} mt={3}>
                    <CustomButton
                      type='submit'
                      color='blue'
                      xsWidth='100%'
                      mdWidth='55%'
                    >
                      Send Message
                    </CustomButton>
                  </Grid>
                </Grid>
              </FormWrapper>
            </Grid>
          </Grid>
        </CardWrapper>
      </ContainerWrapper>
      <GetStarted />
      <Footer />
    </>
  );
};

export default ContactPage;
