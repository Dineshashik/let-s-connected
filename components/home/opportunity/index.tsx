'use client';
import { Grid, Typography } from '@mui/material';
import { ContainerWrapper, TitleWrapper } from '@/components/common/ui';
import OpportunityCard from '@/components/common/opportunity-card';
import { OpportunityMainWrapper } from './style';
import CustomCarousel from '@/components/common/carousel';
import { OpportunityData } from './data';
import OpportunityBlurCard from '@/components/common/opportunity-blur-card';
import React, { useEffect, useState } from 'react';
import { api } from '@/utils/axiosInstance';
import { getWebsiteProjects } from '@/utils/apiDefinition';
import { toast } from 'react-toastify';

const Opportunity = () => {
  // const [user, setUser] = useState<any>(null);
  const [latestProject, setLatestProject] = useState<any>([]);

  // useEffect(() => {
  //   const userJson = localStorage.getItem('MatchudoUserInfo');
  //   if (userJson) {
  //     const user = JSON.parse(userJson);
  //     setUser(user);
  //   }
  // }, []);

  useEffect(() => {
    const fetchLatestProject = async () => {
      try {
        const res = await api.get(getWebsiteProjects);

        if (res.success) {
          setLatestProject(res.data);
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Something went wrong');
      }
    };
    fetchLatestProject();
  }, []);
  return (
    <OpportunityMainWrapper>
      <ContainerWrapper>
        <TitleWrapper align="center">
        Find Your Perfect Match
        </TitleWrapper>
        <Typography align="center">
        Browse opportunities from the Let&apos;s Connect database.
        </Typography>
        <CustomCarousel>
          {latestProject.length > 0 ? (
            latestProject.map((item: any) => (
              <React.Fragment key={item._id}>
                {/* {user && (
                <OpportunityCard
                  data={item}
                  key={item.id}
                />
              )}
              {!user && ( */}
                <OpportunityBlurCard
                  data={item}
                  key={item._id}
                />
                {/* )} */}
              </React.Fragment>
            ))
          ) : (
            <Typography variant="h6">No Project Found</Typography>
          )}
        </CustomCarousel>
      </ContainerWrapper>
    </OpportunityMainWrapper>
  );
};

export default Opportunity;
