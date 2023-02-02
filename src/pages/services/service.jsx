import React from "react"
import Breadcrumb from "../../components/common/Breadcrumb"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ServicePage = ({ children, HTUData }) => {
  return (
    <>
      <SEO pageTitle={HTUData?.title} />
      <Header />
      {/* <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details"/> */}
      <ToastContainer />
      {children}
      <HowToUse HTUData={HTUData} />
      <FooterTwo />
    </>
  )
}

export default ServicePage
