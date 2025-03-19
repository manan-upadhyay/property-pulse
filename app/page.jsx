import React from 'react';
import Hero from '@/components/Hero';
import Infoboxes from '@/components/Infoboxes';
import HomeProperties from '@/components/HomeProperties';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Infoboxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
