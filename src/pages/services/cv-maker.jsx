import React from "react"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import InternetChecker from "../../components/AllServices/InternetSpeedCheckerCom/InternetChecker"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import dynamic from "next/dynamic"

const CVMakerPage = () => {
  return (
    <>
      <SEO pageTitle="Youtube Tags Extractor" />
      <Header />
      <InternetChecker />
      <ToastContainer />
      <HowToUse />
      <FooterTwo />
    </>
  )
}

export default dynamic(() => Promise.resolve(CVMakerPage), {
  ssr: false
})
