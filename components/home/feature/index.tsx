import { Grid, Theme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { FeaturedTitle, ImageWrapper } from './style';
import { ContainerWrapper } from '@/components/common/ui';
import { FeatureImageData } from './data';
import { getFeaturedIn } from '@/utils/apiDefinition';
import { api } from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const FeatureIn = () => {
  const [featureContent, setFeatureContent] = useState<any>();
  useEffect(() => {
    async function fetchData() {
      try {
        const res: any = await api.get(getFeaturedIn);
        if (res.data) {
          setFeatureContent(res.data);
        }
      } catch (error) {
        toast.error('Something went wrong');
      }
    }
    fetchData();
  }, []);

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  const FeatureImageContent = [
    featureContent?.section1,
    featureContent?.section2,
    featureContent?.section3,
    featureContent?.section4,
    featureContent?.section5,
    featureContent?.section6,
    featureContent?.section7,
    featureContent?.section8,
  ];
  return (
    <>
      <ContainerWrapper maxWidth="xl">
        <FeaturedTitle>{featureContent?.title}</FeaturedTitle>
        <Grid
          container
          spacing={2}
        >
          {FeatureImageContent.map((item, index) => (
            <ImageWrapper
              item
              xs={6}
              md={3}
              key={index}
            >
              <div
                style={{
                  position: 'relative',
                  width: isTablet ? '200px' : '250px',
                  height: isTablet ? '60px' : '80px',
                }}
              >
                <Image
                  src={item?.image?.image_url || '/asset/icon/logo-dummy.svg'}
                  alt={item?.image?.image_url || 'dummy'}
                  fill
                  objectFit="contain"
                />
              </div>
            </ImageWrapper>
          ))}
        </Grid>
      </ContainerWrapper>
    </>
  );
};

export default FeatureIn;
