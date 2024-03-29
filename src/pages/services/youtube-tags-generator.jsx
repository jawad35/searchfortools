import React from "react"
import Breadcrumb from "../../components/common/Breadcrumb"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import YouTubeTagGetter from "../../components/AllServices/YouTubeTagsGetter/YouTubeTagGetter"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import dynamic from "next/dynamic"

const YouTubeTagsGenerator = () => {
  return (
    <>
      <SEO pageTitle="Youtube Tags Extractor" />
      <Header />
      {/* <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details"/> */}
      <YouTubeTagGetter />
      <HowToUse />
      <FooterTwo />
    </>
  )
}

export default dynamic(() => Promise.resolve(YouTubeTagsGenerator), {
  ssr: false
})
