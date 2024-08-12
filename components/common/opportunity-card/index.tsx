import {
  Stack,
  Box,
  CardActions,
  CardContent,
  Divider,
  CardMedia,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { CustomButton } from '../ui';
import { contentEvenly, contentCenter } from '@/utils/commonStyle';
import {
  LocationText,
  OpportunityCardWrapper,
  OpportunityCardImage,
  ImageWrapper,
  CardBottomTextWrapper,
  TextWrapper,
} from './style';
import { useRouter } from 'next/navigation';

const OpportunityCard = ({ data }: any) => {
  const {
    imageUrl,
    companyName,
    companyLocation,
    details,
    totalRequired,
    industry,
  } = data;
  const router = useRouter()
  return (
    <OpportunityCardWrapper>
      <ImageWrapper>
        <OpportunityCardImage
          src={imageUrl}
          alt="company"
          fill
        />
      </ImageWrapper>
      <CardContent>
        <Typography variant="h4">{companyName}</Typography>
        <Stack direction="row" mt={1}>
          <Image
            src="/assets/icon/location.svg"
            alt="location"
            width={14}
            height={16}
            style={{ margin: 'auto 0px' }}
          />
          <LocationText>{companyLocation}</LocationText>
        </Stack>
        <Typography>{details}</Typography>
      </CardContent>
      <Box style={contentCenter}>
        <CustomButton
          icon="redirect"
          color="blue"
          xsWidth="70%"
          onClick={() => router.push('/signup')}
        >
          Explore Project
        </CustomButton>
      </Box>
      <CardBottomTextWrapper direction="row">
        <TextWrapper direction="row">
          <Image
            src="/assets/icon/dollar.svg"
            alt="dollar"
            width={36}
            height={36}
          />
          <Box sx={{ marginLeft: '8px' }}>
            <Typography
              variant="h4"
              sx={{ color: '#2FB4F7' }}
            >
              {totalRequired}
            </Typography>
            <Typography style={{ marginTop: '0px' }}>Total Required</Typography>
          </Box>
        </TextWrapper>
        <Divider
          orientation="vertical"
          flexItem
        />
        <TextWrapper direction="row">
          <Image
            src="/assets/icon/industry.svg"
            alt="dollar"
            width={36}
            height={36}
          />
          <Box sx={{ marginLeft: '8px' }}>
            <Typography
              variant="h4"
              sx={{ color: '#2FB4F7' }}
            >
              {industry}
            </Typography>
            <Typography
              mt={0}
              mb={2}
            >
              Industry
            </Typography>
          </Box>
        </TextWrapper>
      </CardBottomTextWrapper>
    </OpportunityCardWrapper>
  );
};

export default OpportunityCard;
