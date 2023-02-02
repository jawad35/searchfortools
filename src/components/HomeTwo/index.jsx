import React from 'react';
import BrandArea from '../common/BrandArea';
import Header from '../common/Header';
import AboutTwo from './AboutTwo';
import BlogTwo from './BlogTwo';
import CounterTwo from './CounterTwo';
import CtaTwo from './CtaTwo';
import FooterTwo from './HomeTwoFooter';
import HeroSlider from './HeroSlider';
import PortfolioTwo from './PortfolioTwo';
import ServicesTwo from './ServicesTwo';
import TeamTwo from './TeamTwo';
import TestimonialTwo from './TestimonialTwo';
import { positions, Provider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const HomeTwoMain = () => {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };
  return (
    <>
      <Header HeaderTwo={true} />
      <HeroSlider/>
      <Provider template={AlertTemplate} {...options}>
    <ServicesTwo/>
  </Provider>
      {/* <AboutTwo/> */}
      {/* <CounterTwo/> */}
      {/* <PortfolioTwo/> */}
      {/* <TestimonialTwo/> */}
      {/* <BrandArea hideTopBar={true} brand="-2" /> */}
      {/* <TeamTwo/> */}
      {/* <CtaTwo/> */}
      {/* <BlogTwo/> */}
      <FooterTwo/>
    </>
  );
};

export default HomeTwoMain;