import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import Image from 'next/image';
import { CardTitle, CardWrapper, IconWrapper, CardBadge } from './style';
import { contentCenter } from '@/utils/commonStyle';
import { Typography } from '../ui';

const CarftingCard = ({ data }: any) => {
  return (
    <CardWrapper
      alignItems="center"
      direction="column"
    >
      <CardBadge
        src="/assets/icon/badge.svg"
        alt="badge"
        width={150}
        height={150}
      />
      <IconWrapper>
        <Image
          src={data?.image?.image_url || '/assets/icon/search.svg'}
          alt="search"
          width={40}
          height={38}
          style={{ borderRadius: '25%',width:"44px" }}
        />
      </IconWrapper>
      <CardContent>
        <CardTitle variant="h3">{data?.heading_text}</CardTitle>
        <Typography align="center">{data?.sub_text}</Typography>
      </CardContent>
    </CardWrapper>
  );
};

export default CarftingCard;
