import dynamic from 'next/dynamic';
import AboutMeMain from '../components/Courses';
import SEO from '../components/seo';

const Courses = () => {
  return (
    <>
      <SEO pageTitle="Courses" />
      <AboutMeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(Courses), { ssr: false });