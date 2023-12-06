import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import ServicesArea from '../common/Portfolio/ServicesArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="SERVICES" subtitle="Services" />
      <ServicesArea padd="pt-115 pb-130"/>
      <FooterTwo/>
    </>
  );
};

export default index;