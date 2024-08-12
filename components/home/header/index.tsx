import { Stack, Box } from '@mui/material';
import Image from 'next/image';
import { CustomButton } from '@/components/common/ui';
import {
  Title,
  SubTitle,
  HeaderWrapper,
  MainWrapper,
  HeaderImage,
  TitleWrapper,
} from './style';
import Navbar from '@/components/common/navbar';
import { HeaderCurveImageWrapper } from './style';
import { getHeroSection } from '@/utils/apiDefinition';
import { useEffect, useState } from 'react';
import { api } from '@/utils/axiosInstance';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const HeaderSection = () => {
  const [heroSectionContent, setHeroSectionContent] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    async function fetchLivePlatform() {
      try {
        const response: any = await api.get<any>(getHeroSection);
        if (response.success) {
          setHeroSectionContent(response.data);
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Somthing went wrong');
      }
    }

    fetchLivePlatform();
  }, []);
  return (
    <>
      <HeaderWrapper>
        <Navbar />

        <MainWrapper maxWidth="xl">
          <Stack direction={{ sm: 'column', md: 'row' }}   textAlign="center" justifyContent="center" alignItems="center" display="flex">
            <TitleWrapper>
              <Title
              textAlign={"center"}
                variant="h1"
                pl={{ lg: '14px' }}
                mt={{ xs: 5 }}
              >
                {heroSectionContent?.heading_text}
                {/* Revolutionizing <br />
                Business Matchmaking: Connecting Investors with Founders */}
              </Title>
              {/* <Stack justifyContent="center"> */}
    
      <div style={{textAlign:"center",margin:"20px 0"}}>
      <CustomButton color="gradient" icon='default' onClick={() => router.push("/signup")}>
            Sign Up Now
          </CustomButton>
      </div>
     
        {/* </Stack> */}
              <SubTitle pl={{ lg: 2 }} textAlign={"center"}>
                {heroSectionContent?.sub_text}
                {/* Matchudo is the revolutionary platform dedicated to
                intelligently matching founders with the right investors,
                pioneering a new era of strategic partnerships and growth in the
                Middle East. */}
              </SubTitle>
              {/* <Box pl={{ lg: 2 }}>
                <CustomButton
                  color="black"
                  onClick={() => router.push('/signup')}
                >
                  Start Now
                </CustomButton>
              </Box> */}
            </TitleWrapper>
            {/* <Box
              sx={{
                position: 'relative',
                width: { xs: '100%', sm: '80%', md: '50%' },
                margin: 'auto',
              }}
              mr={{ md: 2 }}
            >
              <HeaderImage
                src={
                  heroSectionContent?.image?.image_url ||
                  '/assets/images/header.svg'
                }
                alt="header"
                width={700}
                height={500}
              />
            </Box> */}
          </Stack>
        </MainWrapper>
        {/* <HeaderCurveImageWrapper>
          <Image
            src="/assets/images/bg-header.svg"
            alt="curve"
            width={1000}
            height={300}
            style={{ width: '100%', height: '100%' }}
          />
        </HeaderCurveImageWrapper> */}
      </HeaderWrapper>
    </>
  );
};

export default HeaderSection;
