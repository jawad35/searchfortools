import React from 'react';
import ContactMain from '../components/Contact';
import SEO from '../components/seo';
import dynamic from 'next/dynamic';

const Contact = () => {
  return (
    <>
     <SEO pageTitle="Contact"  />
      <ContactMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
