import React from "react"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import ImageDownloader from "../../components/AllServices/ImageDownloader/ImageDownloader"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import dynamic from "next/dynamic"

const ImageDownloaderPage = () => {
  return (
    <>
      <SEO pageTitle="Youtube Tags Extractor" />
      <Header />
      <ImageDownloader />
      <ToastContainer />
      <HowToUse />
      <FooterTwo />
    </>
  )
}

export default dynamic(() => Promise.resolve(ImageDownloaderPage), {
  ssr: false
})
