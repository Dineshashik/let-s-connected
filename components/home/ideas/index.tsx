import { Box, Grid } from '@mui/material';
import {
  ContainerWrapper,
  Typography,
  TitleWrapper,
} from '@/components/common/ui';
import IdeaCard from '@/components/common/idea-card';
import { IdeasMainWrapper, IdeaCurveImageWrapper } from './style';
import { IdeaCardData } from './data';
import Image from 'next/image';
import { getLivePlatform } from '@/utils/apiDefinition';
import { api } from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const LaunchingIdeas = () => {
  const [ideasContent, setIdeasContent] = useState<any>('');
  useEffect(() => {
    async function fetchData() {
      try {
        const res: any = await api.get(getLivePlatform);
        if (res.data) {
          const landingContent = res.data;
          landingContent['livePlatform']['box1']['heading_text'] = landingContent['activeInvestor'] ? addZeroes(landingContent['activeInvestor']) : '000';
          landingContent['livePlatform']['box2']['heading_text'] = landingContent['activeFounders'] ? addZeroes(landingContent['activeFounders']) : '000';
          landingContent['livePlatform']['box3']['heading_text'] = landingContent['amountRaised'] ? `$${formatToMillions(landingContent['amountRaised'])}` : `$0`;
          setIdeasContent(res.data);
        }
      } catch (error) {
        toast.error('Somthing went wrong');
      }
    }
    fetchData();
  }, []);

  const formatToMillions = (number: number) => {
    if (number >= 1000000) {
      return `${(number / 1000000).toFixed(1)}M`;
    }
    return number.toString(); // Returns the original number if it's less than 1 million
  };

  const addZeroes = (num: number) => {
    if (num < 10) {
      return `00${num}`;
    } else if (num < 100) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }

  return (
    <>
      <IdeasMainWrapper>
        <IdeaCurveImageWrapper>
          <Image
            src="/assets/images/launching-idea-curve.svg"
            alt="curve"
            width={1000}
            height={300}
            style={{ width: '100%', height: '100%' }}
          />
        </IdeaCurveImageWrapper>
        <ContainerWrapper>
          <Box mt={{ xs: 2, md: 5 }}></Box>
          <TitleWrapper align="center">
            {ideasContent?.livePlatform?.heading_text}
            {/* Matchudo&apos;s Live Platform Metrics:
            <br />
            Cultivating Efficient Growth and Transparency */}
          </TitleWrapper>
          <Typography
            align="center"
            pl={2}
            pr={2}
          >
            {ideasContent?.livePlatform?.sub_text}
            {/* Matchudo&apos;s metrics show our commitment to transparency and
            growth, fostering trust and enabling success for investors and
            founders. */}
          </Typography>
          <Grid
            container
            spacing={4}
            pr={2}
            pl={2}
          >
            {[ideasContent?.livePlatform?.box1, ideasContent?.livePlatform?.box2, ideasContent?.livePlatform?.box3].map(
              (item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  key={index}
                >
                  <IdeaCard data={item} />
                </Grid>
              )
            )}
          </Grid>
        </ContainerWrapper>
      </IdeasMainWrapper>
    </>
  );
};

export default LaunchingIdeas;
