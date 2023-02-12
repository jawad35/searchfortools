import React from "react"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
const HowToUse = dynamic(() =>
  import("../../components/common/How-to-use/HowToUse")
)
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import dynamic from "next/dynamic"

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

export default dynamic(() => Promise.resolve(ServicePage), { ssr: false })
