import React from "react"
import Breadcrumb from "../../components/common/Breadcrumb"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import InternetChecker from "../../components/AllServices/InternetSpeedCheckerCom/InternetChecker"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CVMakerPage = () => {
  return (
    <>
      <SEO pageTitle="Youtube Tags Extractor" />
      <Header />
      {/* <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details"/> */}
      <InternetChecker />
      <ToastContainer />
      <HowToUse />
      <FooterTwo />
    </>
  )
}

export default CVMakerPage
