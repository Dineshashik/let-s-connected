import Image from 'next/image';
import { IdeaCardWrapper, IdeaIconWrapper, CardTextWrapper } from './style';
import { contentCenter } from '@/utils/commonStyle';
import { Typography, Box, Grid, useMediaQuery, Theme } from '@mui/material';

interface IdeaCardDataType {
  image: { image_id: string; image_url: string };
  heading_text: string;
  sub_text: string;
}
const IdeaCard = ({ data }: { data: IdeaCardDataType }) => {
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  return (
    <IdeaCardWrapper
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: '#F6F9FC', // Set the background color here
      }}
      spacing={{ xs: 3, sm: 8 }}
      direction={{ xs: 'column', sm: 'row', md: 'column' }}
    >
      <IdeaIconWrapper>
        {data?.image?.image_url && (
          <Image
            src={data?.image?.image_url}
            alt="fund"
            width={isTablet ? 36 : 48}
            height={isTablet ? 36 : 48}
          />
        )}
      </IdeaIconWrapper>
      <CardTextWrapper>
        <Typography
          variant="h3"
          align="center"
          sx={{ textWrap: 'nowrap' }}
        >
          {data?.heading_text}
        </Typography>
        <Typography align="center">{data?.sub_text}</Typography>
      </CardTextWrapper>
    </IdeaCardWrapper>
  );
};

export default IdeaCard;
