import React from 'react';
import SEO from '../components/seo';
import BlogMain from '../components/Blog';
import dynamic from 'next/dynamic';

const Blog = () => {
  return (
    <>
      <SEO pageTitle="Blog" />
      <BlogMain/>
    </>
  );
};

export default dynamic(() => Promise.resolve(Blog), { ssr: false });