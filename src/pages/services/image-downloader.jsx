import React from "react"
import Breadcrumb from "../../components/common/Breadcrumb"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import YouTubeTagGetter from "../../components/AllServices/YouTubeTagsGetter/YouTubeTagGetter"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import WebPageLoadTimeChecker from "../../components/AllServices/WebPageLoadTimeChecker/WebPageLoadTimeChecker"
import DomainAvailabilityChecker from "../../components/AllServices/DomainInfo/DomainAvailablityChecker"
import ImageDownloader from "../../components/AllServices/ImageDownloader/ImageDownloader"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const ImageDownloaderPage = () => {
  return (
    <>
      <SEO pageTitle="Youtube Tags Extractor" />
      <Header />
      <ImageDownloader />
      {/* <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details"/> */}
      <ToastContainer />
      <HowToUse />
      <FooterTwo />
    </>
  )
}

export default ImageDownloaderPage
