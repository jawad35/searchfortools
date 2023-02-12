import React from "react"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import GetAllWebpageImages from "../../components/AllServices/AllWebImages/GetAllWebpageImages"
import dynamic from "next/dynamic"

const ImageDownloaderWebPage = () => {
  return (
    <>
      <SEO pageTitle="Youtube Tags Extractor" />
      <Header />
      <GetAllWebpageImages />
      {/* <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details"/> */}
      <ToastContainer />
      <HowToUse />
      <FooterTwo />
    </>
  )
}
export default dynamic(() => Promise.resolve(ImageDownloaderWebPage), {
  ssr: false
})
