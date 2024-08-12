'use client';
import Carfting from '@/components/home/crafting';
import FeatureIn from '@/components/home/feature';
import HeaderSection from '@/components/home/header';
import LaunchingIdeas from '@/components/home/ideas';
import Investors from '@/components/home/investors';
import Opportunity from '@/components/home/opportunity';
import Pricing from '@/components/home/pricing';
import GetStarted from '@/components/home/get-started';
import Footer from '@/components/common/footer';

const HomePage = () => {
  return (
    <>
      <HeaderSection />
      {/* <FeatureIn /> */}
      <Carfting />
      <LaunchingIdeas />
      <Opportunity />
      <Investors /> 
      {/* <Pricing /> */}
      <GetStarted />
      <Footer />
    </>
  );
};

export default HomePage;
