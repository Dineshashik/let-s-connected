import {
  Stack,
  Box,
  CardActions,
  CardContent,
  Divider,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';
import Image from 'next/image';
import { CustomButton } from '../ui';
import {
  contentEvenly,
  contentCenter,
  contentBetween,
} from '@/utils/commonStyle';
import {
  OpportunityCardWrapper,
  OpportunityCardImage,
  ImageWrapper,
  BlurImageIconWrapper,
  BoxWrapper,
} from './style';
import { useRouter } from 'next/navigation';

const OpportunityBlurCard = ({ data }: any) => {
  const router = useRouter();
  return (
    <OpportunityCardWrapper>
      <ImageWrapper>
        <OpportunityCardImage
          src="/assets/images/company-2.png"
          alt="company"
          fill
        />
        <BlurImageIconWrapper
          src="/assets/icon/perfect_match.svg"
          alt="search"
          width={140}
          height={140}
        />
      </ImageWrapper>

      <CardContent>
        <BoxWrapper>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Typography align="left">Location</Typography>
            <Typography
              variant="h6"
              align="right"
            >
              {data?.location}
            </Typography>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Typography align="left">Funding Stage</Typography>
            <Typography
              variant="h6"
              align="right"
            >
              {data?.funding_stage}
            </Typography>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Typography align="left">Total Required</Typography>
            <Typography
              variant="h6"
              sx={{ color: '#2fb4f7' }}
              align="right"
            >
              {`$${data?.amount_to_raised}`}
            </Typography>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Typography align="left">Industry</Typography>
            <Typography
              variant="h6"
              sx={{ color: '#2fb4f7' }}
              align="right"
            >
              {data?.industry}
            </Typography>
          </Stack>
        </BoxWrapper>
      </CardContent>

      <Box style={contentCenter}>
        <CustomButton
          icon="redirect"
          color="gradient"
          xsWidth="90%"
          onClick={() => router.push('/signin')}
        >
          Explore Project
        </CustomButton>
      </Box>
    </OpportunityCardWrapper>
  );
};

export default OpportunityBlurCard;
