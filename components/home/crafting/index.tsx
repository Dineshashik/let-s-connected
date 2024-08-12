import CarftingCard from '@/components/common/carfting-card';
import CustomCarousel from '@/components/common/carousel';
import {
  ContainerWrapper,
  Typography,
  TitleWrapper,
} from '@/components/common/ui';
import { CarftingData } from './data';
import { useEffect, useState } from 'react';
import { getNewApproach } from '@/utils/apiDefinition';
import { api } from '@/utils/axiosInstance';
import { toast } from 'react-toastify';

const Carfting = () => {
  const [newApproachContent, setNewApproachContent] = useState<any>();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get(getNewApproach);
        if (res.data) {
          setNewApproachContent(res.data);
        }
      } catch (error) {
        toast.error('Something went wrong');
      }
    }
    fetchData();
  }, []);

  return (
    <ContainerWrapper maxWidth="xl">
      <TitleWrapper align="center">
        {/* A New Approach to How Founders and Investors Connect */}
        {newApproachContent?.heading_text}
      </TitleWrapper>
      <Typography
        align="center"
        mb={5}
        pl={2}
        pr={2}
      >
        {/* Built on three pillars, Matchudo serves as the central hub in the Middle
        East, fostering a new era of partnerships and innovation. */}
        {newApproachContent?.sub_text}
      </Typography>
      <CustomCarousel>
        {[
          newApproachContent?.box1,
          newApproachContent?.box2,
          newApproachContent?.box3,
        ].map((item, index) => (
          <CarftingCard
            data={item}
            key={index}
          />
        ))}
        {/* {CarftingData.map((item) => (
          <CarftingCard
            data={item}
            key={item.id}
          />
        ))} */}
      </CustomCarousel>
    </ContainerWrapper>
  );
};

export default Carfting;

// <Grid container spacing={2}>
// <Grid item xs={12} sm={4}>
//   <CarftingCard />
// </Grid>
// <Grid item xs={12} sm={4}>
//   <CarftingCard />
// </Grid>
// <Grid item xs={12} sm={4}>
//   <CarftingCard />
// </Grid>
// </Grid>
