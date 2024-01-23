import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import AboutMeArea from './AboutMeArea';
import AboutMeTabs from './AboutMeTabs';
import GetInTouch from './GetInTouch';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="OUR COURSES" subtitle="Courses" />
      <AboutMeTabs/>
      {/* <GetInTouch/> */}
      <FooterTwo/>
    </>
  );
};

export default index;