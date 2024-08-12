import { Box, Divider, Stack, Typography } from '@mui/material';
import { CustomButton } from '../ui';
import Image from 'next/image';
import { PricingCardData } from './data';
import {
  PricingCardWrapper,
  TypeTextWrapper,
  PricingTopSection,
  TypeText,
  PricingDetailsWrapper,
} from './style';
import { useRouter } from 'next/navigation';

interface PricingCardType {
  id: number;
  iconUrl: string;
  title: string;
  details: string;
}

const PricingCard = ({ data }: any) => {
  const router = useRouter();
  return (
    <PricingCardWrapper>
      <PricingTopSection>
        <TypeTextWrapper>
          <TypeText
            variant="h4"
            align="center"
          >
            {data.name}
          </TypeText>
        </TypeTextWrapper>
        <Stack alignItems="center">
          {data.price === 'Free' ? (
            <Typography variant="h3">{data.price}</Typography>
          ) : (
            <Stack
              direction="row"
              alignItems="center"
            >
              <Typography variant="h3">{data.price}</Typography>
              <Typography
                variant="h4"
                color="#425466"
                mt={1}
              >
                /Month
              </Typography>
            </Stack>
          )}
          <Typography>{data.accessTime}</Typography>
          <CustomButton
            color="blue"
            xsWidth="40%"
            onClick={() => router.push('/signup')}
          >
            Get Started
          </CustomButton>
          <Box
            mt={{ xs: 1, md: 2 }}
            px={2}
          >
            {data?.price !== 'Free' ? (
              <Typography align="center">
                Discounts available for subscriptions of 6 months or more.
              </Typography>
            ) : (
              <Typography>&nbsp;</Typography>
            )}
          </Box>
        </Stack>
      </PricingTopSection>
      <Divider />
      <PricingDetailsWrapper>
        {data?.features?.map((item: any) => (
          <Stack
            direction="row"
            spacing={2}
            key={item.heading_text}
            mb={{ xs: 1, md: 2 }}
          >
            <Image
              // src={item.iconUrl}
              src={`/assets/icon/${item.check_box.toString()}.svg`}
              alt="icon"
              width={36}
              height={36}
            />
            <Box>
              <Typography variant="h6">{item.heading_text}</Typography>
              <Typography minHeight={data.name === 'Free' ? 30 : 0}>
                {item.sub_text}
              </Typography>
            </Box>
          </Stack>
        ))}
      </PricingDetailsWrapper>
    </PricingCardWrapper>
  );
};

export default PricingCard;
